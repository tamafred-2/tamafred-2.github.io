import { readFile, writeFile, rename } from "node:fs/promises";
import { parseContributionDays, summarizeDays } from "./github-data.mjs";

const username = "tamafred-2";
const snapshotPath = new URL("../content/github.json", import.meta.url);
const strict = process.argv.includes("--strict");
const dateOverride = process.argv
  .find((arg) => arg.startsWith("--date="))
  ?.slice(7);
const today =
  dateOverride ??
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
const dayMs = 86400000;
const end = new Date(`${today}T00:00:00Z`);
if (
  !/^\d{4}-\d{2}-\d{2}$/.test(today) ||
  Number.isNaN(end.valueOf()) ||
  end.toISOString().slice(0, 10) !== today
)
  throw new Error("Invalid snapshot date.");
const from = "2026-02-01";
const start = new Date(`${from}T00:00:00Z`);
if (end < start) throw new Error("Snapshot date precedes February 2026.");
const dayCount = Math.round((end - start) / dayMs) + 1;

async function request(url, json = true) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Alfred-Tamayo-Portfolio",
      Accept: json ? "application/vnd.github+json" : "text/html",
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}.`);
  return json ? response.json() : response.text();
}

async function fetchRepositories() {
  const repos = [];
  for (let page = 1; ; page++) {
    const batch = await request(
      `https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
    );
    if (!Array.isArray(batch))
      throw new Error("Unexpected repository response.");
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

try {
  const years = Array.from(
    { length: end.getUTCFullYear() - start.getUTCFullYear() + 1 },
    (_, index) => start.getUTCFullYear() + index,
  );
  const [profile, repos, ...calendars] = await Promise.all([
    request(`https://api.github.com/users/${username}`),
    fetchRepositories(),
    ...years.map((year) =>
      request(
        `https://github.com/users/${username}/contributions?from=${year}-01-01&to=${year}-12-31`,
        false,
      ),
    ),
  ]);
  if (profile.login?.toLowerCase() !== username)
    throw new Error("GitHub profile does not match.");
  const byDate = new Map(
    calendars.flatMap(parseContributionDays).map((day) => [day.date, day]),
  );
  const days = [];
  for (let offset = 0; offset < dayCount; offset++) {
    const date = new Date(start.valueOf() + offset * dayMs)
      .toISOString()
      .slice(0, 10);
    const day = byDate.get(date);
    if (!day)
      throw new Error(`Missing contribution day ${date}; no snapshot written.`);
    days.push(day);
  }
  const publicRepos = repos.filter(
    (repo) =>
      repo.private === false && repo.owner?.login?.toLowerCase() === username,
  );
  if (
    new Set(publicRepos.map((repo) => repo.id)).size !== publicRepos.length ||
    publicRepos.length !== profile.public_repos
  )
    throw new Error("Repository list incomplete; no snapshot written.");
  const owned = publicRepos.filter((repo) => !repo.fork);
  if (
    owned.some(
      (repo) =>
        !Number.isInteger(repo.stargazers_count) || repo.stargazers_count < 0,
    )
  )
    throw new Error("Invalid star count.");
  const snapshot = {
    username,
    profileUrl: `https://github.com/${username}`,
    fetchedAt: new Date().toISOString(),
    from,
    to: today,
    ...summarizeDays(days),
    publicRepositories: publicRepos.length,
    starsEarned: owned.reduce(
      (total, repo) => total + repo.stargazers_count,
      0,
    ),
    days,
    repositories: owned
      .filter((repo) => !repo.archived && !repo.disabled)
      .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
      .slice(0, 4)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
      })),
  };
  for (const repo of snapshot.repositories) {
    if (!repo.url.startsWith(`https://github.com/${username}/`))
      throw new Error("Unexpected repository URL.");
  }
  const temporary = new URL("../content/github.json.tmp", import.meta.url);
  await writeFile(temporary, `${JSON.stringify(snapshot, null, 2)}\n`);
  await rename(temporary, snapshotPath);
  console.log(
    `GitHub snapshot refreshed: ${from} to ${today}; ${snapshot.contributions} contributions, ${snapshot.publicRepositories} public repositories.`,
  );
} catch (error) {
  const existing = await readFile(snapshotPath, "utf8")
    .then(JSON.parse)
    .catch(() => null);
  if (
    strict ||
    existing?.username !== username ||
    !existing.days?.length
  )
    throw error;
  console.warn(
    `GitHub refresh unavailable: ${error.message} Keeping the dated snapshot through ${existing.to}.`,
  );
}
