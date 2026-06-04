import { Metadata } from "next";

export const siteConfig = {
  name: "OffersMania",
  description:
    "Discover AI tools, software reviews, dating platforms, and digital products.",
  url: "https://offersmania.com",
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