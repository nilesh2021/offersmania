import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";

import Breadcrumb from "@/components/layout/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { faqSchema } from "@/lib/schema";
import { datingOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Dating Sites in USA (2026)",
  description:
    "Compare the best dating sites in the USA. Discover popular dating platforms, compare features, and find the right match for your dating goals.",
};

const schema = faqSchema([
  {
    question: "What is the best dating site in the USA?",
    answer:
      "The best dating site depends on your goals, preferences, and the type of relationship you are seeking.",
  },
  {
    question: "Are dating apps popular in the USA?",
    answer:
      "Yes. Millions of Americans use dating websites and mobile dating apps every day.",
  },
  {
    question: "Can I use dating sites for free?",
    answer:
      "Most dating sites offer free registration, while premium features may require a paid subscription.",
  },
]);

const glass =
  "rounded-2xl border border-white/15 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl";

export default function BestDatingSitesUSAPage() {
  return (
    <div className="relative overflow-hidden bg-ink text-white">
      <Script
        id="usa-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(236,72,153,0.28),transparent)]" />

      <Container className="relative z-10 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dating", href: "/dating" },
            { label: "Best Dating Sites USA" },
          ]}
        />
      </Container>

      <section className="relative px-4 pb-20 pt-10">
        <Container className="text-center">
          <span className={`${glass} inline-flex px-4 py-2 text-sm font-medium text-brand`}>
            USA Dating Guide 2026
          </span>
          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Best dating sites in the{" "}
            <span className="bg-gradient-to-r from-[#4f00ca] via-[#7b3dff] to-[#9b6dff] bg-clip-text text-transparent">
              United States
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Compare platforms by relationship goals, features, and style — then
            open the one that actually fits.
          </p>
        </Container>
      </section>

      <section className="px-4 pb-16">
        <Container size="md">
          <div className={`${glass} p-8 md:p-12`}>
            <SectionHeading
              align="left"
              accent="dating"
              eyebrow="Overview"
              title="Online dating in the United States"
            />
            <div className="-mt-4 space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                Millions of singles in the US use apps and websites to meet
                people every day. The useful split is not “best vs worst” — it
                is casual, serious, niche, or local.
              </p>
              <p>
                Use the ranking below as a starting shortlist, then read the
                pros and cons before you create a profile.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-8">
        <Container>
          <SectionHeading
            accent="dating"
            eyebrow="Comparison"
            title="Compare dating sites"
          />
          <div className={`${glass} hidden overflow-hidden md:block`}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="p-5">Rank</th>
                  <th className="p-5">Site</th>
                  <th className="p-5">Best for</th>
                  <th className="p-5">Rating</th>
                  <th className="p-5 text-center">Visit</th>
                </tr>
              </thead>
              <tbody>
                {datingOffers.map((offer, i) => (
                  <tr
                    key={offer.slug}
                    className={i < datingOffers.length - 1 ? "border-b border-white/10" : ""}
                  >
                    <td className="p-5 font-semibold">{offer.rank}</td>
                    <td className="p-5 font-semibold">{offer.name}</td>
                    <td className="p-5 text-slate-300">{offer.bestFor}</td>
                    <td className="p-5">
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-brand">
                        {offer.rating}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <Link
                        href={`/go/${offer.slug}`}
                        className="inline-flex rounded-full bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-4 py-2 text-sm font-semibold"
                      >
                        Visit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 md:hidden">
            {datingOffers.map((offer) => (
              <div key={offer.slug} className={`${glass} p-5`}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{offer.rank}</span>
                  <span className="text-sm text-brand">{offer.rating}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{offer.name}</h3>
                <p className="text-sm text-slate-400">{offer.bestFor}</p>
                <Link
                  href={`/go/${offer.slug}`}
                  className="mt-4 inline-flex rounded-full bg-[#4f00ca] px-4 py-2 text-sm font-semibold"
                >
                  Visit site
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 py-16">
        <Container size="md" className="space-y-5">
          {datingOffers.map((offer) => (
            <article key={offer.slug} className={`${glass} p-6 md:p-8`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  {offer.rank} {offer.name}
                </h2>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-brand">
                  {offer.rating}
                </span>
              </div>
              <p className="mt-4 text-slate-300">
                {offer.name} is a popular option for people interested in{" "}
                {offer.bestFor.toLowerCase()}.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-brand">Pros</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {offer.pros.map((pro) => (
                      <li key={pro}>✓ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-rose-300">Cons</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {offer.cons.map((con) => (
                      <li key={con}>✗ {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                href={`/go/${offer.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-6 py-3 text-sm font-semibold"
              >
                Visit {offer.name}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <section className="px-4 pb-12">
        <Container>
          <h2 className="font-display mb-6 text-2xl font-semibold">Related guides</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { href: "/dating/best-dating-sites-germany", label: "Best Dating Sites Germany" },
              { href: "/dating/serious-relationship-dating-sites", label: "Serious Relationship Sites" },
              { href: "/dating/tinder-alternatives", label: "Tinder Alternatives" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={`${glass} p-5 transition hover:bg-white/10`}>
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24">
        <Container>
          <div className={`${glass} bg-gradient-to-br from-[#4f00ca]/25 to-[#3d00a0]/20 px-8 py-14 text-center md:px-16`}>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Ready to start dating?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-300">
              Open our current top pick or keep browsing regional guides.
            </p>
            <div className="mt-8">
              <Button href="/go/realsexclub" variant="primary">
                Visit top pick
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
