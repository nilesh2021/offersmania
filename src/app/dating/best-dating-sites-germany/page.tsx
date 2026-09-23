import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Adult Dating Sites in Germany (2026)",
  description:
    "Compare adult dating platforms used in Germany for casual connections, chat, and private matching.",
};

export default function BestDatingSitesGermanyPage() {
  return (
    <DatingPageLayout
      eyebrow="Germany · 18+"
      title={
        <>
          Chemistry in{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            Germany
          </span>
        </>
      }
      subtitle="Worldwide adult platforms with members across Germany — discreet signup, fast chat, no lecture."
      offers={hubOffers}
      faqs={[
        {
          question: "Can I use these sites from Germany?",
          answer:
            "Yes. These are worldwide adult platforms. Member density is strongest in larger cities.",
        },
        {
          question: "Are they available in German?",
          answer:
            "Interfaces vary. Most let you browse by location regardless of language. Start with RealSexClub or NaughtyCharm.",
        },
        {
          question: "Is it free to join?",
          answer:
            "Registration is usually free. Premium features may require a paid plan.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/best-dating-sites-usa", title: "USA" },
      ]}
      faqId="germany-dating-faq"
    />
  );
}
