import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import {
  ChevronDown,
  Globe,
  MonitorSmartphone,
  Shield,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { faqSchema } from "@/lib/schema";

const AVAST_AFFILIATE_URL =
  "https://example.com/avast-affiliate?aff_sub=offersmania";

export const metadata: Metadata = {
  title: "Avast Antivirus: Plans, Features & Offers",
  description:
    "Compare Avast Antivirus plans, features and protection options. Explore Avast Free Antivirus, Premium Security and Ultimate and check available offers.",
};

const ctaClass =
  "stay-white inline-flex items-center justify-center rounded-lg bg-[#1a73e8] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-[#1557b0]";

const cardClass =
  "rounded-xl border border-white/10 bg-[#0f2133] p-6 md:p-7";

const features = [
  {
    name: "Malware protection",
    note: "Real-time scanning to help block viruses, spyware, and other common threats.",
    Icon: Shield,
  },
  {
    name: "Web protection",
    note: "Helps warn about suspicious sites and risky downloads while you browse.",
    Icon: Globe,
  },
  {
    name: "Ransomware protection",
    note: "Extra safeguards aimed at blocking unauthorized encryption of your files.",
    Icon: ShieldCheck,
  },
  {
    name: "Wi-Fi security",
    note: "Tools that help you spot unsafe networks and harden everyday connections.",
    Icon: Wifi,
  },
];

const steps = [
  {
    title: "Step 1: Compare plans",
    text: "Review Free, Premium Security, and Ultimate to see which protection level fits your devices.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Step 2: Check offers",
    text: "Open the partner offers page to see the current Avast options available to you.",
    Icon: Globe,
  },
  {
    title: "Step 3: Choose protection",
    text: "Pick the plan that matches your needs and complete setup on the official offer page.",
    Icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Avast Free Antivirus",
    bestFor: "Essential baseline",
    note: "Core antivirus protection for everyday browsing and downloads.",
    placement: "avast_free_cta",
  },
  {
    name: "Avast Premium Security",
    bestFor: "Broader coverage",
    note: "Adds stronger web, ransomware, and multi-device-oriented protections.",
    placement: "avast_premium_cta",
  },
  {
    name: "Avast Ultimate",
    bestFor: "Full suite",
    note: "Bundles premium security with extra privacy and identity-focused tools.",
    placement: "avast_ultimate_cta",
  },
];

const comparisonRows = [
  { feature: "Real-time antivirus", free: "Yes", premium: "Yes", ultimate: "Yes" },
  { feature: "Web protection", free: "Basic", premium: "Yes", ultimate: "Yes" },
  { feature: "Ransomware protection", free: "Limited", premium: "Yes", ultimate: "Yes" },
  { feature: "Wi-Fi / network tools", free: "Limited", premium: "Yes", ultimate: "Yes" },
  { feature: "Extra privacy tools", free: "No", premium: "Limited", ultimate: "Yes" },
];

const highlights = [
  {
    title: "Free and paid options",
    text: "Start with essential protection or move up when you need broader coverage.",
  },
  {
    title: "Clear plan ladder",
    text: "Free, Premium Security, and Ultimate make it easier to match features to your use.",
  },
  {
    title: "Cross-device support",
    text: "Protection options for Windows, Mac, Android, and iPhone/iPad.",
  },
  {
    title: "Everyday security focus",
    text: "Built around malware, web, ransomware, and network-minded protections.",
  },
];

const devices = [
  { name: "Windows", Icon: MonitorSmartphone },
  { name: "Mac", Icon: MonitorSmartphone },
  { name: "Android", Icon: Smartphone },
  { name: "iPhone/iPad", Icon: Smartphone },
];

const faqs = [
  {
    question: "Is Avast Free Antivirus enough for basic use?",
    answer:
      "For careful everyday browsing, Avast Free Antivirus can cover core malware protection. If you want stronger web, ransomware, or multi-device tools, Premium Security or Ultimate may fit better.",
  },
  {
    question: "What is the difference between Premium Security and Ultimate?",
    answer:
      "Premium Security focuses on stronger device and online protection. Ultimate builds on that with additional privacy and identity-oriented tools in one suite.",
  },
  {
    question: "Does Avast work on mobile devices?",
    answer:
      "Avast offers protection options for Android and iPhone/iPad in addition to Windows and Mac. Availability of specific features can vary by platform and plan.",
  },
  {
    question: "Can I use Avast alongside another antivirus?",
    answer:
      "Running two full real-time antivirus products at once is usually not recommended. Choose one primary suite to avoid conflicts and unnecessary system load.",
  },
  {
    question: "Where can I see current Avast offers?",
    answer:
      "Use the View Avast Offers links on this page to open the current partner offers page and compare the plans available to you.",
  },
];

const schema = faqSchema(faqs);

function AvastCta({
  placement,
  children = "View Avast Offers",
  className = "",
}: {
  placement: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div data-offer-name="Avast" data-cta-placement={placement}>
      <a
        href={AVAST_AFFILIATE_URL}
        rel="nofollow sponsored"
        className={`${ctaClass} ${className}`}
      >
        {children}
      </a>
    </div>
  );
}

export default function AvastAntivirusPage() {
  return (
    <div className="bg-[#0a1628] text-white">
      <Script
        id="avast-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,115,232,0.22),transparent_60%),linear-gradient(180deg,#0b1c30_0%,#0a1628_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        <Container className="relative z-10 flex min-h-[58vh] flex-col items-center justify-center px-4 py-24 text-center md:py-28">
          <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Avast Antivirus
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Compare Avast antivirus options and find the right protection for
            your devices.
          </p>
          <div className="mt-9">
            <AvastCta placement="avast_hero_cta" />
          </div>
        </Container>
      </section>

      {/* Key protection features — 2x2 like reference */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Why choose Avast Antivirus?
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map(({ name, note, Icon }) => (
              <div key={name} className={`${cardClass} flex gap-4`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff6a00]/15 text-[#ff6a00]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works — 3 columns */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            How does it work?
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ title, text, Icon }) => (
              <div key={title} className={`${cardClass} text-center`}>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a00]/10 text-[#ff6a00]">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Avast plans comparison
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            A simple look at Free, Premium Security, and Ultimate.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`${cardClass} flex flex-col`}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ff6a00]">
                  {plan.bestFor}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {plan.note}
                </p>
                <div className="mt-6">
                  <AvastCta
                    placement={plan.placement}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature comparison table */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Simple feature comparison
          </h2>
          <div className="mt-10 hidden overflow-hidden rounded-xl border border-white/10 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0f2133] text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="p-5">Feature</th>
                  <th className="p-5">Free</th>
                  <th className="p-5">Premium Security</th>
                  <th className="p-5">Ultimate</th>
                </tr>
              </thead>
              <tbody className="bg-[#0b1c30]/60">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i < comparisonRows.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }
                  >
                    <td className="p-5 font-medium text-white">{row.feature}</td>
                    <td className="p-5 text-slate-300">{row.free}</td>
                    <td className="p-5 text-slate-300">{row.premium}</td>
                    <td className="p-5 text-slate-300">{row.ultimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.feature} className={cardClass}>
                <h3 className="font-semibold text-white">{row.feature}</h3>
                <dl className="mt-3 space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between gap-4">
                    <dt>Free</dt>
                    <dd className="text-slate-300">{row.free}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Premium Security</dt>
                    <dd className="text-slate-300">{row.premium}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Ultimate</dt>
                    <dd className="text-slate-300">{row.ultimate}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's special — qualitative, no invented stats */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            What&apos;s special about Avast?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            A practical security brand with free and paid plans, so you can
            start simple and expand protection when you need it.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6a00]/15 text-[#ff6a00]">
                  <Shield className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#ff6a00]/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Device support */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Device support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Avast offers protection options across major platforms.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {devices.map(({ name, Icon }) => (
              <div key={name} className={`${cardClass} text-center`}>
                <Icon className="mx-auto h-6 w-6 text-[#ff6a00]" />
                <p className="font-display mt-3 text-lg font-semibold text-white">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA band */}
      <section className="px-4 py-16 md:py-20">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-[#0f2133] px-6 py-14 text-center md:px-12">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Ready to compare Avast offers?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Open the current offers page and choose the plan that fits your
              devices.
            </p>
            <div className="mt-8 flex justify-center">
              <AvastCta placement="avast_final_cta" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ accordion */}
      <section className="px-4 py-16 md:py-20">
        <Container size="md">
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-medium text-slate-200 md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-slate-300 transition group-open:rotate-180">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </summary>
                <p className="pb-5 pr-12 text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Affiliate disclosure */}
      <section className="border-t border-white/10 px-4 py-10">
        <Container size="md">
          <p className="text-sm leading-relaxed text-slate-500">
            Affiliate disclosure: Some links on this page are sponsored or
            affiliate links. We may be paid if you register or purchase after
            clicking. This helps fund the site. See our{" "}
            <a
              href="/disclaimer"
              className="font-medium text-[#1a73e8] hover:underline"
            >
              disclaimer
            </a>{" "}
            for more details.
          </p>
        </Container>
      </section>
    </div>
  );
}
