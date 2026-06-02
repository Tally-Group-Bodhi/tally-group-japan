import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co.jp";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const entries: Entry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services-beta", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/technology/architecture", priority: 0.7, changeFrequency: "monthly" },
  { path: "/technology/security", priority: 0.7, changeFrequency: "monthly" },
  { path: "/technology/audit", priority: 0.7, changeFrequency: "monthly" },
  { path: "/technology/api-library", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/news/press-releases", priority: 0.6, changeFrequency: "weekly" },
  {
    path: "/news/press-releases/skipping-stone-acquisition",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  { path: "/news/events", priority: 0.6, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
