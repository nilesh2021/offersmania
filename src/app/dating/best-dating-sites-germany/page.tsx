import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import SectionHeading from "@/components/ui/SectionHeading";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Dating Sites Germany 2026 | Compare Top Online Dating Platforms",
  description:
    "Compare the best dating sites in Germany for casual dating, serious relationships, and meeting local singles. Reviews, ratings, and expert recommendations.",
};

const faqs = [
  {
    question: "What are the best online dating sites in Germany?",
    answer:
      "The best online dating sites in Germany depend on your preferences. Many users choose platforms with active German members, secure messaging, and strong matching features.",
  },
  {
    question: "Is online dating popular in Germany?",
    answer:
      "Yes. Millions of singles in Germany use online dating platforms to find relationships, friendships, and casual connections.",
  },
  {
    question: "Can foreigners use German dating sites?",
    answer:
      "Most German dating platforms welcome international users and expats living in Germany.",
  },
  {
    question: "Are German dating websites safe?",
    answer:
      "Reputable dating websites use profile verification, moderation, privacy controls, and secure messaging features.",
  },
  {
    question: "What is the best casual dating site in Germany?",
    answer:
      "Several popular platforms focus on casual dating and meeting new people. Compare features, member activity, and user reviews before joining.",
  },
  {
    question: "Are there free dating sites in Germany?",
    answer:
      "Many dating sites offer free registration and basic features. Premium plans usually unlock additional communication tools.",
  },
];

const schema = faqSchema([
  {
    question: "What is the best dating site in Germany?",
    answer:
      "The best dating site depends on your preferences and dating goals. Different platforms focus on different audiences and relationship types.",
  },
  {
    question: "Are dating sites in Germany popular?",
    answer:
      "Yes. Millions of singles use online dating platforms in Germany to meet new people and build relationships.",
  },
  {
    question: "Can I use dating sites on mobile devices?",
    answer:
      "Most modern dating platforms offer mobile-friendly websites and apps.",
  },
]);

const offers = [
  {
    rank: "#1",
    name: "RealSexClub",
    rating: "9.8/10",
    bestFor: "Casual Dating",
    slug: "realsexclub",
  
    pros: [
      "Fast Signup",
      "Large User Base",
      "Mobile App",
    ],
  
    cons: [
      "Premium Required",
    ],
  },
  {
    rank: "#2",
    name: "FetishPartner",
    rating: "9.4/10",
    bestFor: "Alternative Dating",
    slug: "fetishpartner",
    pros: [
      "Niche community",
      "Easy profile setup",
      "Active users",
      "Unique matching options",
    ],
    cons: ["Smaller audience than mainstream sites"],
  },
  {
    rank: "#3",
    name: "FuckFinder",
    rating: "9.1/10",
    bestFor: "Local Connections",
    slug: "fuckfinder",
    pros: [
      "Simple interface",
      "Quick sign up",
      "Large member database",
      "Location based matching",
    ],
    cons: ["Some features require premium access"],
  },
];

const glassCard =
  "rounded-3xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl";

