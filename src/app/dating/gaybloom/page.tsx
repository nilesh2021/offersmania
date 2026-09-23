import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/gaybloom");

const offers = offersBySlugs(["gaybloom", "pridepair"]);

export default function GaybloomPage() {
  return (
    <DatingPageLayout
      eyebrow="LGBTQ+ · for men"
      title={
        <>
          Meet men who{" "}
          <span className="bg-gradient-to-r from-violet-300 via-rose-300 to-[#f3c9a8] bg-clip-text text-transparent">
            actually get it
          </span>
        </>
      }
      subtitle="GayBloom and PridePair are built for gay, bi, and queer men — chat, dates, and chemistry without the mainstream noise."
      intro="Compare LGBTQ+ dating for men — GayBloom and PridePair are gay dating apps built for chat, dates, and chemistry without mainstream noise."
      offers={offers}
      faqs={[
        {
          question: "What is GayBloom?",
          answer:
            "GayBloom is an online dating platform designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections.",
        },
        {
          question: "How is PridePair different?",
          answer:
            "PridePair is a pride-forward dating room with a similar chat-first energy. Try both if you want a wider pool.",
        },
        {
          question: "Is it free to join?",
          answer:
            "Most users can register and explore basic features for free. Premium options may unlock extra messaging and visibility.",
        },
        {
          question: "Can I use this on my phone?",
          answer:
            "Yes. Both platforms work in mobile browsers for on-the-go chat and browsing.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/local-dating-sites", title: "Local" },
      ]}
      faqId="gaybloom-faq"
    />
  );
}
