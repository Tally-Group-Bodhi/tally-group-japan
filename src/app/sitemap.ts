import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co.jp";

const marketingPages = [
  "",
  "/about",
  "/contact",
  "/services-beta",
  "/technology/architecture",
  "/technology/security",
  "/technology/audit",
  "/technology/api-library",
  "/insights/resources",
  "/insights/case-studies",
  "/insights/case-studies/voltedge-retail",
  "/news/press-releases",
  "/news/press-releases/skipping-stone-acquisition",
  "/news/events",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return marketingPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/news") ? 0.6 : 0.7,
  }));
}
