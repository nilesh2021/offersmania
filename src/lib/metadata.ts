import { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

export const siteConfig = {
  name: "OffersMania",
  description:
    "Discover AI tools, software reviews, and digital products.",
  url: SITE_URL,
};

export function generateMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,

    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}