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

Stop the development server before starting the preview on the same port. GitHub activity uses a saved snapshot; ordinary builds do not require a GitHub request. The publishing workflow fetches fresh data hourly at minute 17 and on default-branch pushes. A failed refresh stops publication and leaves the live site unchanged. The section shows the last successful fetch time in SGT; GitHub can take up to 24 hours to count contributions.

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

`.github/workflows/pages.yml` checks, builds, and publishes the static export to GitHub Pages on pushes to the default branch (`main` or `master`), hourly, or by manual dispatch. Configure the repository's Pages source as GitHub Actions. Keep static export, trailing slashes, and unoptimized images enabled.

## Security and maintenance

The published site is static and has no visitor write API, login, database, or embedded GitHub token. Visitors can inspect or alter their own browser view, but cannot save changes to the hosted site. Repository/account access remains the trust boundary.

Workflow actions are pinned to commit SHAs, checkout credentials are not persisted, and deployment permissions are limited to the deploy job. Production dependency audits block publication on high/critical findings. Dependabot checks npm packages and Actions weekly; updates still need review.

In GitHub settings, enable two-factor authentication, review collaborators, protect the default branch against force pushes/deletion, and restrict the `github-pages` environment to that branch. These account/repository settings are not changed by source files. Keep HTTPS enforcement enabled.

Schedules run from the default branch, can be delayed, and GitHub disables public-repository schedules after 60 days without repository activity. Re-enable the workflow when needed. See [GitHub's schedule documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

## Assets

JetBrains Mono is bundled under the [SIL Open Font License](public/fonts/OFL.txt). Portraits, project screenshots, and certificates are supplied for this portfolio; their inclusion does not grant permission to reuse them.
