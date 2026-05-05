import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tally.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/blog",
    "/products/billing",
    "/products/digital",
    "/products/dss",
    "/products/customer",
    "/products/acquire",
    "/products/acquire/uconx",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.8 : 0.7,
  }));
}
