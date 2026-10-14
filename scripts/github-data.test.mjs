import test from "node:test";
import assert from "node:assert/strict";
import { parseContributionDays, summarizeDays } from "./github-data.mjs";
import { buildContributionWeeks } from "../lib/github-calendar.ts";

test("reads date, intensity, zero counts and comma-formatted contribution counts", () => {
  const html =
    '<td data-date="2026-01-01" id="day1" data-level="0"></td><tool-tip for="day1">No contributions on January 1st.</tool-tip><td id="day2" data-level="4" data-date="2026-01-02"></td><tool-tip for="day2">1,234 contributions on January 2nd.</tool-tip>';
  assert.deepEqual(parseContributionDays(html), [
    { date: "2026-01-01", count: 0, level: 0 },
    { date: "2026-01-02", count: 1234, level: 4 },
  ]);
});

test("rejects changed or incomplete markup instead of creating zero activity", () => {
  assert.throws(() => parseContributionDays("<html>Rate limited</html>"));
  assert.throws(() =>
    parseContributionDays(
      '<td data-date="2026-01-01" id="day1" data-level="0"></td>',
    ),
  );
  assert.throws(() =>
    parseContributionDays(
      '<td data-date="2026-01-01" id="day1" data-level="9"></td><tool-tip for="day1">1 contribution on January 1st.</tool-tip>',
    ),
  );
});

test("longest streak crosses month/year boundaries and resets on empty days", () => {
  const days = [
    { date: "2025-12-30", count: 0 },
    { date: "2025-12-31", count: 3 },
    { date: "2026-01-01", count: 1 },
    { date: "2026-01-02", count: 4 },
    { date: "2026-01-03", count: 0 },
    { date: "2026-01-04", count: 2 },
  ];
  assert.deepEqual(summarizeDays(days), {
    contributions: 10,
    longestStreak: 3,
  });
});

test("calendar padding keeps dates aligned across leap day and week boundaries", () => {
  const days = [
    "2024-02-27",
    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03",
  ].map((date) => ({ date, count: 0, level: 0 }));
  const weeks = buildContributionWeeks(days);
  assert.equal(weeks.length, 2);
  assert.deepEqual(weeks[0].slice(0, 2), [null, null]);
  assert.equal(weeks[1][0].date, "2024-03-03");
  assert.deepEqual(weeks.flat().filter(Boolean), days);
  assert.ok(weeks.every((week) => week.length === 7));
  assert.deepEqual(buildContributionWeeks([]), []);
});
