import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Adult Dating Sites in the USA (2026)",
  description:
    "Compare adult dating sites popular with US singles. Private connections, chat, and casual chemistry.",
};

export default function BestDatingSitesUSAPage() {
  return (
    <DatingPageLayout
      eyebrow="USA · worldwide platforms"
      title={
        <>
          Adult dating for{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            US nights
          </span>
        </>
      }
      subtitle="These worldwide platforms have strong US member bases — discreet, fast to join, built for chemistry."
      offers={hubOffers}
      faqs={[
        {
          question: "What is the best adult dating site in the USA?",
          answer:
            "It depends on vibe. RealSexClub leads for casual chemistry. NaughtyCharm and CheekyCrush feel more like flirty dating. FuckFinder is strongest for people nearby.",
        },
        {
          question: "Are these US-only apps?",
          answer:
            "They are worldwide platforms with active US members. You can filter by location after you join.",
        },
        {
          question: "Is registration free?",
          answer:
            "Yes on most sites. Paid upgrades typically add messaging volume and profile boosts.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/local-dating-sites", title: "Local" },
      ]}
      faqId="usa-dating-faq"
    />
  );
}
