import type { Metadata } from "next";

import GuideLayout from "@/components/ui/GuideLayout";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Best Christian Dating Sites (2026) | OffersMania",
  description:
    "Compare Christian dating platforms for faith-based relationships and meaningful connections.",
};

export default function ChristianDatingSitesPage() {
  return (
    <GuideLayout
      accent="dating"
      eyebrow="Faith-based"
      title="Best Christian dating sites"
      subtitle="Platforms that put shared values and faith at the center of matching — not just photos."
      related={[
        {
          title: "Serious Relationship Dating Sites",
          description: "Long-term matchmaking without the swipe treadmill.",
          href: "/dating/serious-relationship-dating-sites",
          category: "Dating",
        },
        {
          title: "Best Dating Sites USA",
          description: "Broader US platforms if you want more options.",
          href: "/dating/best-dating-sites-usa",
          category: "Dating",
        },
      ]}
    >
      <p>
        Christian dating sites typically screen for faith, denomination, or
        values-based prompts so you spend less time filtering for the basics.
        Expect slower, more profile-heavy matching than swipe-first apps.
      </p>
      <p>
        Compare community size in your region, moderation, and whether
        messaging is free before you pay for a plan.
      </p>
      <div className="pt-4">
        <Button href="/dating" variant="accent">
          Browse dating guides
        </Button>
      </div>
    </GuideLayout>
  );
}
