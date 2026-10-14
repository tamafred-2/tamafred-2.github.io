# Alfred Tamayo — Portfolio

A minimal developer portfolio built in the existing Next.js App Router project. Light neutral surfaces, Laravel-inspired red accents, and locally hosted JetBrains Mono.

## Local preview

Use Node.js 24 and npm. Install with `npm ci` when needed.

```bash
npm run dev
```

Open http://localhost:3000. To preview the actual GitHub Pages export:

```bash
npm run build
npm run preview
```

The preview serves `out/` on http://localhost:3000 with directory routes and custom 404 handling. Stop either server with Ctrl+C before starting the other on the same port.

## Verification

Refresh the public GitHub snapshot with `npm run refresh:github`, then build to include it. GitHub Activity includes a calendar from February 1, 2026 through the latest refresh date, accurate public statistics, and a profile link. The dated local snapshot keeps the site usable offline and is preserved if GitHub is unavailable. Pages builds refresh it automatically; ordinary dev/build commands use the saved snapshot without network access. Run `node --test scripts/github-data.test.mjs` for the parser, streak, and calendar boundary checks.

```bash
npm run lint
npm run typecheck
npm run build
```

Type checking runs `next typegen` before TypeScript, including on a clean checkout. The production build exports all seven detail pages.

## Project structure

```text
app/                        Home, project routes, layout, 404, metadata, styles
components/                 Navigation, footer, project covers/cards, filters
content/profile.ts          Identity, experience, education, skills, optional contact/resume
content/projects.ts         Typed project inventory and approved assets/links
lib/site.ts                 Intended public URL and shared metadata
public/fonts/               JetBrains Mono WOFF2 and SIL Open Font License
scripts/preview.mjs          Dependency-free static export preview
.github/workflows/pages.yml GitHub Pages build and deployment
docs/                       Requirements, design, content, deployment, prompts, checklist
```

No `src/` directory is used. Read [AGENTS.md](AGENTS.md) before editing, then the documents in [docs/](docs/).

## Content and assets

Project detail screenshots use a carousel directly below the project title, with one dot per image, clickable image halves, captions, and a slide count. Click the left half of the screenshot for the previous slide or the right half for the next. Arrow keys, horizontal swipes, and direct dot selection also work. Screenshots do not open new tabs. There is no autoplay.

The Certificates section includes Computer Hardware Basics, Introduction to Cybersecurity, and Build with AI 2026 – Baguio. Accurate completion/participation labels accompany dates, issuers, uncropped previews, and original PDF links. Data lives in `content/profile.ts`; documents and previews are in `public/certificates/`.

Three featured projects and four further projects are included. The default collection avoids duplicates; category filters search the entire inventory. Details distinguish planned work from confirmed contribution and describe historical stacks as project context. Cooper is a private team project.

Further project screenshots, resume, and confirmed project links/statuses are pending. Incident Monitoring has login, dashboard, and analytics previews; RHU Calasiao has login, dashboard, analytics, and service report previews. Screenshots are displayed in the carousel. The user confirmed that both dashboards use fictional demo records, which their captions identify. The contact section includes the supplied GitHub, LinkedIn, Facebook, Discord username, and both public emails, with original outline SVG icons and a copy-username control. The UI uses deliberate project text covers and omits unavailable actions and empty galleries. Add approved files and verified facts to the content records. Keep patient data and internal company systems private.

JetBrains Mono v2.304 is bundled under SIL OFL 1.1; the license is in `public/fonts/OFL.txt`. Attribution is shown in the footer and recorded in [docs/CONTENT.md](docs/CONTENT.md).

## Deployment

Prepared for the root site `https://tamafred-2.github.io/`, with static export, trailing slashes, and unoptimized images. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the workflow and remaining account/repository setup. The repository is connected to tamafred-2/tamafred-2.github.io. The live site is https://tamafred-2.github.io/. GitHub Pages uses the GitHub Actions workflow; deployment verification is recorded in docs/CHECKLIST.md.

Versions: Next.js 16.4.0, React 19.3.0, Tailwind CSS 4.3.3, TypeScript 5.9.3, ESLint 9.39.5; local Node 24.16.0 / npm 11.13.0. Dependencies are preserved. The audit's proposed ESLint config downgrade is incompatible with ESLint 9; see the deployment document for outstanding dev-tool audit findings.

Browser QA was unavailable because no browser provider was connected. See [docs/CHECKLIST.md](docs/CHECKLIST.md) for verification results and remaining manual checks.

The inventory includes Jodate, Tudu, and EIMSS for TESDA El Nazareno. Mobile Apps filters the two Flutter projects. EIMSS retains `/projects/tesda-support-system/`; Incident Monitoring remains separate. Unconfirmed implementations and platforms are not asserted.
