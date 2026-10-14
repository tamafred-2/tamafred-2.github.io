# Completion Checklist

Recorded October 13, 2026. Checked items were verified locally; unchecked items need supplied assets, browser access, owner review, or remote deployment.

## Setup

- [ ] GitHub account and repository confirmed.
- [x] Design defaults reviewed or updated.
- [x] Installed framework/Node versions recorded.
- [ ] One npm lockfile committed.
- [x] Framework guidance merged with AGENTS.md.
- [x] One valid static-export config.

## Content

- [ ] Identity, title, education, and internship copy reviewed.
- [x] Individual and team contributions distinguished.
- [x] Planned versus completed work clear.
- [x] Project statuses and URLs verified or omitted; supplied GitHub contact retained.
- [ ] Approved screenshots use safe/demo data.
- [x] No private endpoints, credentials, company source, or patient information.
- [x] Email confirmed or omitted.
- [x] Resume approved and present or button hidden.
- [x] No invented statistics or visible TODO placeholders.

## Visuals and behavior

- [ ] Consistent tokens, typography, spacing, screenshot proportions.
- [ ] Inspect roughly 360, 768, and 1440px widths.
- [ ] No horizontal overflow; zoom/reflow works.
- [ ] Anchors visible below sticky header.
- [ ] Menu works with keyboard, Escape, and link selection.
- [ ] Filters show correct records and selection state.
- [x] Controls have accessible names and focus styles (source review; browser check pending).
- [x] No nested controls or hover-only information (source review).
- [x] Text/focus token contrast calculated; reduced-motion CSS reviewed.
- [ ] Image/font paths, dimensions, and alt text appropriate.
- [x] Font license retained with bundled font files; optional visible font credit removed at user request.

## Technical verification

```bash
npm run lint
npm run typecheck
npm run build
```

- [x] Checks pass without disabling failures.
- [x] out/index.html exists.
- [x] All seven public-facing detail pages generated (including descriptive Cooper page).
- [x] Export served and checked over HTTP with a static server.
- [x] Direct detail URLs return HTTP 200 on repeated requests; browser refresh pending.
- [x] Helpful 404 content and HTTP 404 response.
- [x] No runtime-only dependencies needed.
- [ ] Browser console checked.
- [x] Metadata, development-symbol favicon, sitemap, and robots use intended URL.

## Live site

- [ ] Pages source is GitHub Actions.
- [ ] Workflow builds and uploads out/.
- [ ] Deploy succeeds.
- [ ] Published URL shows latest content.
- [ ] Home/detail URLs, links, images, and fonts verified live.
- [x] Missing assets/checks reported honestly.

## Handoff

Report what was built, checks actually passed, missing inputs, and live URL only when verified. Do not present this documentation or an unexecuted workflow as a deployed application.

## Remaining manual browser checks

October 14, 2026 carousel placement and click navigation: moved the carousel directly below the project title, replacing the separate detail cover and lower gallery on all seven pages. Left/right 50% image buttons navigate previous/next; image new-tab links are removed. Lint, type checking, and production build passed. Static preview HTTP checks passed for placement, one screenshot per page, two half-image buttons, correct dot counts, one selected dot, no image links, and image asset HTTP 200. Handler checks passed for half-click wrapping, dots, keyboard, swipe click suppression, and empty/single-image cases. Browser visual inspection remains unavailable; manually check half-image clicks, touch, focus visibility, and responsive layout. This supersedes earlier full-size link behavior recorded below.

October 14, 2026 screenshot carousel: replaced stacked screenshot galleries on all seven project detail pages. Lint, type checking, and production build passed. Static preview verified one active slide, one selected dot, valid controls/slide IDs, and dot counts Ngitora 5, RHU 4, Cooper 7, EIMSS 7, Incident Monitoring 3, Jodate 3, Tudu 4. Initial full-size assets returned HTTP 200. Handler checks passed for previous/next wrapping, dot selection, ArrowLeft/ArrowRight/Home/End, touch swipe direction, vertical/canceled gestures, suppression of accidental image opening after swipes, and empty/single-image lists. The browser tool reported no connected providers. Manually inspect mobile/tablet/desktop layout, actual touch/keyboard navigation, captions, full-size opening, and focus visibility. Earlier import checks below describe the former stacked gallery; the current static export intentionally contains only the first slide.

October 14, 2026 EIMSS screenshots: added all seven supplied images with sign-in as the project cover, preserving the capstone URL. Lint, type checking, and production build passed. npm run preview HTTP checks verified the home cover, seven full-size new-tab gallery links, intrinsic image dimensions, alt text, and byte-identical source copies. Browser visual inspection remains unavailable.

