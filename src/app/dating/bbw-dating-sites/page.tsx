import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best BBW Dating Sites (2026) | OffersMania",
  description:
    "Body-positive adult dating — compare worldwide platforms where plus-size singles actually get seen.",
};

export default function BbwDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Body-positive · 18+"
      title={
        <>
          Desire without{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            the disclaimer
          </span>
        </>
      }
      subtitle="Worldwide adult rooms with large member bases — show up as you are and talk to people who want you."
      offers={hubOffers}
      faqs={[
        {
          question: "Are there dedicated BBW dating sites here?",
          answer:
            "These are large worldwide adult platforms. Look for active members in your area and profiles that match the energy you want.",
        },
        {
          question: "Which should I try first?",
          answer:
            "Start with RealSexClub for casual chemistry, or NaughtyCharm if you want a flirty dating feel.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/mature-dating-sites", title: "Mature" },
      ]}
      faqId="bbw-dating-faq"
    />
  );
}
