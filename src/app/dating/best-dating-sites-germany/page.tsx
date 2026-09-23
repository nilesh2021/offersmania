import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { hubOffers } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/best-dating-sites-germany");

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
      intro="Compare adult dating sites Germany with active members in Berlin, Munich, Hamburg, and beyond — same rankings, localized intent."
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
