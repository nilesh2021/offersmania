import type { Metadata } from "next";

import GuideLayout from "@/components/ui/GuideLayout";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Best BBW Dating Sites (2026) | OffersMania",
  description:
    "Compare BBW dating sites and body-positive platforms for meeting plus-size singles.",
};

export default function BbwDatingSitesPage() {
  return (
    <GuideLayout
      accent="dating"
      eyebrow="Community"
      title="Best BBW dating sites"
      subtitle="Body-positive platforms and communities built around plus-size dating — not as an afterthought."
      related={[
        {
          title: "Casual Dating Sites",
          description: "Broader casual platforms with large member bases.",
          href: "/dating/casual-dating-sites",
          category: "Dating",
        },
        {
          title: "Mature Dating Sites",
          description: "Connections for adults 40+.",
          href: "/dating/mature-dating-sites",
          category: "Dating",
        },
      ]}
    >
      <p>
        Dedicated BBW and body-positive dating sites exist because mainstream
        apps often bury the experience in extra filters. Look for active
        members in your region, photo-first profiles you actually want, and
        moderation that keeps the community respectful.
      </p>
      <div className="pt-4">
        <Button href="/dating" variant="accent">
          Browse dating guides
        </Button>
      </div>
    </GuideLayout>
  );
}
