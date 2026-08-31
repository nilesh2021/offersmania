import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import {
  Check,
  ChevronDown,
  Globe,
  MonitorSmartphone,
  Shield,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqSchema } from "@/lib/schema";

const AVAST_AFFILIATE_URL =
  "https://example.com/avast-affiliate?aff_sub=offersmania";

export const metadata: Metadata = {
  title: "Avast Antivirus Offers — Compare Plans & Protection",
  description:
    "Explore Avast Free Antivirus, Premium Security, and Ultimate. Compare features side by side and check current partner offers.",
};

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

const plans = [
  {
    name: "Avast Free Antivirus",
    bestFor: "Essential baseline",
    note: "Core antivirus protection for everyday browsing and downloads.",
    placement: "avast_offers_free_cta",
    highlights: ["Real-time antivirus", "Basic web protection", "Windows, Mac, mobile"],
  },
  {
    name: "Avast Premium Security",
    bestFor: "Most popular",
    note: "Adds stronger web, ransomware, and multi-device-oriented protections.",
    placement: "avast_offers_premium_cta",
    featured: true,
    highlights: [
      "Full web & ransomware shield",
      "Wi-Fi inspector",
      "Multi-device coverage",
    ],
  },
  {
    name: "Avast Ultimate",
    bestFor: "Full suite",
    note: "Bundles premium security with extra privacy and identity-focused tools.",
    placement: "avast_offers_ultimate_cta",
    highlights: [
      "Everything in Premium",
      "VPN & cleanup tools",
      "Identity protection extras",
    ],
  },
];

const comparisonRows = [
  { feature: "Real-time antivirus", free: "Yes", premium: "Yes", ultimate: "Yes" },
  { feature: "Web protection", free: "Basic", premium: "Yes", ultimate: "Yes" },
  { feature: "Ransomware protection", free: "Limited", premium: "Yes", ultimate: "Yes" },
  { feature: "Wi-Fi / network tools", free: "Limited", premium: "Yes", ultimate: "Yes" },
  { feature: "Extra privacy tools", free: "No", premium: "Limited", ultimate: "Yes" },
];

const steps = [
  {
    step: "01",
    title: "Compare plans",
    text: "Review Free, Premium Security, and Ultimate to see which protection level fits your devices.",
  },
  {
    step: "02",
    title: "Check offers",
    text: "Open the partner offers page to see the current Avast options available to you.",
  },
  {
    step: "03",
    title: "Choose protection",
    text: "Pick the plan that matches your needs and complete setup on the official offer page.",
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
  variant = "accent",
  size = "lg",
  className = "",
}: {
  placement: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div data-offer-name="Avast" data-cta-placement={placement}>
      <Button
        href={AVAST_AFFILIATE_URL}
        external
        variant={variant}
        size={size}
        className={className}
      >
        {children}
      </Button>
    </div>
  );
}

export default function AvastOffersPage() {
  return (
    <div className="bg-ink text-fg">
      <Script
        id="avast-offers-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge pulse>Security · Avast</Badge>
            <h1 className="font-display mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Avast Antivirus offers
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Compare Free, Premium Security, and Ultimate — then open current
              partner offers to pick the right protection for your devices.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AvastCta placement="avast_offers_hero_cta" />
              <Button href="/software/best-antivirus" variant="secondary" size="lg">
                All antivirus guides
              </Button>
            </div>
            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            accent="software"
            eyebrow="Protection"
            title="Why consider Avast?"
            subtitle="Core security layers for everyday browsing, downloads, and network use."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {features.map(({ name, note, Icon }) => (
              <Card key={name} className="flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
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
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="border-y border-line bg-[var(--page-soft)] py-16 md:py-20">
        <Container>
          <SectionHeading
            accent="software"
            eyebrow="Plans"
            title="Pick your Avast plan"
            subtitle="Start free or step up when you need broader coverage."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col p-6 ${
                  plan.featured
                    ? "ring-2 ring-emerald-400/40"
                    : ""
                }`}
              >
                {plan.featured && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    Recommended
                  </p>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/80">
                  {plan.bestFor}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {plan.note}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <AvastCta
                    placement={plan.placement}
                    variant={plan.featured ? "accent" : "secondary"}
                    size="md"
                    className="w-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            accent="software"
            title="Feature comparison"
            subtitle="A quick look at what each tier includes."
          />
          <div className="hidden overflow-hidden rounded-2xl border border-line md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-[var(--card)] text-left text-xs font-semibold uppercase tracking-wider text-muted">
                  <th className="p-5">Feature</th>
                  <th className="p-5">Free</th>
                  <th className="p-5">Premium Security</th>
                  <th className="p-5">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i < comparisonRows.length - 1
                        ? "border-b border-line"
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
          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <Card key={row.feature} className="p-5">
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
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works + devices */}
      <section className="border-t border-line bg-[var(--page-soft)] py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                accent="software"
                align="left"
                eyebrow="Process"
                title="How it works"
                subtitle="Three steps from comparison to protection."
              />
              <div className="space-y-4">
                {steps.map(({ step, title, text }) => (
                  <Card key={step} className="flex gap-4 p-5">
                    <span className="font-display text-2xl font-bold text-emerald-400/60">
                      {step}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {text}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                accent="software"
                align="left"
                eyebrow="Platforms"
                title="Device support"
                subtitle="Protection options across major platforms."
              />
              <div className="grid grid-cols-2 gap-4">
                {devices.map(({ name, Icon }) => (
                  <Card key={name} className="p-5 text-center">
                    <Icon className="mx-auto h-6 w-6 text-emerald-300" />
                    <p className="font-display mt-3 font-semibold text-white">
                      {name}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <Container size="md">
          <Card className="px-6 py-12 text-center md:px-12">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Ready to compare Avast offers?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Open the current offers page and choose the plan that fits your
              devices.
            </p>
            <div className="mt-8 flex justify-center">
              <AvastCta placement="avast_offers_final_cta" />
            </div>
          </Card>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-16 md:py-20">
        <Container size="md">
          <SectionHeading
            accent="software"
            title="Frequently asked questions"
          />
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-medium text-slate-200 md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition group-open:rotate-180">
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

      {/* Disclosure */}
      <section className="border-t border-line py-10">
        <Container size="md">
          <p className="text-sm leading-relaxed text-muted">
            Affiliate disclosure: Some links on this page are sponsored or
            affiliate links. We may be paid if you register or purchase after
            clicking. This helps fund the site. See our{" "}
            <a href="/disclaimer" className="font-medium text-emerald-300 hover:underline">
              disclaimer
            </a>{" "}
            for more details.
          </p>
        </Container>
      </section>
    </div>
  );
}
