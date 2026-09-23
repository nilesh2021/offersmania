import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "GayBloom & PridePair | LGBTQ+ Dating for Men",
  description:
    "GayBloom and PridePair are dating platforms for men in the LGBTQ+ community. Meet, chat, and explore new connections.",
};

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
      intro="Create a profile, browse, and start talking. Inclusive rooms, private messaging, and a community that does not treat you as an afterthought."
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
