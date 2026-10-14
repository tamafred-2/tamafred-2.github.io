# GitHub Pages Deployment

## Target

Public repository: tamafred-2.github.io

Intended URL: https://tamafred-2.github.io/

Confirm the account and repository. This root-site setup needs no basePath. A repository named portfolio would use /portfolio/ and require matching basePath, assets, and metadata.

## Next.js configuration

Merge this into the one active Next.js config. Verify against the installed version.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
```

Build output is out/. Prepare compressed/resized images beforehand. This setup has no runtime image optimization server.

Generate all public project routes with generateStaticParams. Inspect each exported route. Do not require runtime route generation, cookies/headers, Server Actions, dynamic API endpoints, ISR, or SSR. Build-time server components are fine.

Do not use standalone output or next start as the Pages deployment path. Avoid optional framework features such as Cache Components unless static-export compatibility is verified.

## Package scripts

Create equivalent scripts using the installed tools; preserve other useful scripts.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint .",
    "typecheck": "next typegen && tsc --noEmit",
    "preview": "node scripts/preview.mjs"
  }
}
```

Commit package-lock.json. Do not assume obsolete next lint support. Tailwind configuration must match its actual installed version.

## Workflow template

The following matches .github/workflows/pages.yml. Checkout/setup-node v7 use Node 24 internally; ubuntu-latest is used. configure-pages v5, upload-pages-artifact v4, and deploy-pages v4 follow the official Pages workflow. Versions were checked against official action documentation on October 13, 2026. The remote workflow has not been run.

```yaml
name: Publish portfolio

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: portfolio-pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: "24"
          cache: npm
      - uses: actions/configure-pages@v5
      - run: npm ci
      - run: npm run refresh:github
      - run: npm run lint
      - run: npm run typecheck
      - run: node --test scripts/github-data.test.mjs
      - run: npm run build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.publish.outputs.page_url }}
    steps:
      - name: Publish
        id: publish
        uses: actions/deploy-pages@v4
```

Match Node to local development and installed dependencies. GitHub supplies the workflow token; a personal token is not needed in this file.

In Settings → Pages → Build and deployment, choose GitHub Actions. Upload out/, not .next/ or the source folder.

## URLs and assets

The root site can use public asset paths such as /projects/ngitora/overview.webp.

For a project-repository variant, set basePath and inspect all image, font, resume, and CSS URLs. Framework link handling does not automatically repair arbitrary asset URLs. assetPrefix is not a substitute for correct basePath handling.

Keep the public site URL in one shared configuration and derive canonical URLs and sitemap entries from it. Do not publish localhost metadata.

## Verification

Run lint, typecheck, and build. Preview out/ with npm run preview. Load project detail URLs directly and refresh them. Confirm referenced images/fonts/resume files exist.

After pushing, inspect the workflow run and open the returned deployment URL. Verify home, detail pages, assets, contact links, and metadata. A successful push alone does not prove deployment.

## Troubleshooting

| Problem               | Check                                                          |
| --------------------- | -------------------------------------------------------------- |
| configure-pages fails | Enable Pages/GitHub Actions; visibility and organization rules |
| npm ci fails          | Lockfile committed and synchronized                            |
| Export fails          | Runtime-only features, config, generateStaticParams            |
| Missing images/fonts  | File existence, filename case, paths, basePath                 |
| Detail refresh fails  | trailingSlash and generated detail index.html                  |
| Root URL 404          | Repository name, deploy result, out/index.html                 |
| Permissions error     | pages: write, id-token: write, environment rules               |

## Official references

- https://nextjs.org/docs/app/guides/static-exports
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml

Prepared October 13, 2026. Recheck version-specific instructions when implementing.

## Local implementation status

The Pages workflow now runs npm run refresh:github after installation and before checks/build. It reads only public GitHub endpoints and updates content/github.json in the build workspace without committing or pushing generated data. A failed refresh preserves the saved snapshot and its visible date; if no valid snapshot exists, refresh fails. Local dev and build work offline from the saved JSON. To demand a successful refresh manually, use npm run refresh:github -- --strict. No credentials or additional runtime service are required. The workflow still needs remote deployment verification.

Installed: Node 24.16.0, npm 11.13.0, Next.js / eslint-config-next 16.4.0, React / React DOM 19.3.0, Tailwind CSS / @tailwindcss/turbopack 4.3.3, TypeScript 5.9.3, ESLint 9.39.5. The existing Turbopack Tailwind loader is preserved. Cache Components and partial prefetching were removed for static export.

The typecheck script generates route types before tsc, including on a fresh CI checkout. The dependency-free preview server serves out/ on http://localhost:3000, with directory routes and custom 404 responses. next start is not used.

No Git remote is configured as inspected. The current local branch is master, so the workflow accepts both master and main without requiring a branch rename. Confirm tamafred-2 ownership, connect the existing repository to tamafred-2/tamafred-2.github.io, review/commit changes including package-lock.json, and push the intended branch when ready. Select GitHub Actions in Settings → Pages. No push or public deployment was performed.

Dependency audit: npm audit reports five high-severity findings in the dev-tool chain eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces. The proposed downgrade to eslint-config-next 14.2.35 requires ESLint ^7.23.0 or ^8.0.0, incompatible with installed ESLint 9.39.5 and the retained Next.js 16 pairing. Dependencies and lockfile were left unchanged; no force fix or suppression was applied. Reassess upstream fixes separately.

The production-only audit (`npm audit --omit=dev --json`) reports zero vulnerabilities. This does not resolve the five development-tool findings above.

Action references: https://github.com/actions/checkout ; https://github.com/actions/setup-node ; https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml
