import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/best-dating-sites-usa");

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
      intro="We compare adult dating sites USA singles actually use — private chat, casual chemistry, and location filters after you join."
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
