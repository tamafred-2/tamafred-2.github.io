"use client";

import Link from "next/link";
import Image from "next/image";
import picture from "@/picture.jpg";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#certificates" },
  { label: "About", href: "/#about" },
  { label: "GitHub", href: "/#github" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    const desktop = window.matchMedia("(min-width: 768px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          <Image
            src={picture}
            alt=""
            width={44}
            height={44}
            className="brand-picture"
            loading="eager"
          />
          <span className="brand-name">{profile.name}</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle button button-secondary"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${open ? "is-open" : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