October 14, 2026 project removal: removed the requested Discord AI bot entry from the central inventory and documentation. Lint, type checking, and production build passed. Rendered filters have counts All 4, Web Systems 5, AI & Automation 2, Academic 2, Mobile Apps 2; the original three featured projects are unchanged. Static preview confirmed seven working detail routes, eight sitemap entries, and HTTP 404 for the removed route, with no stale export directory.

October 14, 2026 Cooper screenshots: added all seven user-supplied images with sign-in as the featured cover. Lint, type checking, and production build passed. npm run preview HTTP checks verified the home cover, seven full-size new-tab gallery links, image dimensions/alt text, and byte-identical assets. Private project labeling and hidden source/application links remain intact. Browser visual inspection remains unavailable.

October 14, 2026 Ngitora screenshots: added sign-in, plan comparison, development-mode conversations, appointment email, and n8n workflow images, with sign-in as the featured cover. Lint, type checking, and production build passed. npm run preview HTTP checks verified the home cover, five gallery links, all asset paths and intrinsic dimensions, descriptive alt text, safe new-tab links, and byte-identical copies of the supplied files. Browser visual inspection remains unavailable.

October 14, 2026 Jodate refresh: replaced all three images with the newly supplied phone-framed versions. Lint, type checking, and production build passed. npm run preview served the updated files byte-for-byte over HTTP; home cover and detail gallery references remained correct. Browser visual inspection remains unavailable.

GitHub Activity: fetched a real public snapshot for tamafred-2 covering October 14, 2025 through October 13, 2026. Lint, type checking, production export, and four focused parser/streak/calendar tests passed. HTTP checks verified all 365 rendered daily counts/intensities, selected-day tab order, the snapshot date, public repository URLs, and safe new-tab link attributes. Handler checks exercised arrow keys, Home/End, clamped boundaries, focus movement, and click selection. Simulated network failure preserved the JSON; strict mode reported the failure. No browser provider was connected, so visual, hydration, actual keyboard, and touch inspection remain manual: check the statistics/repository grids at 360/768/1440px, scroll the calendar on mobile, select days, navigate with arrow keys, and open repository links.

Jodate screenshots: the birthday list is the project cover; all three supplied screens are in the gallery. Lint, type checking, and production export passed. Exported home/detail image paths, dimensions, alt text, three full-size new-tab links, and unchanged source assets were verified. Browser visual/click checks remain manual.

Tudu screenshots: all four supplied images are included, with Today as the project cover. Lint, type checking, and production export passed. Exported home/detail image paths, intrinsic dimensions, alt text, four full-size new-tab gallery links, and unchanged source assets were verified. Browser visual/click checks remain manual.

RHU Calasiao screenshot update: lint, type checking, and static production build passed. The home featured cover and detail gallery export valid login/dashboard/analytics/report images, with matching dimensions, alt text, and four full-size new-tab links. All public PNGs match the supplied originals. Patient dashboard is included after user confirmation that both dashboards use only fictional demo data. Browser visual/interaction checks remain manual.

Incident Monitoring screenshot update: lint, type checking, and production export passed. Exported home/detail markup references valid login/dashboard/analytics files with matching intrinsic dimensions and descriptive alt text. Full-size gallery links use new tabs, and the public files match the supplied PNGs byte for byte. Dashboard is included and used as the cover after user confirmation of fictional demo data. Browser screenshot layout and link-click checks remain manual.

Certificate update: lint, type checking, and production export passed. All three original PDFs were visually reviewed, and preview dimensions and completion/participation dates were verified. Static-server HTTP checks passed for all PDFs and PNG previews; exported cards, Certificates navigation, and new-tab link attributes were checked. Public PDFs match their local source files byte for byte. Check the new Certificates section at mobile/tablet/desktop widths and confirm PDF opening in a browser; browser layout/interaction inspection remains unavailable in this session.

Project inventory update: lint, type checking, and production export passed for all seven projects. Server-rendered checks covered every filter state (All 4, Web Systems 5, AI & Automation 2, Academic 2, Mobile Apps 2), correct selected state and counts, unchanged featured selection, and a single EIMSS entry. The export was served locally; home cards, all seven direct project URLs on repeated HTTP requests, canonical URLs, and the eight-URL sitemap passed. The original capstone URL remains intact. Browser availability was checked again and no provider was connected; actual filter clicks, hydration, and visual layout remain manual checks.

The browser tool reported no connected providers; an attempted in-app tab returned “Browser is not available: iab.” No visual inspection, browser console check, or interaction test is claimed.

