import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/local-dating-sites");

const offers = offersBySlugs(["fuckfinder", "realsexclub", "dirtydating"]);

export default function LocalDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Nearby · 18+"
      title={
        <>
          Someone{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            close enough
          </span>
        </>
      }
      subtitle="Location-first matching for adults who would rather meet than message for weeks."
      intro="The best local dating sites put distance first — meet singles near you on adult platforms built for tonight, not endless texting."
      primarySlug="fuckfinder"
      offers={offers}
      faqs={[
        {
          question: "Which site is best for local dating?",
          answer:
            "FuckFinder is built around people nearby. RealSexClub and DirtyDating also let you filter by location after you join.",
        },
        {
          question: "Does this work in smaller towns?",
          answer:
            "Density is higher in cities. Try more than one platform if your town is quiet.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/best-dating-sites-usa", title: "USA" },
      ]}
      faqId="local-dating-faq"
    />
  );
}
