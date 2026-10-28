export type ContributionDay = { date: string; count: number; level: number };

export function buildContributionWeeks(days: ContributionDay[]) {
  const first = days[0];
  if (!first) return [];
  const leading = new Date(`${first.date}T00:00:00Z`).getUTCDay();
  const cells: (ContributionDay | null)[] = [
    ...Array(leading).fill(null),
    ...days,
  ];
  while (cells.length % 7) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
}

export function summarizeCalendar(days: ContributionDay[]) {
  return days.reduce(
    (summary, day) => ({
      total: summary.total + day.count,
      activeDays: summary.activeDays + (day.count > 0 ? 1 : 0),
      bestDay: !summary.bestDay || day.count > summary.bestDay.count ? day : summary.bestDay,
    }),
    { total: 0, activeDays: 0, bestDay: null as ContributionDay | null },
  );
}
