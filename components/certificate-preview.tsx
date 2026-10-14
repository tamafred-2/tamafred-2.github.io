"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { certificates } from "@/content/profile";

export function CertificatePreview({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const titleId = useId();

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  useEffect(() => restoreScroll, []);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="certificate-preview"
        aria-label={`Preview ${certificate.title} certificate`}
        aria-haspopup="dialog"
        onClick={() => {
          if (!dialog.current || dialog.current.open) return;
          dialog.current.showModal();
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
        }}
      >
        <Image
          src={certificate.preview}
          alt={`${certificate.title} certificate awarded to Alfred Tamayo`}
          width={certificate.width}
          height={certificate.height}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) 50vw, 33vw"
        />
      </button>
      <dialog
        ref={dialog}
        className="certificate-modal"
        aria-labelledby={titleId}
        onClose={() => {
          restoreScroll();
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) dialog.current?.close();
        }}
      >
        <div className="certificate-modal-heading">
          <h2 id={titleId}>{certificate.title}</h2>
          <button
            type="button"
            className="button button-secondary"
            aria-label="Close certificate preview"
            onClick={() => dialog.current?.close()}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <Image
          src={certificate.preview}
          alt={`${certificate.title} certificate awarded to Alfred Tamayo`}
          width={certificate.width}
          height={certificate.height}
          sizes="(max-width: 767px) calc(100vw - 64px), 1080px"
        />
      </dialog>
    </>
  );
}
