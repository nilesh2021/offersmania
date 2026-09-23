import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Tinder Alternatives for Adult Dating (2026)",
  description:
    "Skip the swipe treadmill. Compare adult dating alternatives built for chemistry, chat, and private connections.",
};

export default function TinderAlternativesPage() {
  return (
    <DatingPageLayout
      eyebrow="Swipe-free · 18+"
      title={
        <>
          Tired of swiping?{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            Try intent.
          </span>
        </>
      }
      subtitle="Adult platforms where people already know what they want — chat, chemistry, and less performance."
      primarySlug="cheekycrush"
      offers={hubOffers}
      faqs={[
        {
          question: "What is the best Tinder alternative for adults?",
          answer:
            "If you want flirty dating without endless swiping, start with CheekyCrush or NaughtyCharm. For more direct adult intent, RealSexClub and DirtyDating are stronger fits.",
        },
        {
          question: "Why leave Tinder?",
          answer:
            "Many adults want clearer intent, fewer bots, and conversations that start without a week of 'hey'.",
        },
        {
          question: "Are these free to join?",
          answer:
            "Most offer free registration. Premium plans add extra messaging and visibility.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/local-dating-sites", title: "Local" },
      ]}
      faqId="tinder-alt-faq"
    />
  );
}
