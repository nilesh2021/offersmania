import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/bbw-dating-sites");

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
      intro="BBW dating sites and body-positive adult platforms with real member volume — compare where plus-size singles get seen and messaged."
      offers={hubOffers}
      faqs={[
        {
          question: "What are the best BBW dating sites?",
          answer:
            "Dedicated BBW apps are rare; these large adult platforms have strong plus-size communities. Look for active local members and profiles that match the energy you want.",
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
