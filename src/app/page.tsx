import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Shield,
  Sparkles,
  BookOpen,
  Scale,
  RefreshCw,
  Search,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  verification: {
    google: "3uvolrkzksSadIy3lwLliFYbte7UGc6w1bOtqwuMrF0",
  },
  other: {
    "impact-site-verification": "38650714-f28a-47c5-a6a1-1e26d3d1d43a",
  },
};

const productCards = [
  {
    href: "/ai",
    title: "AI Tools",
    description:
      "Chatbots, writing assistants, image generators, and productivity AI — compared in one place.",
    icon: Brain,
    tag: "Guides",
    tagVariant: "info" as const,
    primaryCta: "Browse AI",
    secondaryCta: { href: "/ai/best-ai-tools", label: "Top picks" },
    featured: false,
  },
  {
    href: "/software",
    title: "Software",
    description:
      "VPNs, antivirus, password managers, and everyday utilities reviewed for real-world use.",
    icon: Shield,
    tag: "Reviews",
    tagVariant: "info" as const,
    primaryCta: "Browse software",
    secondaryCta: { href: "/software/best-vpn", label: "Best VPNs" },
    featured: false,
  },
  {
    href: "/blog",
    title: "Guides & comparisons",
    description:
      "Side-by-side breakdowns, tutorials, and buying advice without the marketing fluff.",
    icon: BookOpen,
    tag: "Editorial",
    tagVariant: "warm" as const,
    primaryCta: "Read guides",
    secondaryCta: { href: "/ai/chatgpt-vs-gemini-vs-claude", label: "Compare AI" },
    featured: false,
  },
  {
    href: "/ai",
    title: "Explore the catalog",
    description:
      "Jump straight into rankings updated for 2026 — from assistants to security tools.",
    icon: Sparkles,
    tag: "Start here",
    tagVariant: "warm" as const,
    primaryCta: "Explore offers",
    secondaryCta: null,
    featured: true,
  },
];

const stats = [
  { value: "100+", label: "Offers reviewed" },
  { value: "50+", label: "Software tools" },
  { value: "25+", label: "Buying guides" },
  { value: "2026", label: "Rankings updated" },
];

const reasons = [
  {
    icon: Search,
    title: "Researched, not recycled",
    text: "We compare features, pricing, and safety so you skip hours of trial and error.",
  },
  {
    icon: Scale,
    title: "Side-by-side clarity",
    text: "Pros, cons, and ratings in one place — pick the fit, not the loudest ad.",
  },
  {
    icon: RefreshCw,
    title: "Kept current",
    text: "New tools and platforms land often. Rankings are reviewed for 2026.",
  },
];

const featured = [
  {
    href: "/ai/best-ai-tools",
    category: "AI",
    title: "Best AI tools in 2026",
    text: "Assistants, image models, and coding tools worth paying for.",
  },
  {
    href: "/ai/chatgpt-vs-gemini-vs-claude",
    category: "AI",
    title: "ChatGPT vs Gemini vs Claude",
    text: "Head-to-head on writing, research, and reasoning.",
  },
  {
    href: "/software/best-vpn",
    category: "Software",
    title: "Best VPN services",
    text: "Privacy, speed, and streaming — compared without the hype.",
  },
];

