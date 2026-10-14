<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Portfolio project rules

This is the existing Next.js project and Git repository. Continue from current files; do not scaffold another project or initialize another repository.

Read README.md and all Markdown files in docs/ before implementation changes. Use Codex with this file as the sole project entry point. No additional assistant entry file is required. No AGENTS.nextjs.md was present at first implementation; if one appears, merge useful framework guidance here while preserving the managed block above.

- Keep root-level app/ and sibling content/, components/, and lib/ directories. Use content/profile.ts and content/projects.ts for public facts and lib/site.ts for the site URL.
- Follow docs/DESIGN_SYSTEM.md: minimal grid, light neutrals, Laravel-inspired red, JetBrains Mono, accessible text controls until lawful icons are supplied.
- Distinguish plans from shipped features and individual from team contributions. Omit unconfirmed statuses, URLs, roles, email, and resume. Use neutral text covers when approved screenshots are absent. Never expose patient data, private source, or internal endpoints.
- Preserve output: 'export', trailingSlash: true, unoptimized images, and generateStaticParams for every project. No runtime backend or dynamic APIs. Consult installed Next.js guides before framework changes.
- Keep Next.js and eslint-config-next compatible. Do not run npm audit fix --force or downgrade the config blindly.
- Run npm run lint, npm run typecheck, and npm run build. Preview out/ with npm run preview. Report browser inspection limits honestly and keep docs/CHECKLIST.md current.
- Local implementation and workflow preparation are authorized. Deployment requires the user's publishing instruction; report success only after checking the workflow and live site.
