import type { Metadata } from "next";

import GuideLayout from "@/components/ui/GuideLayout";
import AffiliateButton from "@/components/ui/AffiliateButton";

export const metadata: Metadata = {
  title: "Best Local Dating Sites (2026) | OffersMania",
  description:
    "Compare local dating sites and apps for meeting singles near you.",
};

export default function LocalDatingSitesPage() {
  return (
    <GuideLayout
      accent="dating"
      eyebrow="Nearby"
      title="Best local dating sites"
      subtitle="When distance is the filter — platforms that emphasize people actually in your city."
      related={[
        {
          title: "Casual Dating Sites",
          description: "Lighter connections and social dating.",
          href: "/dating/casual-dating-sites",
          category: "Dating",
        },
        {
          title: "Best Dating Sites USA",
          description: "National platforms with strong local pockets.",
          href: "/dating/best-dating-sites-usa",
          category: "Dating",
        },
      ]}
    >
      <p>
        Local dating works when the member base in your city is dense enough.
        Large national apps often win in metros; niche sites can feel empty in
        smaller towns.
      </p>
      <p>
        Check location filters, map views, and whether the app lets you hide
        your profile from contacts.
      </p>
      <div className="pt-4">
        <AffiliateButton href="/go/fuckfinder">View a local-focused option</AffiliateButton>
      </div>
    </GuideLayout>
  );
}
