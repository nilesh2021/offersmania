import type { Metadata } from "next";
import Link from "next/link";
import { EyeOff, MessageCircle, Smartphone, Sparkles } from "lucide-react";

import DatingFaq from "@/components/dating/DatingFaq";
import DatingHero from "@/components/dating/DatingHero";
import OfferRankCard from "@/components/dating/OfferRankCard";
import Container from "@/components/ui/Container";
import { hubOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Adult Dating & Private Connections (2026)",
  description:
    "Discreet adult dating for chemistry, chat, and connections. Compare top worldwide platforms for 18+ singles.",
};

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

      <section id="rankings" className="scroll-mt-28 px-4 py-8 md:py-12">
        <Container size="md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
            Worldwide · 18+
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold text-white md:text-5xl">
            Five rooms. Pick your energy.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
            General-country adult platforms — not geo-locked, not a lecture.
            Tap through when you are ready.
          </p>
          <div className="mt-10 space-y-4">
            {hubOffers.map((offer, i) => (
              <OfferRankCard key={offer.slug} offer={offer} featured={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 py-16">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
            Why these
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold text-white md:text-4xl">
            Built for chemistry, not small talk
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 text-[#f3c9a8]" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="px-4 py-8">
        <Container size="md">
          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
              Stay sharp
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">
              Discretion is the point
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Use a photo you are comfortable with. Never send money or
              documents. Report anyone who pushes you off-platform too fast.
              Meet in public if you take it offline. You are here for
              connection — not a performance for strangers.
            </p>
          </div>
        </Container>
      </section>

      <DatingFaq items={faqs} id="dating-hub-faq" />

      <section className="relative px-4 pb-10 pt-4">
        <Container size="md">
          <div className="overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-rose-900/40 via-[#1a0c14] to-amber-900/20 p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-300">
              {top.name} is the #1 pick for discreet adult connections
              worldwide. Join free, browse, and talk tonight.
            </p>
            <Link
              href={`/go/${top.slug}`}
              rel="nofollow sponsored"
              className="stay-white mt-8 inline-flex rounded-full bg-[#d4af37] px-10 py-4 font-semibold text-[#1a1204] shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] hover:bg-[#e4c45a]"
            >
              Visit {top.name}
            </Link>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20">
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
