import { MetadataRoute } from "next";

import { DATING_SITEMAP_PATHS, datingSeoByPath, SITE_URL } from "@/lib/datingSeo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/ai",
    "/ai/best-ai-tools",
    "/ai/chatgpt-vs-gemini-vs-claude",
    "/ai/best-ai-writing-tools",
    "/ai/best-ai-image-generators",
    "/software",
    "/software/best-vpn",
    "/software/best-antivirus",
    "/software/avast-antivirus",
    "/software/avast-offers",
    "/software/password-manager",
    "/blog",
  ];

  const staticEntries = staticPages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const datingEntries = DATING_SITEMAP_PATHS.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: datingSeoByPath[route].sitemapPriority,
  }));

  return [...staticEntries, ...datingEntries];
}
