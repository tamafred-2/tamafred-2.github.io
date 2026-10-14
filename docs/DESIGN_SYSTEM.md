# Design System

## Default direction

Minimal project grid with a light Laravel-inspired palette and terminal-inspired typography. This direction was selected for the first implementation. Keep it consistent unless Alfred requests a change.

Professional, quiet, and readable: generous whitespace, large screenshots, concise text, thin borders, and simple controls. Avoid decorative dashboard widgets, flashy gradients, excessive cards, and framework logos used as personal branding.

## Design tokens

| Token         | Value   | Use                                                               |
| ------------- | ------- | ----------------------------------------------------------------- |
| background    | #FAFAF9 | Page                                                              |
| surface       | #FFFFFF | Cards and header                                                  |
| text          | #18181B | Primary text                                                      |
| muted         | #52525B | Secondary text                                                    |
| border        | #E4E4E7 | Separators and card outlines                                      |
| accent        | #E53935 | Decorative/large accents and selected markers                     |
| accent-strong | #C62828 | Primary button background and small accent links; verify contrast |
| accent-soft   | #FEF2F2 | Subtle accent surfaces                                            |
| focus         | #1D4ED8 | Visible focus ring                                                |

These are inspired colors, not official framework brand specifications. Put them into shared CSS custom properties and map to the installed Tailwind version's supported approach.

Alternative if explicitly chosen: Next.js-inspired neutrals with #171717 as the primary accent; retain accessible semantic states. Switch central tokens rather than scattering color overrides.

## Typography

- Default: JetBrains Mono across the interface, using regular/medium weights for body/labels and semibold for headings.
- Treat it as a deliberate monospace design choice.
- Prefer licensed local WOFF2 assets with font-display: swap; keep the font license in the project.
- Use next/font/local only when actual font files exist. If assets cannot be acquired, use a documented system monospace fallback until they are available; do not create missing-file imports.
- Do not use a live remote font CSS dependency. If next/font/google is used instead, confirm build-time network access and document it.
- Body: 16px minimum, around 1.65 line height, short paragraphs.
- Hero: responsive 36–60px heading; avoid huge multi-line statements.
- Section titles: roughly 24–32px. Card titles: roughly 18–22px.
- Paragraph width: approximately 60–70 characters. Avoid all-uppercase body text.

If the user later prefers a sans-serif body, update this document and the central font tokens together.

## Layout and spacing

- Content max-width: approximately 1120px.
- Gutters: 20px mobile, 32px tablet, 40px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80px.
- Section spacing: 56–80px depending on viewport.
- Cards: 12px corner radius, 1px border, minimal or no shadow.
- Buttons: 8px radius, comfortable 44px minimum touch area.
- Project grid: one column mobile, two tablet, up to three wide desktop.
- Screenshots: a consistent 16:10 cover region. Keep the important screen content visible; use contain/padding when cropping would hide useful information.
- Detail galleries may preserve natural image proportions.
- Detail screenshot carousels show one image in a stable 16:10 region using contain, preserving the full image without cropping. Use a red pill for the selected dot and neutral dots for other slides, with 44px touch targets, visible focus, a slide counter, and image-half navigation. A shaded chevron appears for 1.5 seconds on hover, then fades; keyboard focus uses a small underline on the slide count instead of outlining the image halves. Use a pointer cursor and omit separate Previous/Next buttons. Place the carousel below the detail header. Keep captions and use transparent buttons over the left and right halves for previous/next navigation, with visible keyboard focus. Screenshots do not link to new tabs. Navigation is manual, with no autoplay or slide animation.
- Header: supplied picture.jpg as a 44px circular portrait beside the name at left, anchor links at right, collapsed mobile menu. The home link has an accessible name; the adjacent portrait uses empty alt text to avoid repeating that name.
- Footer: brief identity, relevant links, and required asset credits.

## Component behavior

GitHub Activity follows the same red accents, outline icons, neutral surfaces, 12px corners, and thin borders. Statistics and repository cards use four columns on desktop, two on tablet, and one below 480px. The red contribution intensity scale has a legend and per-day text labels. The calendar scrolls within its panel on narrow screens, with a single tab stop for the active date and arrow-key date navigation; counts are announced in a visible status line. Include an explicit snapshot date.

Certificate cards use the same surfaces, thin borders, and 12px corners as project cards. Show three columns on desktop, two on tablet, and one on mobile. Preview regions use 16:10 proportions with object-fit: contain so no certificate text is cropped. Keep course completion distinct from participation and retain visible PDF labels and new-tab accessible names.

Primary action uses accent-strong with readable white text; secondary uses a neutral outline. Links need a clear affordance. Badges are compact and use text as well as color.

Project cards should not make every pixel a link if they contain separate buttons. Prefer a linked title or a clear View Project link. Use consistent metadata order across cards.

Mobile menu needs an accessible toggle, aria-expanded, a clear controlled region, Escape handling, and closing after navigation. Keep keyboard focus predictable; only trap focus if implemented as a true modal overlay.

## Icons and licensing

Use Flaticon assets selected from one consistent outline family where available. Match 20–24px display sizes and use one color treatment where the actual licensed format allows editing. Do not assume SVG downloads or all editor features are free; use the lawful format supplied by the user's plan.

Useful icons: menu, close, arrow right, external link, download, mail, code, briefcase. Icon-only controls need accessible labels. Do not replace descriptive skill text with an unexplained wall of icons.

For every downloaded asset, record the filename, source URL, creator, license, and required credit in CONTENT.md. Put the required free-license credit in the visible footer. Do not scrape preview images or invent an icon license. If approved assets are not yet available, use text controls; complete the layout and report icons as pending.

Use actual brand assets only when appropriate and permitted. The portfolio favicon uses an original white </> outline development symbol on a red rounded square in app/icon.svg. The header retains the supplied portrait.

## Motion and accessibility

Use CSS transitions around 150–200ms for color/border changes. At most a subtle 2px hover movement. No entrance motion is required. Disable nonessential movement for prefers-reduced-motion.

Check AA contrast: 4.5:1 for normal text and 3:1 for large text, plus relevant non-text control contrast. A red decorative token is not automatically approved for every text use. Ensure zoom/reflow works and avoid horizontal overflow at 360px.

## Font and icon references

JetBrains Mono v2.304 Regular, Medium, and SemiBold WOFF2 files are hosted locally in public/fonts/ and loaded with next/font/local. The SIL Open Font License is retained at public/fonts/OFL.txt. No remote CSS or build-time font download is needed. No third-party icons are included. Contact cards use original 22px inline outline SVG icons with visible service labels, neutral surfaces, and red hover/focus accents. Icons are decorative to assistive technology. The cards use two columns and stack below 480px. Other controls retain accessible text. Covers use intentional typography, not simulated screenshots.

- https://www.jetbrains.com/lp/mono/
- https://support.flaticon.com/articles/en_US/Knowledge/Blogs-and-websites-FI
- https://www.flaticon.com/legal/

Certificate image previews open in a native modal dialog with an uncropped image and an X icon button labeled Close certificate preview. Escape and backdrop clicks dismiss it; native modal behavior confines keyboard focus and focus returns to the preview button on close. Lock page scrolling while open. The separate View certificate PDF links keep their new-tab behavior.
