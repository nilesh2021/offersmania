import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers, offersBySlugs } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Casual Adult Dating Sites (2026)",
  description:
    "Compare casual adult dating sites for chemistry, chat, and no-strings connections. Worldwide 18+ platforms.",
};

const extra = offersBySlugs(["fetishpartner"]);

export default function CasualDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Casual · 18+"
      title={
        <>
          Casual connections,{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            zero performance
          </span>
        </>
      }
      subtitle="Meet adults who want the same energy — flirting, chat, and nights that stay between you."
      intro="These platforms are built for chemistry without a five-year plan. Join free, browse, and talk when it clicks."
      offers={[...hubOffers, ...extra]}
      faqs={[
        {
          question: "What is casual adult dating?",
          answer:
            "It is dating without the default of a long-term relationship. Flirting, chat, and physical chemistry — on your terms.",
        },
        {
          question: "Can I use these sites for free?",
          answer:
            "Registration is typically free. Premium plans unlock extra messaging and visibility.",
        },
        {
          question: "Which casual site is best?",
          answer:
            "RealSexClub is the top worldwide pick. FetishPartner is better if you want a more alternative crowd.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/tinder-alternatives", title: "Tinder alternatives" },
        { href: "/dating/local-dating-sites", title: "Local" },
      ]}
      faqId="casual-dating-faq"
    />
  );
}
