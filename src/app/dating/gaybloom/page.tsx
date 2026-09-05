import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import SectionHeading from "@/components/ui/SectionHeading";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gaybloom Review 2026 | LGBTQ+ Dating for Men | OffersMania",
  description:
    "Gaybloom is a dating platform for men in the LGBTQ+ community. Meet, chat, and explore new connections online with a welcoming, inclusive experience.",
};

const glassCard =
  "rounded-3xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl";

const features = [
  {
    title: "Built for LGBTQ+ men",
    description:
      "A space designed for gay, bi, and queer men who want authentic connections without mainstream noise.",
    icon: "🏳️‍🌈",
  },
  {
    title: "Chat & match",
    description:
      "Message matches in real time, break the ice, and move from hello to meaningful conversation.",
    icon: "💬",
  },
  {
    title: "Explore connections",
    description:
      "Browse profiles, discover shared interests, and find dates, friends, or something in between.",
    icon: "✨",
  },
  {
    title: "Mobile-friendly",
    description:
      "Stay connected on the go with a smooth experience on phone and desktop browsers.",
    icon: "📱",
  },
];

const pros = [
  "Inclusive community for LGBTQ+ men",
  "Quick registration and profile setup",
  "Private messaging and discovery tools",
  "Designed for casual and social dating",
];

const cons = [
  "Premium features may require a paid plan",
  "Member activity varies by region",
];

const steps = [
  {
    step: "01",
    title: "Create your profile",
    text: "Sign up, add photos, and share what you are looking for — dates, chat, or new friends.",
  },
  {
    step: "02",
    title: "Discover members",
    text: "Browse profiles, use filters, and find people nearby or across your area.",
  },
  {
    step: "03",
    title: "Start chatting",
    text: "Send messages, build rapport, and take connections offline when you are ready.",
  },
];

const faqs = [
  {
    question: "What is Gaybloom?",
    answer:
      "Gaybloom is an online dating platform designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a welcoming environment.",
  },
  {
    question: "Who is Gaybloom for?",
    answer:
      "Gaybloom is aimed at gay, bisexual, and queer men looking for dating, conversation, friendship, or casual social connections online.",
  },
  {
    question: "Is Gaybloom free to join?",
    answer:
      "Most users can register and explore basic features for free. Premium options may unlock advanced messaging, visibility, and matching tools.",
  },
  {
    question: "Is Gaybloom safe to use?",
    answer:
      "Use strong passwords, keep personal details private until you trust someone, and report suspicious profiles. Reputable platforms offer moderation and privacy controls.",
  },
  {
    question: "Can I use Gaybloom on my phone?",
    answer:
      "Yes. Gaybloom works in mobile browsers and is built for on-the-go messaging and profile browsing.",
  },
];

const schema = faqSchema(faqs);

