import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata(
  "/dating/serious-relationship-dating-sites",
);

const offers = offersBySlugs(["naughtycharm", "cheekycrush", "realsexclub"]);

export default function SeriousRelationshipDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Chemistry that lasts"
      title={
        <>
          More than{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            a single night
          </span>
        </>
      }
      subtitle="Start with conversation. Keep it if it turns into something you actually want to keep."
      intro="Serious dating sites for adults who want chemistry that could become a relationship — compare conversation-first platforms and be honest about intent."
      primarySlug="naughtycharm"
      offers={offers}
      faqs={[
        {
          question: "Can I use adult dating sites for a real relationship?",
          answer:
            "Plenty of people start with chemistry and stay. Say what you want in your profile and take the chat at your pace.",
        },
        {
          question: "Which platform is best for that?",
          answer:
            "NaughtyCharm and CheekyCrush lean more dating/chat. RealSexClub is more direct — still fine if you are honest about intent.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/christian-dating-sites", title: "Values-first" },
        { href: "/dating/mature-dating-sites", title: "Mature" },
      ]}
      faqId="serious-dating-faq"
    />
  );
}
