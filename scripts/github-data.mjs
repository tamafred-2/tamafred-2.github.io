export function parseContributionDays(html) {
  const tips = new Map();
  for (const match of html.matchAll(
    /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g,
  )) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const count = text.match(/^(No|[\d,]+) contributions? on /)?.[1];
    if (id && count)
      tips.set(id, count === "No" ? 0 : Number(count.replaceAll(",", "")));
  }
  const days = [];
  for (const match of html.matchAll(/<td\b([^>]*)>/g)) {
    const attrs = match[1];
    const date = attrs.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    if (!date) continue;
    const id = attrs.match(/\bid="([^"]+)"/)?.[1];
    const level = Number(attrs.match(/\bdata-level="([0-4])"/)?.[1]);
    const count = tips.get(id);
    if (!Number.isInteger(count) || !Number.isInteger(level))
      throw new Error(
        "GitHub contribution markup changed; no snapshot written.",
      );
    days.push({ date, count, level });
  }
  if (!days.length) throw new Error("No contribution data found.");
  return days;
}

export function summarizeDays(days) {
  let streak = 0;
  let longestStreak = 0;
  let contributions = 0;
  for (const day of days) {
    contributions += day.count;
    streak = day.count > 0 ? streak + 1 : 0;
    longestStreak = Math.max(longestStreak, streak);
  }
  return { contributions, longestStreak };
}
