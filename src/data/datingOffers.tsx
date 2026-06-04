export type DatingOffer = {
  rank: string;
  name: string;
  rating: string;
  bestFor: string;
  slug: string;
  pros: string[];
  cons: string[];
};

export const datingOffers: DatingOffer[] = [
  {
    rank: "#1",
    name: "RealSexClub",
    rating: "9.8/10",
    bestFor: "Casual Dating",
    slug: "realsexclub",
    pros: [
      "Easy registration",
      "Mobile friendly",
      "Large active community",
      "Fast matching",
    ],
    cons: [
      "Premium features require upgrade",
    ],
  },

  {
    rank: "#2",
    name: "FetishPartner",
    rating: "9.4/10",
    bestFor: "Alternative Dating",
    slug: "fetishpartner",
    pros: [
      "Niche community",
      "Unique matching options",
      "Active members",
      "Simple profile setup",
    ],
    cons: [
      "Smaller audience than mainstream sites",
    ],
  },

  {
    rank: "#3",
    name: "FuckFinder",
    rating: "9.1/10",
    bestFor: "Local Connections",
    slug: "fuckfinder",
    pros: [
      "Quick sign up",
      "Location-based matching",
      "Simple interface",
      "Large member database",
    ],
    cons: [
      "Some features require premium access",
    ],
  },
];