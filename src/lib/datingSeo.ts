import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

export { SITE_URL };

type DatingSeoEntry = {
  title: string;
  description: string;
  keywords: string[];
  sitemapPriority: number;
};

export const datingSeoByPath: Record<string, DatingSeoEntry> = {
  "/dating": {
    title: "Best Adult Dating Sites (2026)",
    description:
      "Compare the best adult dating sites for discreet connections, casual chat, and 18+ chemistry. See worldwide rankings updated for 2026.",
    keywords: [
      "best adult dating sites",
      "adult dating sites",
      "casual dating sites",
      "discreet dating",
      "18+ online dating",
      "adult chat",
    ],
    sitemapPriority: 0.85,
  },
  "/dating/casual-dating-sites": {
    title: "Best Casual Dating Sites (2026)",
    description:
      "Compare casual dating sites for flirty chat and no-strings adult connections. Worldwide 18+ platforms — see rankings and join free.",
    keywords: [
      "casual dating sites",
      "casual adult dating",
      "no strings dating",
      "adult hookup sites",
      "flirty chat",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/best-dating-sites-usa": {
    title: "Best Adult Dating Sites in the USA (2026)",
    description:
      "Compare adult dating sites USA singles use for private chat and casual chemistry. Rankings and quick picks — start comparing today.",
    keywords: [
      "adult dating sites USA",
      "best dating sites USA",
      "US dating apps",
      "American singles dating",
      "casual dating USA",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/best-dating-sites-germany": {
    title: "Best Adult Dating Sites in Germany (2026)",
    description:
      "Compare adult dating sites Germany with active members for chat and casual connections. See 2026 rankings and pick a platform.",
    keywords: [
      "adult dating sites Germany",
      "dating sites Germany",
      "German singles dating",
      "casual dating Germany",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/local-dating-sites": {
    title: "Best Local Dating Sites (2026)",
    description:
      "Meet singles near you on the best local dating sites for adults. Location-first platforms ranked for chemistry tonight — compare picks.",
    keywords: [
      "local dating sites",
      "meet singles near me",
      "location based dating",
      "adult dating nearby",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/tinder-alternatives": {
    title: "Best Tinder Alternatives for Adult Dating (2026)",
    description:
      "Skip the swipe stack. Compare Tinder alternatives built for adult dating, private chat, and clear intent — see 2026 rankings.",
    keywords: [
      "Tinder alternatives",
      "adult dating apps",
      "swipe free dating",
      "dating apps like Tinder",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/mature-dating-sites": {
    title: "Best Mature Dating Sites (2026)",
    description:
      "Compare mature dating sites for adults 40+ who want chemistry and companionship. Discreet platforms ranked — see who fits your pace.",
    keywords: [
      "mature dating sites",
      "dating over 40",
      "adult singles 40+",
      "mature adult dating",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/senior-dating-sites": {
    title: "Best Senior Dating Sites (2026)",
    description:
      "Compare senior dating sites for adults 50+ seeking companionship or chemistry. Discreet 18+ platforms — see rankings for 2026.",
    keywords: [
      "senior dating sites",
      "dating over 50",
      "companionship for seniors",
      "older adult dating",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/bbw-dating-sites": {
    title: "Best BBW Dating Sites (2026)",
    description:
      "Compare BBW dating sites and body-positive adult platforms with large member pools. Plus-size friendly rankings — see top picks.",
    keywords: [
      "BBW dating sites",
      "plus size dating",
      "body positive dating",
      "BBW singles",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/christian-dating-sites": {
    title: "Best Christian Dating Sites (2026)",
    description:
      "Compare Christian dating sites and values-first platforms for faith-minded adults. Conversation-first options ranked — see 2026 picks.",
    keywords: [
      "Christian dating sites",
      "faith based dating",
      "values first dating",
      "Christian singles",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/serious-relationship-dating-sites": {
    title: "Best Serious Dating Sites (2026)",
    description:
      "Compare serious dating sites for adults who want chemistry that could last. Relationship-focused platforms ranked — start comparing.",
    keywords: [
      "serious dating sites",
      "relationship focused dating",
      "long term dating",
      "adult relationship sites",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/gaybloom": {
    title: "Best LGBTQ+ Dating for Men (2026)",
    description:
      "Compare GayBloom, PridePair, and gay dating apps for men in the LGBTQ+ community. Chat-first platforms — see rankings and join free.",
    keywords: [
      "LGBTQ dating for men",
      "gay dating apps",
      "GayBloom",
      "PridePair",
      "gay chat dating",
    ],
    sitemapPriority: 0.7,
  },
  "/dating/realsexclub-canada": {
    title: "RealSexClub Canada Review (2026)",
    description:
      "RealSexClub Canada review: adult dating, discreet chat, and casual matches for Canadian singles. Features, signup, and how it compares.",
    keywords: [
      "RealSexClub Canada",
      "Canada adult dating",
      "casual dating Canada",
      "adult chat Canada",
    ],
    sitemapPriority: 0.7,
  },
};

export const DATING_SITEMAP_PATHS = Object.keys(datingSeoByPath);

export function buildDatingMetadata(path: string): Metadata {
  const entry = datingSeoByPath[path];
  if (!entry) {
    throw new Error(`Missing dating SEO config for path: ${path}`);
  }

  const url = `${SITE_URL}${path}`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      type: "website",
    },
  };
}
