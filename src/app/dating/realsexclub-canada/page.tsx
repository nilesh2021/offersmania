import type { Metadata } from "next";

import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "RealSexClub Canada Review 2026 | Casual Dating & Adult Chat",
  description:
    "RealSexClub Canada review — casual dating, adult chat, and discreet connections for Canadian adults.",
};

const CANADA_LINK =
  "https://t.crdtg3.com/358917/10277/0?po=6456&aff_sub5=SF_006OG000004lmDN";

const offers = offersBySlugs(["realsexclub"]);

export default function RealSexClubCanadaPage() {
  return (
    <DatingPageLayout
      eyebrow="#1 in Canada · 18+"
      title={
        <>
          RealSexClub{" "}
          <span className="bg-gradient-to-r from-rose-400 to-[#f3c9a8] bg-clip-text text-transparent">
            Canada
          </span>
        </>
      }
      subtitle="Casual dating, adult chat, and discreet matches for Canadian adults who want chemistry without the noise."
      intro="Registration is fast. Browse profiles, start a private conversation, and keep it between you."
      offers={offers}
      primaryExternalHref={CANADA_LINK}
      faqs={[
        {
          question: "Is RealSexClub available in Canada?",
          answer:
            "Yes. Canadian users can register and explore matches and chat features.",
        },
        {
          question: "Is registration free?",
          answer:
            "Registration is typically free. Some premium features may require a paid upgrade.",
        },
        {
          question: "Can I use RealSexClub on mobile?",
          answer: "Yes. The platform is optimized for phones, tablets, and desktop.",
        },
      ]}
      guides={[
        { href: "/dating", title: "All rankings" },
        { href: "/dating/casual-dating-sites", title: "Casual" },
        { href: "/dating/best-dating-sites-usa", title: "USA" },
      ]}
      faqId="realsexclub-canada-faq"
    />
  );
}
