# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-30 - Oil Tycoon guide pages restructured

- Task: Repair the 11 launch guide pages that Builder had collapsed into oversized single prose blocks.
- Files changed: all `src/data/pages/page-oil-tycoon-*.ts` guide files, `src/components/content/RichText.tsx`, `ModuleRenderer.tsx`, `StatusCallout.tsx`, `src/styles/modules.css`, and `scripts/validate-content.ts`.
- URLs affected: `/oil-tycoon-roblox`, `/oil-tycoon-release-date`, `/oil-tycoon-codes`, `/oil-tycoon-discord`, `/oil-tycoon-backrooms`, `/oil-tycoon-secret-ending`, `/oil-tycoon-npcs`, `/oil-tycoon-factory-upgrades`, `/oil-tycoon-badges`, `/oil-tycoon-tips`, `/oil-tycoon-trailer`.
- UX changed: Quick Answers are short again; each original H2 is restored as its own page section; H3 subheads, bullet lists and numbered checklists render structurally instead of appearing as newline text inside one paragraph; hero summaries are rewritten as reader-facing copy.
- Regression guard: Oil Tycoon quick answers over 120 words, prose modules over 450 words, and leaked machine section markers now fail content validation.
- Verification: typecheck, content validation, template validation and production static build passed locally; rendered HTML spot checks confirm separate H2/H3/list structure on codes, overview and tips pages.

### 2026-09-30 - Oil Tycoon homepage rebuilt

- Task: Rebuild the live homepage after the initial Builder pass collapsed structured launch copy into a single prose wall and failed to realize the image-free split-panel theme.
- Files changed: `src/components/pages/HomePage.tsx`, `src/data/pages/home.ts`, `src/styles/shells.css`, homepage FAQ entries in `src/data/faq.ts`, and the homepage content guard in `scripts/validate-content.ts`.
- URL affected: `/`.
- UX changed: The homepage now uses a real two-column hero with direct guide shortcuts, a concise quick answer, compact game facts, focused guide cards, and real homepage FAQs. The oversized prose block is removed from the rendered homepage.
- Regression guard: Homepage quick answers over 120 words and homepage prose modules over 350 words now fail content validation.
- Verification: `npm run typecheck`, `npm run validate:content`, `npm run validate:template`, `npm run build`, `npm run lint`, and `npm run validate:rendered-seo` all passed locally.

### 2026-09-29 - Adsterra six-unit integration applied

- Task: Replace empty Adsterra placeholders in `src/data/ads.ts` with the six fixed unit codes (Native Banner, Banner 728x90/468x60/320x50/160x600, Smartlink) collected from the Adsterra Publishers dashboard.
- Files changed: `src/data/ads.ts`.
- URLs affected: None; placement containers were already wired in the shared template and now carry the six real values.
- Ad baseline: Fixed Adsterra unit values are populated for `oil-tycoon.pro`; the existing empty-state non-network contract is replaced by the live six-unit contract for this launch.
- Verification: `npm run verify` (typecheck, lint, template/content/SEO validators, full build) passed locally.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-08` / Worker `moggedlooksmaxxordie-wiki`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
