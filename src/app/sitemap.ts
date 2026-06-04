import { MetadataRoute } from "next";
import { datingPages } from "@/data/datingPages";

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
    "/software",
    "/dating",
  ];

  const datingRoutes = datingPages.map(
    (slug) => `/dating/${slug}`
  );

  const routes = [...staticPages, ...datingRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}