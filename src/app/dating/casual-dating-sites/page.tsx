import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers, offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/casual-dating-sites");

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
      intro="These casual dating sites are built for chemistry without a five-year plan. Compare worldwide 18+ platforms, join free, browse, and talk when it clicks."
      offers={[...hubOffers, ...extra]}
      faqs={[
        {
          question: "What are the best casual dating sites?",
          answer:
            "Casual dating sites focus on flirting, chat, and chemistry without a long-term default. RealSexClub is our top worldwide pick; FetishPartner suits a more alternative crowd.",
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
