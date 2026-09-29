import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Oil Tycoon Hub",
  brandMark: "OT",
  gameName: "Oil Tycoon",
  domain: "oil-tycoon.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://oil-tycoon.pro").replace(/\/$/, ""),
  description:
    "A US English search hub for Oil Tycoon on Roblox (jitmoney inc, 2026) — overview, release status, codes, Discord, Backrooms, secret ending, NPCs, factory upgrades, badges, tips and trailer coverage.",
  tagline: "Codes, secrets, factory upgrades and beginner tips for Oil Tycoon on Roblox (jitmoney inc, 2026).",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Oil Tycoon Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official Roblox game page",
      href: "https://www.roblox.com/games/105072660911040/Oil-Tycoon",
      description: "Official Roblox catalog entry for Oil Tycoon (Universe 10466601694, Place 105072660911040).",
    },
    {
      label: "Roblox Universe API place-details",
      href: "https://games.roblox.com/v1/games/multiget-place-details?placeIds=105072660911040",
      description: "Roblox metadata mirror for Oil Tycoon Universe 10466601694.",
    },
  ],
  disclaimer:
    "Editorial reference hub for Oil Tycoon on Roblox. Facts are sourced from the official Roblox game page and developer jitmoney inc as of 2026-09-29.",
};
