export type DatingOffer = {
  rank: number;
  name: string;
  rating: string;
  bestFor: string;
  slug: string;
  tagline: string;
  bullets: string[];
  hub: boolean;
  glow: string;
};

export const allDatingOffers: DatingOffer[] = [
  {
    rank: 1,
    name: "RealSexClub",
    rating: "9.8",
    bestFor: "Casual chemistry",
    slug: "realsexclub",
    tagline: "Discreet adult connections with people who already know what they want.",
    bullets: ["Minutes to join", "Active tonight", "Private chat"],
    hub: true,
    glow: "from-rose-500/40 to-fuchsia-700/20",
  },
  {
    rank: 2,
    name: "NaughtyCharm",
    rating: "9.6",
    bestFor: "Flirty dating",
    slug: "naughtycharm",
    tagline: "Playful, premium matching for adults who like a little tension.",
    bullets: ["Polished profiles", "Fast replies", "Worldwide members"],
    hub: true,
    glow: "from-amber-400/30 to-rose-600/20",
  },
  {
    rank: 3,
    name: "CheekyCrush",
    rating: "9.4",
    bestFor: "Chat & chemistry",
    slug: "cheekycrush",
    tagline: "Start a conversation, keep it spicy, take it further when it clicks.",
    bullets: ["Easy icebreakers", "Mobile-first", "Real-time chat"],
    hub: true,
    glow: "from-fuchsia-400/30 to-pink-700/20",
  },
  {
    rank: 4,
    name: "DirtyDating",
    rating: "9.3",
    bestFor: "No-strings nights",
    slug: "dirtydating",
    tagline: "Skip the small talk. Match with adults looking for the same thing.",
    bullets: ["Direct intent", "Large member base", "Quick setup"],
    hub: true,
    glow: "from-rose-400/25 to-red-800/20",
  },
  {
    rank: 5,
    name: "FuckFinder",
    rating: "9.1",
    bestFor: "Local hookups",
    slug: "fuckfinder",
    tagline: "See who's nearby and ready to meet — location-first matching.",
    bullets: ["Near you", "Simple interface", "Fast signup"],
    hub: true,
    glow: "from-orange-400/25 to-rose-800/20",
  },
  {
    rank: 6,
    name: "FetishPartner",
    rating: "9.0",
    bestFor: "Alternative dating",
    slug: "fetishpartner",
    tagline: "A niche community for adults with specific tastes and no judgment.",
    bullets: ["Unique matching", "Open-minded members", "Simple profiles"],
    hub: false,
    glow: "from-violet-400/25 to-fuchsia-800/20",
  },
  {
    rank: 1,
    name: "GayBloom",
    rating: "9.5",
    bestFor: "LGBTQ+ men",
    slug: "gaybloom",
    tagline: "Meet, chat, and connect with men in a welcoming LGBTQ+ space.",
    bullets: ["Built for men", "Private messaging", "Inclusive community"],
    hub: false,
    glow: "from-violet-400/35 to-fuchsia-600/20",
  },
  {
    rank: 2,
    name: "PridePair",
    rating: "9.3",
    bestFor: "Queer connections",
    slug: "pridepair",
    tagline: "Pride-forward dating for chemistry, dates, and something real.",
    bullets: ["LGBTQ+ focused", "Chat-first", "Worldwide"],
    hub: false,
    glow: "from-pink-400/30 to-violet-700/20",
  },
  {
    rank: 1,
    name: "MilfFinder",
    rating: "9.4",
    bestFor: "Mature women",
    slug: "milffinder",
    tagline: "Connect with confident, experienced women who know what they want.",
    bullets: ["Mature community", "Direct matching", "Fast join"],
    hub: false,
    glow: "from-rose-400/30 to-amber-700/15",
  },
  {
    rank: 2,
    name: "Grannyhunter",
    rating: "9.2",
    bestFor: "50+ connections",
    slug: "grannyhunter",
    tagline: "Companionship and chemistry for adults who prefer experience.",
    bullets: ["Older singles", "Discreet chat", "Easy profiles"],
    hub: false,
    glow: "from-amber-400/25 to-rose-800/15",
  },
];

export const hubOffers = allDatingOffers.filter((offer) => offer.hub);

/** @deprecated Use hubOffers — kept so older pages keep compiling during the restyle. */
export const datingOffers = hubOffers;

export function offersBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => allDatingOffers.find((offer) => offer.slug === slug))
    .filter((offer): offer is DatingOffer => Boolean(offer));
}
