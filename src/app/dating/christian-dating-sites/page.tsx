import DatingPageLayout from "@/components/dating/DatingPageLayout";
import { offersBySlugs } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating/christian-dating-sites");

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
      intro="Christian dating sites and values-first matching are personal. These worldwide chat-first platforms suit adults who want conversation before chemistry — say your faith in your profile."
      offers={offers}
      faqs={[
        {
          question: "Are these dedicated Christian dating sites?",
          answer:
            "They are conversation-first platforms, not church-only apps. For faith-based dating, state your values clearly and take chat at your pace.",
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
