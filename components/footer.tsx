import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">
            {profile.name}
            <span className="accent">.</span>
          </p>
          <p>Built with Next.js & TypeScript.</p>
        </div>
        <div className="footer-links">
          <a href={profile.githubUrl}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <p>
            Typeface:{" "}
            <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a> ·{" "}
            <a href="/fonts/OFL.txt">SIL OFL 1.1</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
