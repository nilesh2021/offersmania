import Link from "next/link";
import { EyeOff, MessageCircle, Smartphone, Sparkles } from "lucide-react";

import DatingFaq from "@/components/dating/DatingFaq";
import DatingHero from "@/components/dating/DatingHero";
import OfferRankCard from "@/components/dating/OfferRankCard";
import Container from "@/components/ui/Container";
import { hubOffers } from "@/data/datingOffers";
import { buildDatingMetadata } from "@/lib/datingSeo";

export const metadata = buildDatingMetadata("/dating");

const reasons = [
  {
    icon: EyeOff,
    title: "Discreet by design",
    text: "Private profiles, quiet sign-up, and no need to explain yourself.",
  },
  {
    icon: Sparkles,
    title: "People who want the same",
    text: "Adult intent up front — chemistry without the endless interview.",
  },
  {
    icon: MessageCircle,
    title: "Chat tonight",
    text: "Active members, fast replies, and conversations that actually start.",
  },
  {
    icon: Smartphone,
    title: "On your phone",
    text: "Join in minutes from mobile. No app-store theatre required.",
  },
];

const faqs = [
  {
    question: "What are the best adult dating sites in 2026?",
    answer:
      "Our rankings compare discreet adult dating sites for chat and casual chemistry worldwide. RealSexClub leads for direct intent; NaughtyCharm and CheekyCrush suit a flirty dating vibe; FuckFinder is strongest for local matches.",
  },
  {
    question: "Are these sites for adults only?",
    answer:
      "Yes. Every platform here is intended for people 18 years or older. Use real details, protect your privacy, and leave if something feels off.",
  },
  {
    question: "Can I join for free?",
    answer:
      "Most sites let you register and browse for free. Premium plans typically unlock extra messaging, visibility, and filters.",
  },
  {
    question: "Which site should I start with?",
    answer:
      "RealSexClub is the top pick for discreet casual connections worldwide. If you want a flirty dating vibe, start with NaughtyCharm or CheekyCrush. For people nearby, try FuckFinder.",
  },
  {
    question: "Is this safe?",
    answer:
      "Reputable adult platforms offer reporting, blocking, and privacy controls. Never send money, keep personal details private until you trust someone, and meet in public if you go offline.",
  },
];

const guideLinks = [
  { href: "/dating/casual-dating-sites", title: "Casual" },
  { href: "/dating/best-dating-sites-usa", title: "USA" },
  { href: "/dating/best-dating-sites-germany", title: "Germany" },
  { href: "/dating/gaybloom", title: "LGBTQ+" },
  { href: "/dating/mature-dating-sites", title: "Mature" },
  { href: "/dating/tinder-alternatives", title: "Alternatives" },
];

export default function DatingPage() {
  const top = hubOffers[0];

  return (
    <div>
      <DatingHero
        title={
          <>
            Find someone who wants{" "}
            <span className="bg-gradient-to-r from-rose-400 via-[#f3c9a8] to-amber-200 bg-clip-text text-transparent">
              the same thing tonight
            </span>
          </>
        }
        subtitle="Private adult connections — chemistry, chat, and no performance. Ranked for worldwide members who already know the vibe."
        primary={{
          href: `/go/${top.slug}`,
          label: `Join ${top.name}`,
        }}
        secondary={{ href: "#rankings", label: "See tonight's rankings" }}
      />

      <section className="px-4 pb-2 pt-2">
        <Container size="md">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-400 md:text-base">
            Compare the{" "}
            <span className="font-medium text-slate-300">best adult dating sites</span>{" "}
            for discreet 18+ chat and casual connections. We rank worldwide platforms
            on chemistry, privacy, and how fast conversations actually start — so you
            can pick a room and join with confidence.
          </p>
        </Container>
      </section>

      <section id="rankings" className="scroll-mt-4 px-4 py-6 md:py-8">
        <Container size="md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
            Worldwide · 18+
          </p>
          <h2 className="font-display mt-2 text-center text-2xl font-bold text-white md:text-4xl">
            Five rooms. Pick your energy.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-400">
            Worldwide adult platforms — tap through when you are ready.
          </p>
          <div className="mt-6 space-y-3">
            {hubOffers.map((offer, i) => (
              <OfferRankCard key={offer.slug} offer={offer} featured={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 py-8 md:py-10">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-xl border border-white/12 bg-white/[0.05] p-4 backdrop-blur-xl"
                >
                  <Icon className="h-4 w-4 text-[#f3c9a8]" strokeWidth={1.5} />
                  <h3 className="mt-2 font-display text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <DatingFaq items={faqs} id="dating-hub-faq" />

      <section className="px-4 pb-10">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
            More rooms
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {guideLinks.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-rose-400/40 hover:text-white"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
