<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Portfolio conventions

Read README.md before changes. Continue in this repository; do not scaffold a replacement.

- Keep root-level app/, components/, content/, and lib/. Public facts belong in content/profile.ts and content/projects.ts; the site URL belongs in lib/site.ts.
- Preserve the minimal grid, light neutrals, red accents, JetBrains Mono, thin borders, visible keyboard focus, and responsive layouts. Use approved assets and retain their licenses.
- Distinguish planned features from shipped work and individual from team contributions. Omit unconfirmed details. Never expose patient data, private source, credentials, or internal endpoints.
- Preserve static export, trailing slashes, unoptimized images, and generateStaticParams for each project. Do not add runtime backend dependencies.
- Keep Next.js and eslint-config-next compatible. Do not force dependency fixes or disable checks.
- For application changes, run npm run lint, npm run typecheck, and npm run build; preview out/ with npm run preview. Report checks and browser inspection limits accurately.
- Keep documentation concise in README.md. Do not add planning prompts, session logs, or historical checklists to the repository.
- Deployment requires the user's publishing instruction. Verify the workflow and live site before reporting deployment success.
