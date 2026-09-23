import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/mature-dating-sites");

const offers = offersBySlugs(["milffinder", "grannyhunter", "cheekycrush"]);

export default function MatureDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Mature · 40+"
      title={
        <>
          Experience is{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            the attraction
          </span>
        </>
      }
      subtitle="Connect with confident adults who already know what they want — chemistry, companionship, or both."
      intro="Compare mature dating sites for adults 40+ — discreet rooms for chemistry, companionship, and private chat without the youth-first feed."
      offers={offers}
      faqs={[
        {
          question: "What are mature dating sites?",
          answer:
            "Platforms aimed at adults 40+ who want connections with people in a similar stage of life — not a college swipe feed.",
        },
        {
          question: "Which site should I try first?",
          answer:
            "MilfFinder is the strongest match for mature women and admirers. Grannyhunter leans older. CheekyCrush is a broader flirty option.",
        },
        {
          question: "Is it free?",
          answer:
            "Most allow free registration. Premium features may require a paid plan.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/senior-dating-sites", title: "Senior" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
      ]}
      faqId="mature-dating-faq"
    />
  );
}
