import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://offersmania.net";

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
    "/software/password-manager",
    "/blog",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
