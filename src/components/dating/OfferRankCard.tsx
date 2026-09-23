import Link from "next/link";

import type { DatingOffer } from "@/data/datingOffers";

type Props = {
  offer: DatingOffer;
  featured?: boolean;
  href?: string;
  external?: boolean;
};

export default function OfferRankCard({
  offer,
  featured = offer.rank === 1,
  href,
  external,
}: Props) {
  const target = href ?? `/go/${offer.slug}`;
  const ctaClass = featured
    ? "stay-white inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#1a1204] shadow-[0_8px_24px_rgba(212,175,55,0.35)] transition hover:scale-[1.02] hover:bg-[#e4c45a]"
    : "stay-white inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(225,29,72,0.35)] transition hover:bg-rose-500";

  const cta = external ? (
    <a
      href={target}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={ctaClass}
    >
      Visit {offer.name}
    </a>
  ) : (
    <Link href={target} rel="nofollow sponsored" className={ctaClass}>
      Visit {offer.name}
    </Link>
  );

  if (featured) {
    return (
      <article className="relative overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-white/[0.07] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br ${offer.glow} blur-2xl`}
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3c9a8]">
                #{offer.rank} · Most wanted
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                {offer.rating} / 10
              </span>
            </div>
            <h3 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">
              {offer.name}
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#f3c9a8]">
              {offer.bestFor}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
              {offer.tagline}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {offer.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-slate-200"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
            {cta}
            <p className="text-xs text-slate-400">Free to join · 18+</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:border-rose-400/30 hover:bg-white/[0.08] md:p-6">
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${offer.glow} blur-2xl`}
        aria-hidden
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-display text-lg font-bold text-[#f3c9a8]">
            #{offer.rank}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-semibold text-white">
                {offer.name}
              </h3>
              <span className="text-xs font-semibold text-rose-300">
                {offer.rating}/10
              </span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#f3c9a8]">
              {offer.bestFor}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              {offer.tagline}
            </p>
            <ul className="mt-3 hidden flex-wrap gap-2 sm:flex">
              {offer.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-full border border-white/10 bg-black/20 px-2.5 py-0.5 text-[11px] text-slate-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shrink-0 sm:pl-4">{cta}</div>
      </div>
    </article>
  );
}
