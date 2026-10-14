"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { ProjectImage } from "@/content/projects";

export function ScreenshotCarousel({
  images,
  projectTitle,
}: {
  images: ProjectImage[];
  projectTitle: string;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const gesture = useRef<{ x: number; y: number; pointerId: number } | null>(
    null,
  );
  const suppressClick = useRef(false);
  if (!images.length) return null;

  const index = Math.min(active, images.length - 1);
  const image = images[index];
  const multiple = images.length > 1;
  const slideId = `${id}-slide`;
  const helpId = `${id}-help`;

  function step(direction: number) {
    setActive(
      (current) => (current + direction + images.length) % images.length,
    );
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!multiple || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowLeft") step(-1);
    else if (event.key === "ArrowRight") step(1);
    else if (event.key === "Home") setActive(0);
    else if (event.key === "End") setActive(images.length - 1);
    else return;
    event.preventDefault();
  }

  return (
    <div
      className="screenshot-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectTitle} screenshots`}
      aria-describedby={multiple ? helpId : undefined}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {multiple && (
        <p id={helpId} className="carousel-help">
          Click the left half to go back or the right half to go next. Use dots,
          arrow keys, or swipe too.
        </p>
      )}
      <div
        className="carousel-viewport"
        onPointerDown={(event) => {
          suppressClick.current = false;
          if (event.pointerType === "touch" && multiple)
            gesture.current = {
              x: event.clientX,
              y: event.clientY,
              pointerId: event.pointerId,
            };
        }}
        onPointerCancel={() => {
          gesture.current = null;
        }}
        onPointerUp={(event) => {
          const start = gesture.current;
          gesture.current = null;
          if (!start || start.pointerId !== event.pointerId) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.25) {
            suppressClick.current = true;
            step(dx < 0 ? 1 : -1);
          }
        }}
        onClickCapture={(event) => {
          if (suppressClick.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
      >
        <figure
          id={slideId}
          className="carousel-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${images.length}`}
        >
          <div className="carousel-image-stage">
            <Image
              key={image.src}
              {...image}
              alt={image.alt}
              draggable={false}
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc(100vw - 64px), 1120px"
            />
            {multiple && (
              <>
                <button
                  type="button"
                  className="carousel-image-zone carousel-image-previous"
                  aria-label="Previous screenshot"
                  aria-controls={slideId}
                  onClick={() => step(-1)}
                >
                  <span className="carousel-image-hint" aria-hidden="true">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      focusable="false"
                    >
                      <path d="m15 5-7 7 7 7" />
                    </svg>
                  </span>
                </button>
                <button
                  type="button"
                  className="carousel-image-zone carousel-image-next"
                  aria-label="Next screenshot"
                  aria-controls={slideId}
                  onClick={() => step(1)}
                >
                  <span className="carousel-image-hint" aria-hidden="true">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      focusable="false"
                    >
                      <path d="m9 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
          <figcaption>{image.alt}</figcaption>
        </figure>
      </div>
      <div className="carousel-controls">
        <div className="carousel-pagination">
          {multiple && (
            <div
              className="carousel-dots"
              role="group"
              aria-label="Choose a screenshot"
            >
              {images.map((item, dot) => (
                <button
                  key={item.src}
                  type="button"
                  className="carousel-dot"
                  aria-label={`Show screenshot ${dot + 1} of ${images.length}: ${item.alt}`}
                  aria-pressed={index === dot}
                  aria-controls={slideId}
                  onClick={() => setActive(dot)}
                >
                  <span aria-hidden="true" />
                </button>
              ))}
            </div>
          )}
          <p
            className="carousel-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Screenshot {index + 1} of {images.length}
          </p>
        </div>

      </div>
    </div>
  );
}