export default function GaybloomPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Script
        id="gaybloom-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#4f00ca]/25 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#4f00ca]/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1)_0%,_transparent_55%)]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className={`${glassCard} mx-auto inline-flex items-center gap-2.5 px-5 py-2.5`}
          >
            <span className="text-lg">🏳️‍🌈</span>
            <span className="text-sm font-medium tracking-wide text-white/90">
              LGBTQ+ Dating · 2026
            </span>
          </div>

          <h1 className="hero-title mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-[#7b3dff] via-[#9b6dff] to-[#c4b5fd] bg-clip-text text-transparent">
              Gaybloom
            </span>
            <span className="mt-2 block text-white">
              Dating for Men
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            Gaybloom is a dating platform designed for men in the LGBTQ+
            community who want to meet, chat, and explore new connections
            online — whether you are dating, socializing, or just seeing who is
            out there.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/go/gaybloom"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-8 py-4 font-semibold shadow-lg shadow-[0_8px_24px_rgba(79,0,202,0.25)] transition hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(79,0,202,0.4)]"
            >
              Join Gaybloom
            </Link>
            <a
              href="#features"
              className={`${glassCard} px-8 py-4 font-semibold transition hover:border-white/30 hover:bg-white/15`}
            >
              See Features
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { value: "LGBTQ+", label: "Inclusive community" },
              { value: "Chat", label: "Real-time messaging" },
              { value: "2026", label: "Updated review" },
            ].map((stat) => (
              <div key={stat.label} className={`${glassCard} px-5 py-4`}>
                <p className="text-xl font-bold text-brand">{stat.value}</p>
                <p className="mt-0.5 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-12">
        <div className={`${glassCard} mx-auto max-w-5xl p-6 md:p-10`}>
          <SectionHeading
            align="left"
            eyebrow="Overview"
            title="Meet, Chat & Connect Online"
          />
          <div className="-mt-4 space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
            <p>
              Online dating has made it easier for LGBTQ+ men to find
              like-minded people, start conversations, and build connections on
              their own terms. Gaybloom focuses on that experience — a
              platform where you can explore profiles, send messages, and meet
              new people without the friction of generic apps.
            </p>
            <p>
              Whether you want casual dating, friendship, or simply to expand
              your social circle, Gaybloom puts discovery and chat at the center
              of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Platform"
            title="Why Choose Gaybloom?"
            subtitle="What makes this platform stand out for LGBTQ+ men"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${glassCard} p-5 transition hover:border-white/30 hover:bg-white/[0.12]`}
              >
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="mt-3 font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="How it works"
            title="Get Started in Three Steps"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className={`${glassCard} p-5`}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f00ca]/40 to-[#7b3dff]/40 text-xs font-bold">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Review"
            title="Gaybloom at a Glance"
            subtitle="Our quick take on the platform"
          />

          <article className={`${glassCard} relative overflow-hidden p-5 md:p-6`}>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#4f00ca]/20 to-[#7b3dff]/20 blur-2xl" />

            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f00ca] to-[#7b3dff] text-sm font-bold">
                  ★
                </span>
                <div>
                  <h3 className="text-lg font-bold md:text-xl">Gaybloom</h3>
                  <p className="text-xs text-slate-400">LGBTQ+ men · Online dating</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-brand">
                9.2/10
              </span>
            </div>

            <p className="relative mt-3 text-sm leading-snug text-slate-400">
              A focused option for gay and queer men who prioritize chat,
              discovery, and an inclusive community over one-size-fits-all dating
              apps.
            </p>

            <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                <h4 className="mb-2 text-sm font-semibold text-brand">Pros</h4>
                <ul className="space-y-1">
                  {pros.map((pro) => (
                    <li key={pro} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-rose-400/20 bg-rose-500/5 p-4">
                <h4 className="mb-2 text-sm font-semibold text-rose-300">Cons</h4>
                <ul className="space-y-1">
                  {cons.map((con) => (
                    <li key={con} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-rose-400">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/go/gaybloom"
              className="relative mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] px-5 py-2.5 text-sm font-semibold shadow-md shadow-[0_8px_24px_rgba(79,0,202,0.2)] transition hover:scale-[1.02]"
            >
              Visit Gaybloom
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about Gaybloom"
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={`${glassCard} group overflow-hidden transition hover:border-white/30`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-white/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Explore"
            title="More Dating Guides"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: "/dating", title: "All Dating Guides", emoji: "💕" },
              {
                href: "/dating/casual-dating-sites",
                title: "Casual Dating Sites",
                emoji: "✨",
              },
              {
                href: "/dating/local-dating-sites",
                title: "Local Dating Sites",
                emoji: "📍",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`${glassCard} group p-5 transition hover:border-white/30 hover:bg-white/15`}
              >
                <span className="text-2xl">{guide.emoji}</span>
                <span className="mt-3 block font-semibold group-hover:text-brand">
                  {guide.title}
                </span>
                <span className="mt-1 text-sm text-slate-400">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div
          className={`${glassCard} relative mx-auto max-w-4xl overflow-hidden p-8 text-center md:p-12`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4f00ca]/10 via-transparent to-[#7b3dff]/10" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Meet Someone New?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-300">
              Join Gaybloom and start chatting with men in the LGBTQ+ community
              today. Free registration available.
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-brand">
              <span>●</span>
              <span>Quick sign-up · Inclusive community</span>
            </p>
            <Link
              href="/go/gaybloom"
              className="mt-6 inline-flex rounded-2xl border border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-xl transition hover:scale-[1.03] hover:bg-white/20"
            >
              Join Gaybloom Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
