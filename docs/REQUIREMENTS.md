# Portfolio Requirements

## Purpose and audience

Help recruiters and potential collaborators quickly understand Alfred's work, contribution, and skills. Prioritize real project evidence, concise explanations, and working links. The portfolio is a showcase, not a deployment of every underlying application.

## First-release routes

| Route             | Content                                                                        |
| ----------------- | ------------------------------------------------------------------------------ |
| /                 | Hero, featured work, all projects, experience, skills, about, contact, credits |
| /projects/[slug]/ | Statically generated details for each public project record                    |
| 404 page          | Brief explanation and link home                                                |

Use a single home page with anchor navigation: Work, Experience, Certificates, About, GitHub, Contact. GitHub Activity sits directly before Contact; its navigation link targets /#github. A thin sticky header is acceptable if it does not obscure anchor targets.

The home page also includes Certificates between Skills and About, with a Certificates navigation anchor. Use real document previews, accurate course-completion/participation labels, documented issuers/dates, and PDF links that open in a new tab. Do not imply professional accreditation or invent credential verification links.

## Features

### Introduction

Show name, proposed title, a concise biography, View Projects, and a resume link only when an approved file is present. No profile photo is required. Do not invent availability or a services offering.

### Projects

Show at most three featured projects near the top and a compact collection below. Avoid duplicating featured cards in the default collection; make the organization obvious. Client-side category filters may include All, Web Systems, AI & Automation, Academic, and Mobile Apps. Only show categories represented by actual records. A project can belong to more than one category.

Each card shows an approved image or deliberate neutral text cover, title, concise summary, a short stack list, and a detail-page link. Show status only if confirmed; do not default everything to completed or live. Use no fake metrics or star ratings.

### Project details

Include overview, problem, personal role/contribution, selected features, technology, screenshots, and short lessons/next steps if approved. Hide empty sections. Only render working, verified repository/demo links. Label Cooper as a private internship project and omit its source link by default.

Project screenshots use a carousel directly below the project title, replacing the detail cover and lower screenshot gallery. Show one image at a time with its caption, previous/next buttons, one selected-state dot per image, and a visible slide count. Allow direct dot selection, Left/Right and Home/End keyboard navigation, and horizontal touch swipes. Clicking the left 50% of the image selects the previous screenshot; clicking the right 50% selects the next. Images have no new-tab links. Preserve vertical page scrolling and static export. Do not auto-advance. Omit the carousel for empty image lists and hide navigation controls for a single image.

### Experience, skills, about, and contact

Use a compact experience timeline without invented job history. Group skills by Frontend, Backend, Data, Development & Deployment, and AI & Automation. Use text tags, not percentages or unverified proficiency bars. Use email and GitHub links; no runtime contact form is required. Optional copy-email needs a real email and accessible feedback/fallback.

### Metadata and accessibility

Provide page-specific titles/descriptions, a development-symbol favicon, and correct canonical URLs. Add an Open Graph image only if a real static asset exists. Generate or provide sitemap/robots in a static-compatible way. Use semantic structure, visible focus, meaningful link labels, and image descriptions.

## Typed data contracts

The implementation should use equivalent structures to these; fields can be simplified without losing accuracy.

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  featured: boolean;
  status?: "in-progress" | "completed" | "archived";
  visibility: "public" | "private";
  role?: string;
  stack: string[];
  cover?: { src: string; alt: string; width: number; height: number };
  overview: string;
  problem?: string;
  contributions: string[];
  features: string[];
  screenshots: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  repositoryUrl?: string;
  demoUrl?: string;
  lessons?: string[];
};
```

Keep editorial approval notes in docs, not public text. Do not create records with nonexistent screenshot paths. Validate unique slugs and avoid hardcoding project counts.

## Scope for today

Implement responsive layout, three featured candidates, the known project inventory, static details, simple filters, and deployment. Fill only verified facts. Empty optional fields should be omitted.

Defer dark-mode switching, blog, CMS/admin, visitor analytics, advanced animation, chatbot, login, and contact-form services. These may be added later with explicit scope changes.

## GitHub activity

The user requested a GitHub activity section based on a visual reference. Show real data for tamafred-2 using the existing light/red design: contribution total, public repository count, longest contribution streak within the displayed window starting February 1, 2026, stars across owned public repositories, a contribution calendar, and a GitHub profile link. Do not use the example account or example statistics.

Use a dated local snapshot refreshed before Pages builds, with no visitor API calls, secrets, or runtime server. Keep the last valid snapshot if GitHub is unavailable and visibly retain its date. Calendar days need accessible counts, keyboard navigation, a selected-day readout, and a color legend. Public repository links open in a new tab. Omit missing descriptions/languages and exclude private, forked, archived, or disabled repositories from the recent cards. Repository count includes all owned public repositories; star totals exclude forks.

## Acceptance criteria

- Home and all project pages export successfully and work from a static server.
- New projects can be added through one data record and image files, without new UI code.
- Mobile menu and filters are usable with mouse, touch, and keyboard.
- No console errors, broken images, fake links, or public TODO text.
- Static assets, fonts, and resume paths work at the selected deployment URL.
- Content reflects confirmed facts and accurately attributes contributions.
- Build, lint, and type-check scripts pass; public deployment is reported only after verification.
