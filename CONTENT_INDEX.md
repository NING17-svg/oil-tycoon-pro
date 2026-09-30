# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Oil Tycoon Roblox | Choose the right focused Oil Tycoon guide | Check Codes / Find Secret Ending | Hub | Image-free split-panel homepage with direct shortcuts to codes, Backrooms, secret ending, factory upgrades, badges and tips. |
| `/oil-tycoon-roblox` | `src/data/pages/page-oil-tycoon-overview.ts` | Guide | Oil Tycoon Roblox | Understand the game, core loop and same-name disambiguation | Codes / Backrooms | Core hub | Structured overview with separate premise, gameplay, starter and disambiguation sections. |
| `/oil-tycoon-release-date` | `src/data/pages/page-oil-tycoon-release-status.ts` | Guide | Oil Tycoon release date | Check release and update status | Overview / Codes | Supporting | Dated release and roadmap-status reference. |
| `/oil-tycoon-codes` | `src/data/pages/page-oil-tycoon-codes.ts` | Guide | Oil Tycoon codes | Check code status and redemption guidance | Overview / Discord | High-intent | Dated code-status page; does not invent an active list. |
| `/oil-tycoon-discord` | `src/data/pages/page-oil-tycoon-discord.ts` | Guide | Oil Tycoon Discord | Find and verify community channels | Overview / Backrooms | Supporting | Separates official identity from community invite information. |
| `/oil-tycoon-backrooms` | `src/data/pages/page-oil-tycoon-backrooms.ts` | Guide | Oil Tycoon Backrooms | Find the hidden Backrooms area | Overview / Secret Ending | High-intent | Community-sourced route is separated into readable sections and substeps. |
| `/oil-tycoon-secret-ending` | `src/data/pages/page-oil-tycoon-secret-ending.ts` | Guide | Oil Tycoon secret ending | Follow the platform-hop ending route | Overview / Backrooms | High-intent | Walkthrough is split into requirements, route, rewards and pitfalls. |
| `/oil-tycoon-npcs` | `src/data/pages/page-oil-tycoon-npcs.ts` | Guide | Oil Tycoon NPCs | Identify NPCs and worker-hiring mechanics | Overview / Backrooms | Supporting | Keeps confirmed Miguel information separate from unconfirmed NPC reports. |
| `/oil-tycoon-factory-upgrades` | `src/data/pages/page-oil-tycoon-factory-upgrades.ts` | Guide | Oil Tycoon factory upgrades | Decide what to upgrade first | Overview / Tips | High-intent | Upgrade categories, priority and pitfalls are separate readable sections. |
| `/oil-tycoon-badges` | `src/data/pages/page-oil-tycoon-badges.ts` | Guide | Oil Tycoon badges | Understand progression and secret badge hunting | Overview / Secret Ending | Supporting | Separates progression, secret discovery and verification guidance. |
| `/oil-tycoon-tips` | `src/data/pages/page-oil-tycoon-tips.ts` | Guide | Oil Tycoon tips | Improve early-game cash and progression | Overview / Codes | High-intent | Bonus guidance and first-session checklist render as structured content. |
| `/oil-tycoon-trailer` | `src/data/pages/page-oil-tycoon-trailer.ts` | Guide | Oil Tycoon trailer | Find official and community visual media | Overview / Codes | Supporting | Distinguishes official storefront media from creator footage. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
