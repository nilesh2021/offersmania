import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://offersmania.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/dating`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/dating/best-dating-sites-germany`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/dating/best-dating-sites-usa`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/dating/serious-relationship-dating-sites`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/dating/tinder-alternatives`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/dating/mature-dating-sites`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dating/senior-dating-sites`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dating/christian-dating-sites`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dating/casual-dating-sites`,
      lastModified: new Date(),
      priority: 0.7,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
  ];
}