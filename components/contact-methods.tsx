"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

type Contact = (typeof profile.contacts)[number];

// Original outline drawings, with text labels supplying the accessible names.
function ContactIcon({ kind }: { kind: Contact["icon"] }) {
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
      {kind === "code" && (
        <>
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
        </>
      )}
      {kind === "briefcase" && (
        <>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V4h8v3M3 12c5 4 13 4 18 0M10 14h4" />
        </>
      )}
      {kind === "chat" && (
        <>
          <path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="M8 9h8m-8 4h5" />
        </>
      )}
      {kind === "globe" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18" />
        </>
      )}
      {kind === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}
    </svg>
  );
}

export function ContactMethods() {
  const [feedback, setFeedback] = useState("");

  async function copyUsername(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setFeedback("Discord username copied.");
    } catch {
      setFeedback(`Copy manually: ${value}`);
    }
  }

  return (
    <div className="contact-methods">
      <ul className="contact-grid" aria-label="Ways to contact Alfred">
        {profile.contacts.map((contact) => {
          const opensNewTab = contact.href?.startsWith("https://") ?? false;
          const content = (
            <>
              <span className="contact-icon">
                <ContactIcon kind={contact.icon} />
              </span>
              <span className="contact-text">
                <span className="contact-label">{contact.label}</span>
                <span className="contact-value">{contact.value}</span>
                {!contact.href && (
                  <span className="contact-hint">Copy username</span>
                )}
              </span>
              <span className="contact-arrow" aria-hidden="true">
                {contact.href ? "↗" : "⧉"}
              </span>
            </>
          );
          return (
            <li key={`${contact.label}-${contact.value}`}>
              {contact.href ? (
                <a
                  className="contact-card"
                  href={contact.href}
                  target={opensNewTab ? "_blank" : undefined}
                  rel={opensNewTab ? "noopener noreferrer" : undefined}
                  aria-label={opensNewTab ? `${contact.label}: ${contact.value} (opens in a new tab)` : undefined}
                >
                  {content}
                </a>
              ) : (
                <button
                  className="contact-card"
                  type="button"
                  onClick={() => copyUsername(contact.value)}
                  aria-label={`Copy ${contact.label} username: ${contact.value}`}
                >
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <p className="contact-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
    </div>
  );
}
