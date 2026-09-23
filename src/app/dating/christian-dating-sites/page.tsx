import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Christian Dating Sites (2026) | OffersMania",
  description:
    "Compare faith-minded dating platforms and broader connection options for values-first matching.",
};

const offers = offersBySlugs(["naughtycharm", "cheekycrush"]);

export default function ChristianDatingSitesPage() {
  return (
    <DatingPageLayout
      eyebrow="Values · connections"
      title={
        <>
          Dating with{" "}
          <span className="bg-gradient-to-r from-rose-300 to-[#f3c9a8] bg-clip-text text-transparent">
            more than a photo
          </span>
        </>
      }
      subtitle="If shared values matter, start with platforms that let you talk first. These rooms prioritize conversation and chemistry."
      intro="Faith-based matching is personal. The platforms below are worldwide chat-first options if you want a more human start than a swipe stack."
      offers={offers}
      faqs={[
        {
          question: "Are these dedicated Christian dating sites?",
          answer:
            "They are conversation-first worldwide platforms. If faith is essential, say so in your profile and take conversations slowly.",
        },
        {
          question: "Can I join for free?",
          answer:
            "Most allow free registration. Premium plans may unlock extra messaging.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/serious-relationship-dating-sites", title: "Serious" },
        { href: "/dating/best-dating-sites-usa", title: "USA" },
      ]}
      faqId="christian-dating-faq"
    />
  );
}
