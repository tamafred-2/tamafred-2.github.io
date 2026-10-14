import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow section-index">404 / Page not found</p>
      <h1>
        A wrong turn<span className="accent">.</span>
      </h1>
      <p>
        This page may have moved, or the address may be incomplete.
        <br />
        You can find my projects back on the home page.
      </p>
      <Link href="/" className="button button-primary">
        Back home <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
