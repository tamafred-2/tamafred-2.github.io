import snapshot from "@/content/github.json";
import { ContributionCalendar } from "@/components/contribution-calendar";

function ActivityIcon({
  kind,
}: {
  kind: "activity" | "repository" | "streak" | "star";
}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "activity" && <path d="m13 2-8 12h6l-1 8 9-13h-7l1-7Z" />}
      {kind === "repository" && (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v9l9 5 9-5V8M12 13v9M7 6l9 5v5" />
        </>
      )}
      {kind === "streak" && (
        <>
          <path d="M12 3c1 5 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-6 0 4 3 4 3 1V3Z" />
        </>
      )}
      {kind === "star" && (
        <path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 3Z" />
      )}
    </svg>
  );
}

export function GitHubActivity() {
  const stats = [
    {
      label: "Contributions",
      value: snapshot.contributions.toLocaleString("en-US"),
      note: "Since February 2026",
      icon: "activity" as const,
    },
    {
      label: "Public repositories",
      value: snapshot.publicRepositories,
      note: "On GitHub",
      icon: "repository" as const,
    },
    {
      label: "Longest streak",
      value: `${snapshot.longestStreak} days`,
      note: "Within this calendar",
      icon: "streak" as const,
    },
    {
      label: "Stars earned",
      value: snapshot.starsEarned,
      note: "Owned public repositories",
      icon: "star" as const,
    },
  ];
  return (
    <section
      id="github"
      className="section github-section"
      aria-labelledby="github-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-index">06 / On GitHub</p>
          <h2 id="github-title">
            GitHub activity<span className="accent">.</span>
          </h2>
          <p className="github-intro">
            Contribution history and public GitHub statistics.
          </p>
        </div>
        <a
          className="button button-secondary"
          href={snapshot.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit @${snapshot.username} on GitHub (opens in a new tab)`}
        >
          Visit @{snapshot.username} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <dl className="github-stats">
        {stats.map((stat) => (
          <div className="github-stat" key={stat.label}>
            <span className="github-stat-icon">
              <ActivityIcon kind={stat.icon} />
            </span>
            <div>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
              <p>{stat.note}</p>
            </div>
          </div>
        ))}
      </dl>
      <div className="github-calendar-panel">
        <ContributionCalendar days={snapshot.days} />
      </div>
      <p className="github-source">
        Updated <time dateTime={snapshot.fetchedAt}>{new Date(snapshot.fetchedAt).toLocaleString("en-US", {
          timeZone: "Asia/Singapore", month: "short", day: "numeric", year: "numeric",
          hour: "numeric", minute: "2-digit",
        })} SGT</time> ·{" "}
        <a
          href={`${snapshot.profileUrl}?tab=overview&from=${snapshot.from}&to=${snapshot.to}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
      <p className="github-source">Refreshes hourly. GitHub may take up to 24 hours to count new contributions.</p>
    </section>
  );
}