export default function BestDatingSitesGermanyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Ambient background mesh */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#4f00ca]/25 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-rose-400/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.08)_0%,_transparent_50%)]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className={`${glassCard} mx-auto inline-flex items-center gap-2.5 px-5 py-2.5`}
          >
            <span className="text-lg">🇩🇪</span>
            <span className="text-sm font-medium tracking-wide text-white/90">
              Germany Dating Guide 2026
            </span>
          </div>

          <h1 className="hero-title mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            Best Dating Sites
            <span className="mt-2 block bg-gradient-to-r from-[#7b3dff] via-[#9b6dff] to-[#c4b5fd] bg-clip-text text-transparent">
              In Germany
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            Compare Germany&apos;s most popular dating platforms, discover active
            communities and find the best match for your relationship goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#offers"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-8 py-4 font-semibold shadow-lg shadow-[0_8px_24px_rgba(79,0,202,0.25)] transition hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(79,0,202,0.4)]"
            >
              <span className="relative z-10">View Top Sites</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7b3dff] to-[#4f00ca] opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="#faq"
              className={`${glassCard} px-8 py-4 font-semibold transition hover:border-white/30 hover:bg-white/15`}
            >
              Learn More
            </a>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { value: "3", label: "Top Sites Compared" },
              { value: "2026", label: "Updated Guide" },
              { value: "100%", label: "Free to Browse" },
            ].map((stat) => (
              <div key={stat.label} className={`${glassCard} px-6 py-5`}>
                <p className="text-2xl font-bold text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className={`${glassCard} mx-auto max-w-5xl p-8 md:p-12`}>
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title="Online Dating in Germany"
          />
          <div className="-mt-4 space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              Germany has one of the largest online dating markets in Europe.
              Whether you are looking for new connections, companionship, or
              long-term relationships, there are many dating platforms available.
            </p>
            <p>
              Below we compare three popular options based on usability, member
              activity, features, and overall experience.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Comparison"
            title="Compare Dating Sites"
            subtitle="Side-by-side overview of our top picks"
          />

          {/* Desktop table */}
          <div className={`${glassCard} hidden overflow-hidden md:block`}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-5 text-left text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Rank
                  </th>
                  <th className="p-5 text-left text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Site
                  </th>
                  <th className="p-5 text-left text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Best For
                  </th>
                  <th className="p-5 text-left text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Rating
                  </th>
                  <th className="p-5 text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Visit
                  </th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, i) => (
                  <tr
                    key={offer.slug}
                    className={`transition hover:bg-white/5 ${i < offers.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <td className="p-5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f00ca]/30 to-[#7b3dff]/30 text-sm font-bold">
                        {offer.rank}
                      </span>
                    </td>
                    <td className="p-5 font-semibold">{offer.name}</td>
                    <td className="p-5 text-slate-300">{offer.bestFor}</td>
                    <td className="p-5">
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-brand">
                        {offer.rating}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <Link
                        href={`/go/${offer.slug}`}
                        className="inline-flex rounded-xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-5 py-2.5 text-sm font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-[0_8px_24px_rgba(79,0,202,0.2)]"
                      >
                        Visit Site
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 md:hidden">
            {offers.map((offer) => (
              <div key={offer.slug} className={`${glassCard} p-6`}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f00ca]/30 to-[#7b3dff]/30 text-sm font-bold">
                    {offer.rank}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-brand">
                    {offer.rating}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{offer.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{offer.bestFor}</p>
                <Link
                  href={`/go/${offer.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] py-3 text-sm font-semibold"
                >
                  Visit Site
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="offers" className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          <SectionHeading
            eyebrow="Reviews"
            title="Detailed Reviews"
            subtitle="In-depth look at each platform"
          />

          {offers.map((offer, index) => (
            <article
              key={offer.slug}
              className={`${glassCard} group relative overflow-hidden p-5 md:p-6`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#4f00ca]/20 to-[#7b3dff]/20 blur-2xl transition group-hover:scale-150" />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f00ca] to-[#7b3dff] text-sm font-bold shadow-md shadow-[0_8px_24px_rgba(79,0,202,0.2)]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold md:text-xl">
                      {offer.name}
                    </h3>
                    <p className="text-xs text-slate-400">{offer.bestFor}</p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-brand">
                  {offer.rating}
                </span>
              </div>

              <p className="relative mt-3 text-sm leading-snug text-slate-400">
                Popular for {offer.bestFor.toLowerCase()} in Germany.
              </p>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                  <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-brand">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px]">
                      ✓
                    </span>
                    Pros
                  </h4>
                  <ul className="space-y-1">
                    {offer.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="text-emerald-400">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-rose-400/20 bg-rose-500/5 p-4">
                  <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-rose-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-[10px]">
                      ✗
                    </span>
                    Cons
                  </h4>
                  <ul className="space-y-1">
                    {offer.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="text-rose-400">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/go/${offer.slug}`}
                className="relative mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-5 py-2.5 text-sm font-semibold shadow-md shadow-[0_8px_24px_rgba(79,0,202,0.2)] transition hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(79,0,202,0.3)]"
              >
                Visit {offer.name}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="px-4 py-16">
        <div className={`${glassCard} mx-auto max-w-5xl p-8 md:p-12`}>
          <div className="flex items-start gap-5">
            <div className="hidden shrink-0 rounded-2xl border border-white/20 bg-white/10 p-4 sm:block">
              <svg
                className="h-8 w-8 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Trust"
                title="Why Trust Our Reviews?"
              />
              <p className="-mt-4 text-lg leading-relaxed text-slate-300">
                We compare platforms based on user experience, registration
                process, mobile usability, popularity, and overall value. Our
                goal is to help users find suitable dating platforms quickly and
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about dating in Germany"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={`${glassCard} group overflow-hidden transition hover:border-white/30`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 px-6 pb-6 pt-4 leading-relaxed text-slate-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Explore"
            title="Related Dating Guides"
            subtitle="Explore more dating resources"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/dating/best-dating-sites-usa",
                title: "Best Dating Sites USA",
                emoji: "🇺🇸",
              },
              {
                href: "/dating/serious-relationship-dating-sites",
                title: "Serious Relationship Dating Sites",
                emoji: "💕",
              },
              {
                href: "/dating/tinder-alternatives",
                title: "Tinder Alternatives",
                emoji: "🔥",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`${glassCard} group flex flex-col p-6 transition hover:border-white/30 hover:bg-white/15`}
              >
                <span className="text-3xl">{guide.emoji}</span>
                <span className="mt-4 font-semibold group-hover:text-brand">
                  {guide.title}
                </span>
                <span className="mt-2 text-sm text-slate-400 transition group-hover:text-slate-300">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div
          className={`${glassCard} relative mx-auto max-w-4xl overflow-hidden p-10 text-center md:p-16`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4f00ca]/10 via-transparent to-[#7b3dff]/10" />
          <div className="relative">
            <SectionHeading
              eyebrow="Get Started"
              title="Ready To Start Dating?"
              subtitle="Explore our top recommended dating sites and find the right platform for your needs."
              size="large"
            /><div className="mb-4 flex items-center gap-2 text-sm text-brand">
            <span>●</span>
            <span>Free registration available</span>
          </div>
            <Link
              href="/go/realsexclub"
              className="-mt-2 inline-flex rounded-2xl border border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition hover:scale-[1.03] hover:bg-white/20"
            >
              Visit Top Pick
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
