"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildContributionWeeks,
  summarizeCalendar,
  type ContributionDay,
} from "@/lib/github-calendar";

const dateLabel = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export function ContributionCalendar({ days }: { days: ContributionDay[] }) {
  const years = [...new Set(days.map((day) => day.date.slice(0, 4)))].reverse();
  const [year, setYear] = useState(years[0] ?? "");
  const visibleDays = days.filter((day) => day.date.startsWith(`${year}-`));
  return (
    <>
      <div className="calendar-heading">
        <div>
          <h3>Contribution calendar</h3>
          <p>Small steps, consistent progress.</p>
        </div>
        {years.length > 0 && (
          <label className="calendar-year">
            Year
            <select value={year} onChange={(event) => setYear(event.target.value)}>
              {years.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
        )}
      </div>
      <YearCalendar key={year} days={visibleDays} />
    </>
  );
}

function YearCalendar({ days }: { days: ContributionDay[] }) {
  const [selected, setSelected] = useState(days.length - 1);
  const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scroll.current) scroll.current.scrollLeft = scroll.current.scrollWidth;
  }, []);
  const summary = summarizeCalendar(days);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const weeks = buildContributionWeeks(days);
  const indices = new Map(days.map((day, index) => [day.date, index]));
  const active = days[selected];
  const columns = {
    gridTemplateColumns: `repeat(${weeks.length}, 16px)`,
  };

  function move(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const offset: Record<string, number> = {
      ArrowUp: -1,
      ArrowDown: 1,
      ArrowLeft: -7,
      ArrowRight: 7,
    };
    let next = index;
    if (event.key in offset) next = index + offset[event.key];
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = days.length - 1;
    else return;
    event.preventDefault();
    next = Math.max(0, Math.min(days.length - 1, next));
    setSelected(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className="contribution-calendar">
      <dl className="calendar-summary">
        <div><dt>Contributions</dt><dd>{summary.total.toLocaleString("en-US")}</dd></div>
        <div><dt>Active days</dt><dd>{summary.activeDays.toLocaleString("en-US")}</dd></div>
        <div><dt>Best day</dt><dd>{summary.bestDay?.count.toLocaleString("en-US") ?? 0}<span> contributions</span></dd></div>
      </dl>
      {days.length > 0 && <p className="calendar-range">{dateLabel(days[0].date)} &ndash; {dateLabel(days.at(-1)!.date)}</p>}
      <p id="calendar-instructions" className="calendar-help">
        Select a square or choose a date below. Arrow keys explore days; Home and End jump to the first and last date. Swipe to scroll.
      </p>
      <div
        ref={scroll}
        className="calendar-scroll"
        role="region"
        aria-label="Contribution calendar, scroll horizontally on smaller screens"
        tabIndex={0}
      >
        <div className="calendar-canvas">
          <div className="calendar-months" style={columns} aria-hidden="true">
            {weeks.map((week, index) => {
              const first = week.find(
                (day) => day && (index === 0 || day.date.endsWith("-01")),
              );
              return (
                <span key={index}>
                  {first
                    ? new Date(`${first.date}T00:00:00Z`).toLocaleDateString(
                        "en-US",
                        { timeZone: "UTC", month: "short" },
                      )
                    : ""}
                </span>
              );
            })}
          </div>
          <div className="calendar-body">
            <div className="calendar-weekdays" aria-hidden="true">
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>
            <div
              className="calendar-weeks"
              style={columns}
              role="group"
              aria-label="Daily contributions"
              aria-describedby="calendar-instructions"
            >
              {weeks.map((week, weekIndex) => (
                <div className="calendar-week" key={weekIndex}>
                  {week.map((day, row) => {
                    if (!day)
                      return (
                        <span
                          className="contribution-empty"
                          key={`blank-${row}`}
                        />
                      );
                    const index = indices.get(day.date)!;
                    const label = `${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${dateLabel(day.date)}`;
                    return (
                      <button
                        key={day.date}
                        type="button"
                        className={`contribution-day contribution-level-${day.level}`}
                        ref={(node) => {
                          buttons.current[index] = node;
                        }}
                        tabIndex={index === selected ? 0 : -1}
                        aria-label={label}
                        aria-pressed={index === selected}
                        title={label}
                        onClick={() => setSelected(index)}
                        onFocus={() => setSelected(index)}
                        onKeyDown={(event) => move(event, index)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div className="calendar-date-controls">
          <label htmlFor="contribution-date">Explore a date</label>
          <input
            id="contribution-date"
            type="date"
            min={days[0].date}
            max={days.at(-1)!.date}
            value={active.date}
            onChange={(event) => {
              const index = indices.get(event.target.value);
              if (index !== undefined) {
                setSelected(index);
                const cell = buttons.current[index];
                if (cell && scroll.current) {
                  const cellRect = cell.getBoundingClientRect();
                  const scrollRect = scroll.current.getBoundingClientRect();
                  scroll.current.scrollLeft += cellRect.left - scrollRect.left - scrollRect.width / 2;
                }
              }
            }}
          />
          <button className="button button-secondary" type="button" onClick={() => {
            setSelected(days.length - 1);
            buttons.current[days.length - 1]?.focus();
          }}>Latest day</button>
        </div>
      )}
      <div className="calendar-bottom">
        <p role="status" aria-live="polite">
          {active
            ? `${active.count} ${active.count === 1 ? "contribution" : "contributions"} on ${dateLabel(active.date)}`
            : "No contribution data available."}
        </p>
        <div
          className="calendar-legend"
          aria-label="Color intensity indicates fewer to more contributions"
        >
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              className={`legend-square contribution-level-${level}`}
              key={level}
              aria-hidden="true"
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