1. Run npm run build, then npm run preview. Open http://localhost:3000 at 360, 768, and 1440px widths. Check card wrapping, typography, text covers, footer, and horizontal overflow. Check 200% zoom/reflow.
2. At mobile width, Tab to Menu and press Enter. Confirm expanded navigation is visible. Press Escape; confirm the menu closes and focus returns to Menu. Reopen and select Work; confirm it closes and the heading clears the sticky header. Repeat for Experience, About, and Contact.
3. The default All collection contains EIMSS, Incident Monitoring, Jodate, and Tudu. Web Systems shows Ngitora, RHU Calasiao, Cooper, EIMSS, and Incident Monitoring. AI & Automation shows Ngitora and Cooper. Academic shows EIMSS and Incident Monitoring. Mobile Apps shows Jodate and Tudu. Check pressed state, count announcement, and keyboard activation. Featured cards remain visible.
4. Open each of the seven /projects/[slug]/ URLs directly and refresh. Check back links, page titles, descriptive text, and the absence of empty galleries or unavailable actions. Cooper must have no source link or internal endpoint.
5. Check GitHub, LinkedIn, Facebook, and font-credit/license links. Confirm both email links open the correct mailto recipient. Activate Discord Copy username; check the copied value and accessible feedback, including the manual-copy fallback when clipboard access is denied. Resume controls must remain absent. Check /missing-page/ for the helpful custom 404.
6. Inspect browser console/network for errors, failed font/asset loads, and hydration warnings. Test reduced-motion preference and visible keyboard focus.

Pending inputs: approved screenshots, resume, project URLs, confirmation of final project scopes/roles/stacks/statuses, and account/repository ownership (contact icons are now original inline SVGs). A single existing package-lock.json is preserved; no commit was made. Workflow is prepared, not run remotely.

October 14, 2026 repository list removal: removed Recent public repositories from GitHub Activity. Lint, typecheck, and production build passed. Static preview HTTP verification confirmed the list/cards are absent and the calendar, statistics, and profile link remain. Browser visual inspection remains unavailable.

October 14, 2026 GitHub date filter: changed the calendar and contribution/streak totals to February 1, 2026 through the refresh date. Refreshed real public data through October 14, 2026 (256 days). Lint, typecheck, build, four existing data/calendar tests, snapshot boundary/total checks, and static preview range/day-count checks passed. Future refreshes extend the end date while retaining February 2026 as the start. Browser visual inspection remains unavailable.

October 14, 2026 carousel hover refinement: removed separate Previous/Next buttons and resize cursors. Image halves use a pointer cursor with shaded chevron hints that fade after 1.5 seconds on hover; keyboard focus retains a visible hint. Dots, count, swipe, and keyboard navigation remain. Lint, typecheck, build, and static preview checks passed. Browser visual inspection is unavailable; hover timing and appearance remain manual checks.

GitHub deployment was paused at the user's request after pushing commit 396dca5 and enabling Pages with GitHub Actions. Run 38525259023 attempt 2 failed at the production build step; no successful deployment has been verified. Current local screenshot refinements have not been pushed.

October 14, 2026 arrow encoding fix: shell encoding had replaced the hover chevrons with literal question marks. Replaced them with JSX HTML entities for ASCII less-than/greater-than indicators. Lint, typecheck, build, and decoded static preview arrow checks passed. Browser appearance remains unverified; deployment stays paused.

October 14, 2026 carousel keyboard focus: removed large image-half focus outlines and persistent keyboard arrow hints. Keyboard focus is indicated by an underline beneath the slide count; dots retain their focus rings. Lint, typecheck, build, and preview stylesheet checks passed. Actual keyboard appearance needs manual browser review. Changes remain local while deployment is paused.

October 14, 2026 carousel icons: replaced text arrows with original inline SVG chevrons using rounded strokes. Hover fade and navigation behavior are unchanged. Lint, typecheck, build, and static preview SVG checks passed. Browser visual inspection remains unavailable; deployment remains paused.

October 14, 2026 production deployment: resumed with the latest carousel refinements and missing root profile image included in commit 4db9662. Workflow run 38527904291 completed successfully, including installation, snapshot refresh, lint, typecheck, data tests, production build, and Pages deployment. Verified https://tamafred-2.github.io/ via HTTP: home, seven detail routes, sitemap, linked home images/fonts/CSS, and initial detail screenshots returned 200. Live export contains SVG carousel hints without separate Previous/Next buttons and omits Recent public repositories. Browser visual/keyboard/hover checks remain manual. Deployment is complete; earlier paused status is historical.

October 14, 2026 footer cleanup: removed the optional visible typeface/license credit while retaining public/fonts/OFL.txt. Lint, typecheck, build, and static preview checks passed: no Typeface footer text and font license HTTP 200.

October 14, 2026 certificate modals: certificate images now open in native modal dialogs; separate PDF actions still open PDFs in a new tab. Lint, typecheck, and build passed. Handler checks verified modal opening, duplicate-open guard, close button, backdrop boundaries, focus return, scroll locking/restoration and unmount cleanup. Static preview verified three preview buttons/dialogs and three safe new-tab PDF links, with PDF assets returning HTTP 200. Browser inspection remains unavailable; native Escape dismissal, focus trapping and mobile/desktop layout need manual browser review.
