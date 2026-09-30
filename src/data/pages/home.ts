import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: {
    shell: "home",
    variant: "split-panel",
  },
  h1: "Oil Tycoon Roblox Guide Hub for Codes, Secrets and Tips",
  seoTitle: "Oil Tycoon Roblox: Codes, Secrets, and Tips Hub",
  metaDescription:
    "Oil Tycoon Roblox guide hub for codes, Backrooms, the secret ending, factory upgrades, badges, NPCs and beginner tips for jitmoney inc's 2026 game.",
  summary:
    "Focused Oil Tycoon Roblox guides for codes, secrets, progression and current game information.",
  hero: {
    eyebrow: "Oil Tycoon on Roblox",
    subtitle:
      "Codes, hidden areas, the secret ending, badges, NPCs and factory upgrades — each on its own focused page.",
    ctas: [
      {
        label: "Check codes",
        href: "/oil-tycoon-codes/",
      },
      {
        label: "Find the secret ending",
        href: "/oil-tycoon-secret-ending/",
      },
    ],
  },
  quickAnswer:
    "Oil Tycoon is a Roblox tycoon experience by jitmoney inc. This site separates the game's main search questions into focused guides, so you can jump straight to codes, the Backrooms, the secret ending, badges, NPCs, factory upgrades or beginner tips instead of scanning one oversized article. Game identity and release details are checked against the official Roblox page; community-discovered secrets are clearly treated as community findings.",
  keyFacts: [
    {
      label: "Game",
      value: "Oil Tycoon!",
    },
    {
      label: "Developer",
      value: "jitmoney inc",
    },
    {
      label: "Platform",
      value: "Roblox",
    },
    {
      label: "Universe",
      value: "10466601694",
    },
  ],
  modules: [
    {
      id: "start-here",
      type: "entity-grid",
      heading: "Start here",
      items: [
        {
          title: "Codes",
          summary: "See the current code status and how to redeem a code in-game.",
          href: "/oil-tycoon-codes/",
        },
        {
          title: "Backrooms",
          summary: "Find the hidden Backrooms area and the route used to reach it.",
          href: "/oil-tycoon-backrooms/",
        },
        {
          title: "Secret ending",
          summary: "Follow the platform-hop route tied to the game's secret ending.",
          href: "/oil-tycoon-secret-ending/",
        },
        {
          title: "Factory upgrades",
          summary: "Understand the upgrade path and what to prioritize as your factory grows.",
          href: "/oil-tycoon-factory-upgrades/",
        },
        {
          title: "Badges",
          summary: "See the badge categories and where hidden badge objectives fit in.",
          href: "/oil-tycoon-badges/",
        },
        {
          title: "Beginner tips",
          summary: "Get the useful early-game guidance on cash, bonuses and progression.",
          href: "/oil-tycoon-tips/",
        },
      ],
    },
    {
      id: "more-guides",
      type: "entity-grid",
      heading: "More Oil Tycoon guides",
      items: [
        {
          title: "Game overview",
          summary: "The premise, core loop and how this Oil Tycoon differs from similarly named games.",
          href: "/oil-tycoon-roblox/",
        },
        {
          title: "NPCs",
          summary: "Who the named NPCs are and what role they play in progression.",
          href: "/oil-tycoon-npcs/",
        },
        {
          title: "Release status",
          summary: "Creation date, last-update context and the current release status.",
          href: "/oil-tycoon-release-date/",
        },
        {
          title: "Discord",
          summary: "Where community updates and time-sensitive information are discussed.",
          href: "/oil-tycoon-discord/",
        },
      ],
    },
    {
      id: "verification-note",
      type: "callout",
      tone: "tip",
      title: "Official facts and player-discovered secrets are kept separate",
      body:
        "Game identity, developer and release metadata are checked against the official Roblox listing. Secrets, routes and other player discoveries may come from community walkthroughs, so those pages carry their own research date and verification context.",
    },
  ],
  faqIds: ["faq-1", "faq-2", "faq-3", "faq-4"],
  relatedPageIds: [
    "oil-tycoon-overview",
    "oil-tycoon-codes",
    "oil-tycoon-backrooms",
    "oil-tycoon-secret-ending",
    "oil-tycoon-badges",
    "oil-tycoon-tips",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-29",
};