export default function Home() {
  return (
    <div className="bg-ink text-fg">
      <section className="relative overflow-hidden bg-ink dark:bg-ink">
        <div className="pointer-events-none absolute inset-0 hidden bg-mesh dark:block" />
        <div className="pointer-events-none absolute inset-0 hidden bg-grid dark:block" />
        <div
          className="pointer-events-none absolute -right-24 top-32 hidden h-80 w-80 rounded-full bg-brand/20 blur-[100px] dark:block"
          aria-hidden
        />

        <Container className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center md:min-h-[78vh] md:py-28">
          <p
            className="text-sm font-semibold text-brand underline decoration-2 underline-offset-8 dark:no-underline"
          >
            <span className="hidden dark:inline-flex">
              <Badge pulse>
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                Independent comparisons · 2026
              </Badge>
            </span>
            <span className="dark:hidden">Compare &amp; choose</span>
          </p>

          <h1 className="font-display hero-title mt-6 max-w-4xl text-4xl font-bold tracking-tight text-fg md:text-6xl lg:text-7xl">
            Discover the best
            <span className="mt-2 block text-fg dark:bg-gradient-to-r dark:from-[#7b3dff] dark:via-[#9b6dff] dark:to-[#c4b5fd] dark:bg-clip-text dark:text-transparent">
              online offers &amp; tools
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            AI tools and software — ranked, compared, and explained so you can
            choose with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/ai" variant="primary">
              Explore AI tools
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/software" variant="secondary">
              Browse software
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {["AI Tools", "VPNs", "Antivirus", "Writing AI", "Password managers"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-[var(--page-soft)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-14 dark:border-white/10 dark:bg-transparent dark:py-8">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              Browse offers &amp; tools
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Pick a vertical, then compare the options that actually fit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {productCards.map((card) => {
              const Icon = card.icon;
              const tagClass =
                card.tagVariant === "info" ? "badge-tag-info" : "badge-tag-warm";

              if (card.featured) {
                return (
                  <div
                    key={card.title}
                    className="card-tor-featured relative flex flex-col dark:glass dark:rounded-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-[#4f00ca]/25 dark:via-[#7b3dff]/15 dark:to-[#9b6dff]/10"
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <Icon
                        className="h-10 w-10 text-brand dark:inline-flex"
                        strokeWidth={1.5}
                      />
                      <span className={tagClass}>{card.tag}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-fg">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                    <div className="mt-6">
                      <Button href={card.href} variant="primary" size="md">
                        {card.primaryCta}
                      </Button>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={card.title}
                  className="card-tor flex flex-col dark:glass dark:rounded-2xl"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <Icon
                      className="h-10 w-10 shrink-0 text-brand"
                      strokeWidth={1.5}
                    />
                    <span className={tagClass}>{card.tag}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button href={card.href} variant="primary" size="sm">
                      {card.primaryCta}
                    </Button>
                    {card.secondaryCta && (
                      <Button
                        href={card.secondaryCta.href}
                        variant="primary"
                        size="sm"
                      >
                        {card.secondaryCta.label}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 dark:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-xl px-6 py-8 text-center dark:glass dark:rounded-2xl"
              >
                <p className="font-display text-4xl font-bold text-brand md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--page-soft)] py-16 dark:bg-transparent dark:py-8 dark:pb-20">
        <Container>
          <SectionHeading
            accent="brand"
            eyebrow="Editor’s picks"
            title="Start with these guides"
            subtitle="High-intent comparisons readers use most."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="surface-card group rounded-xl p-6 transition hover:bg-[var(--card-hover)] dark:glass dark:rounded-2xl dark:hover:border-white/25 dark:hover:bg-white/[0.08]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {item.category}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 dark:border-white/10 dark:py-20">
        <Container>
          <SectionHeading
            accent="brand"
            eyebrow="Why OffersMania"
            title="Built for clearer decisions"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="surface-card rounded-xl p-7 dark:glass dark:rounded-2xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[var(--accent-soft)] p-3 text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-xl border border-line bg-[var(--page-soft)] px-8 py-14 text-center md:rounded-2xl md:px-16 dark:rounded-3xl dark:border-white/15 dark:bg-gradient-to-br dark:from-[#4f00ca]/25 dark:via-[#7b3dff]/15 dark:to-[#9b6dff]/10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 hidden h-56 w-56 rounded-full bg-brand/20 blur-3xl dark:block"
              aria-hidden
            />
            <h2 className="font-display relative text-3xl font-bold md:text-5xl">
              Compare first. Click once.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted">
              Skip the tab chaos. Open a guide, scan the ranking, and go
              straight to the product that fits.
            </p>
            <div className="relative mt-8">
              <Button href="/ai" variant="primary">
                Start comparing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
