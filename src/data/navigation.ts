import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/oil-tycoon-roblox/", labels: { "en-US": "Overview" } },
  { href: "/oil-tycoon-codes/", labels: { "en-US": "Codes" } },
  { href: "/oil-tycoon-backrooms/", labels: { "en-US": "Backrooms" } },
  { href: "/oil-tycoon-secret-ending/", labels: { "en-US": "Secret Ending" } },
  { href: "/oil-tycoon-badges/", labels: { "en-US": "Badges" } },
  { href: "/oil-tycoon-tips/", labels: { "en-US": "Tips" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/oil-tycoon-roblox/", labels: { "en-US": "Overview" } },
  { href: "/oil-tycoon-release-date/", labels: { "en-US": "Release Date" } },
  { href: "/oil-tycoon-codes/", labels: { "en-US": "Codes" } },
  { href: "/oil-tycoon-discord/", labels: { "en-US": "Discord" } },
  { href: "/oil-tycoon-tips/", labels: { "en-US": "Tips" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
