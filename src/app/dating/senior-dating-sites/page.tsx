import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Senior Dating Sites (2026)",
  description:
    "Companionship and chemistry for adults 50+. Compare discreet dating platforms for experienced singles.",
};

const offers = offersBySlugs(["grannyhunter", "milffinder", "cheekycrush"]);

export default function SeniorDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="50+ · discreet"
      title={
        <>
          Companionship with{" "}
          <span className="bg-gradient-to-r from-amber-200 to-rose-300 bg-clip-text text-transparent">
            an edge
          </span>
        </>
      }
      subtitle="Dating rooms for older adults — friendship, chemistry, and private chat without the noise."
      primarySlug="grannyhunter"
      offers={offers}
      faqs={[
        {
          question: "Are these sites for seniors?",
          answer:
            "They attract older adults looking for companionship or chemistry. Grannyhunter is the most 50+ focused option here.",
        },
        {
          question: "Is it safe?",
          answer:
            "Use privacy controls, never send money, and report suspicious profiles. Meet in public if you go offline.",
        },
        {
          question: "Can I join for free?",
          answer:
            "Registration is typically free. Messaging extras may sit behind a premium plan.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/mature-dating-sites", title: "Mature" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
      ]}
      faqId="senior-dating-faq"
    />
  );
}
