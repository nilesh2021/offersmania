import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dating Sites & Dating Apps (2026) | OffersMania",
  description:
    "Compare dating sites, apps, and relationship platforms. Discover the best dating websites for serious relationships, casual dating, seniors, and more.",
};

const featuredPages = [
  {
    title: "Best Dating Sites Germany",
    description: "Top-rated platforms for German singles and regional matching.",
    href: "/dating/best-dating-sites-germany",
    accent: "from-rose-400/30 to-pink-500/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Best Dating Sites USA",
    description: "Compare America's most popular apps and relationship sites.",
    href: "/dating/best-dating-sites-usa",
    accent: "from-fuchsia-400/30 to-violet-500/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Serious Relationship Dating Sites",
    description: "Long-term matchmaking for commitment-minded singles.",
    href: "/dating/serious-relationship-dating-sites",
    accent: "from-pink-400/30 to-rose-500/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Tinder Alternatives",
    description: "Swipe-free apps and niche platforms worth trying.",
    href: "/dating/tinder-alternatives",
    accent: "from-violet-400/30 to-purple-500/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const categories = [
  {
    title: "Senior Dating",
    description: "Platforms tailored for 50+ singles.",
    href: "/dating/senior-dating-sites",
  },
  {
    title: "Mature Dating",
    description: "Meaningful connections for adults 40+.",
    href: "/dating/mature-dating-sites",
  },
  {
    title: "Christian Dating",
    description: "Faith-based matchmaking and values.",
    href: "/dating/christian-dating-sites",
  },
  {
    title: "Casual Dating",
    description: "Light-hearted connections and social dating.",
    href: "/dating/casual-dating-sites",
  },
  {
    title: "Gaybloom LGBTQ+ Dating",
    description: "Meet, chat, and connect with men in the LGBTQ+ community.",
    href: "/dating/gaybloom",
  },
];

const stats = [
  { value: "50+", label: "Dating guides" },
  { value: "2026", label: "Updated rankings" },
  { value: "Free", label: "Expert comparisons" },
];

const faqs = [
  {
    question: "What is the best dating site?",
    answer:
      "The best dating site depends on your goals, preferences, and location. Serious relationship seekers often prefer matchmaking-style platforms, while casual daters may prefer swipe-based apps.",
  },
  {
    question: "Are dating sites safe?",
    answer:
      "Reputable platforms offer privacy controls, profile verification, and reporting tools to help protect users. Always use trusted sites and follow basic online safety practices.",
  },
  {
    question: "Can I use dating apps for free?",
    answer:
      "Most dating platforms offer free registration and basic features. Premium subscriptions unlock advanced filters, unlimited messaging, and visibility boosts.",
  },
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function DatingPage() {
  return (
    <div className="overflow-hidden bg-ink text-white">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-4 py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.35),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-rose-500/30 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-600/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-pink-100 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
            </span>
            2026 Dating Rankings
          </span>

          <h1 className="hero-title mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Best Dating Sites &{" "}
            <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
              Apps
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Compare dating platforms, relationship apps, and online services —
            find the right match for serious love, casual fun, or niche communities.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dating/best-dating-sites-germany"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02] hover:shadow-pink-500/40"
            >
              Explore top picks
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#guides"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Browse guides
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="px-6 py-5">
                <p className="text-2xl font-bold text-pink-200">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured guides */}
      <section id="guides" className="relative px-4 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
              Editor&apos;s picks
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Popular Dating Guides
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              In-depth comparisons updated for 2026 — pick a guide and start comparing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredPages.map((page) => (
              <Link key={page.href} href={page.href} className="group block">
                <GlassCard className="relative h-full overflow-hidden p-6 transition duration-300 hover:border-pink-400/40 hover:bg-white/15 hover:shadow-[0_12px_40px_rgba(236,72,153,0.15)]">
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${page.accent} blur-2xl transition group-hover:scale-110`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-xl border border-white/20 bg-white/10 p-3 text-pink-300 backdrop-blur-sm">
                      {page.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-pink-100">
                      {page.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {page.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-pink-400 opacity-0 transition group-hover:opacity-100">
                      Read guide
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative px-4 py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(168,85,247,0.15),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
                By lifestyle
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                Browse By Category
              </h2>
            </div>
            <p className="max-w-md text-slate-400 md:text-right">
              Whether you want faith-based matching, mature companionship, or casual connections — we have a guide.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((category, i) => (
              <Link key={category.href} href={category.href} className="group block">
                <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl transition hover:border-white/30 hover:from-white/[0.12]">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/40 to-fuchsia-600/40 text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-400">{category.description}</p>
                  <span className="mt-4 text-sm font-medium text-pink-300 transition group-hover:text-pink-200">
                    View category →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <GlassCard className="border-white/20 bg-white/[0.06] p-8 md:p-12">
            <div className="mb-2 inline-flex rounded-lg bg-pink-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-300">
              Insights
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Why Online Dating Is More Popular Than Ever
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                Online dating has transformed the way people meet and build relationships.
                Millions of singles use dating websites and apps every day to connect with
                potential partners.
              </p>
              <p>
                Whether you are looking for a serious relationship, companionship, friendship,
                or casual dating, there are platforms designed specifically for your goals.
              </p>
              <p className="text-slate-400">
                At OffersMania, we research features, pricing, safety, and user experience so
                you can choose confidently — without hours of trial and error.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <GlassCard
                key={faq.question}
                className="p-6 md:p-8"
              >
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-sm font-bold text-pink-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 leading-relaxed text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-28 pt-8">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-pink-950/40 to-transparent" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-pink-600/30 via-rose-700/20 to-fuchsia-800/30 p-10 text-center shadow-[0_20px_60px_rgba(236,72,153,0.2)] backdrop-blur-2xl md:p-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-400/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Start Your Dating Journey Today
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-pink-100/90">
                Explore our top-rated dating platforms and find the best option for your
                relationship goals.
              </p>
              <Link
                href="/dating/best-dating-sites-germany"
                className="mt-8 inline-flex rounded-full border border-white/40 bg-white/95 px-10 py-4 font-semibold text-rose-700 shadow-xl transition hover:scale-[1.02] hover:bg-white"
              >
                Explore Dating Sites
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
