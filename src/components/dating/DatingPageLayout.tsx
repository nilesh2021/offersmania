import Link from "next/link";

import DatingFaq, { type DatingFaqItem } from "@/components/dating/DatingFaq";
import DatingHero from "@/components/dating/DatingHero";
import OfferRankCard from "@/components/dating/OfferRankCard";
import Container from "@/components/ui/Container";
import type { DatingOffer } from "@/data/datingOffers";

type GuideLink = {
  href: string;
  title: string;
};

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  offers: DatingOffer[];
  faqs: DatingFaqItem[];
  intro?: string;
  primarySlug?: string;
  primaryExternalHref?: string;
  guides?: GuideLink[];
  faqId?: string;
};

export default function DatingPageLayout({
  eyebrow,
  title,
  subtitle,
  offers,
  faqs,
  intro,
  primarySlug,
  primaryExternalHref,
  guides,
  faqId,
}: Props) {
  const featured = offers[0];
  const primaryHref = primaryExternalHref ?? `/go/${primarySlug ?? featured?.slug}`;

  return (
    <div>
      <DatingHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        primary={{
          href: primaryHref,
          label: featured ? `Join ${featured.name}` : "See top picks",
          external: Boolean(primaryExternalHref),
        }}
        secondary={{ href: "#rankings", label: "See rankings" }}
      />

      {intro && (
        <section className="px-4 pb-4">
          <Container size="md">
            <p className="text-center text-base leading-relaxed text-slate-300 md:text-lg">
              {intro}
            </p>
          </Container>
        </section>
      )}

      <section id="rankings" className="scroll-mt-4 px-4 py-6 md:py-8">
        <Container size="md">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
            Ranked for tonight
          </p>
          <h2 className="font-display mt-2 text-center text-2xl font-bold text-white md:text-3xl">
            Where chemistry actually happens
          </h2>
          <div className="mt-6 space-y-3">
            {offers.map((offer, i) => (
              <OfferRankCard
                key={offer.slug}
                offer={{ ...offer, rank: i + 1 }}
                featured={i === 0}
                href={
                  primaryExternalHref && i === 0 ? primaryExternalHref : undefined
                }
                external={Boolean(primaryExternalHref && i === 0)}
              />
            ))}
          </div>
        </Container>
      </section>

      <DatingFaq items={faqs} id={faqId} />

      {guides && guides.length > 0 && (
        <section className="px-4 pb-10">
          <Container>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
              More rooms
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {guides.map((guide) => (
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
      )}
    </div>
  );
}
