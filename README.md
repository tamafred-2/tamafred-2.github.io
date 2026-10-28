# Alfred Tamayo | Portfolio

A personal portfolio showcasing web systems, mobile apps, experience, and certificates. Built with Next.js, React, TypeScript, and Tailwind CSS, with static export for GitHub Pages.

## Getting started

Requires Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check code quality |
| `npm run typecheck` | Generate route types and check TypeScript |
| `npm run build` | Export the production site to `out/` |
| `npm run preview` | Serve the export at http://localhost:3000 |
| `npm run refresh:github` | Refresh the public GitHub activity snapshot |

Stop the development server before starting the preview on the same port. GitHub activity uses a saved snapshot; ordinary builds do not require a GitHub request.

## Project structure

```text
app/          Pages, metadata, and global styles
components/   Reusable interface components
content/      Profile, projects, and GitHub activity data
lib/          Shared utilities and site configuration
public/       Images, certificates, and fonts
scripts/      Static preview and GitHub data utilities
```

Edit `content/profile.ts` for personal details and `content/projects.ts` for project content. Set the public URL in `lib/site.ts`. Add approved assets to `public/` and reference them from the content records.

## Deployment

`.github/workflows/pages.yml` checks, builds, and publishes the static export to GitHub Pages on pushes to `main` or `master`. Configure the repository's Pages source as GitHub Actions. Keep static export, trailing slashes, and unoptimized images enabled.

## Assets

JetBrains Mono is bundled under the [SIL Open Font License](public/fonts/OFL.txt). Portraits, project screenshots, and certificates are supplied for this portfolio; their inclusion does not grant permission to reuse them.
