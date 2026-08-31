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
  other: {
    "impact-site-verification": "b6c96ac6-98af-4b34-aceb-1053a52fe0de",
  },
};

const categories = [
  {
    href: "/ai",
    title: "AI Tools",
    description:
      "Chatbots, writing assistants, image generators, and productivity AI.",
    icon: Brain,
    tint: "from-cyan-500/20 to-violet-600/5",
    iconClass: "text-cyan-300",
  },
  {
    href: "/software",
    title: "Software",
    description: "VPNs, antivirus, password managers, and everyday utilities.",
    icon: Shield,
    tint: "from-emerald-500/20 to-teal-600/5",
    iconClass: "text-emerald-300",
  },
  {
    href: "/blog",
    title: "Guides & Reviews",
    description: "Side-by-side comparisons, tutorials, and buying advice.",
    icon: BookOpen,
    tint: "from-violet-500/20 to-indigo-600/5",
    iconClass: "text-violet-300",
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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div
          className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
          aria-hidden
        />

        <Container className="relative z-10 flex min-h-[84vh] flex-col items-center justify-center py-24 text-center">
          <Badge pulse>
            <Sparkles className="h-3.5 w-3.5 text-violet-500" />
            Independent comparisons · 2026
          </Badge>

          <h1 className="font-display hero-title mt-7 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Discover the best
            <span className="mt-1 block bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-500 bg-clip-text text-transparent">
              online offers & tools
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
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

          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            {["AI Tools", "VPNs", "Antivirus", "Writing AI", "Password managers"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-300"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="relative pb-8 pt-4">
        <Container>
          <SectionHeading
            accent="brand"
            eyebrow="Browse"
            title="Popular categories"
            subtitle="Start with a vertical, then compare the options that actually fit."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.tint} p-6 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/25`}
                >
                  <div
                    className={`mb-5 inline-flex rounded-xl border border-white/15 bg-white/10 p-3 ${cat.iconClass}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {cat.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-300 opacity-0 transition group-hover:opacity-100">
                    Open category
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-6 py-8 text-center"
              >
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 pb-20">
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
                className="group glass rounded-2xl p-6 transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                  {item.category}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold group-hover:text-violet-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 py-20">
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
                <div key={reason.title} className="glass rounded-2xl p-7">
                  <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
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

      <section className="px-4 pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-violet-600/30 via-indigo-800/20 to-cyan-700/20 px-8 py-14 text-center md:px-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl"
              aria-hidden
            />
            <h2 className="font-display relative text-3xl font-bold md:text-5xl">
              Compare first. Click once.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-slate-300">
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
