import type { Metadata } from "next";
import { Compass, HeartHandshake, LineChart } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About OffersMania",
  description:
    "OffersMania publishes independent comparisons of AI tools and software.",
};

const pillars = [
  {
    icon: Compass,
    title: "Clear rankings",
    text: "We structure reviews around goals — writing AI, privacy software, productivity — not generic top-10 lists.",
  },
  {
    icon: LineChart,
    title: "Features over slogans",
    text: "Pricing, safety, and usability sit next to the pitch so the trade-offs are visible.",
  },
  {
    icon: HeartHandshake,
    title: "Affiliate-aware",
    text: "Some outbound links are partnerships. Rankings are editorial; we disclose when a click may earn a commission.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ink text-white">
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <Container size="md" className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            About
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Helping you pick digital products without the noise.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            OffersMania is a comparison site for AI tools, software, and online
            offers. We research what ships, what it costs, and who it is
            actually for.
          </p>
        </Container>
      </section>

      <section className="border-t border-white/10 py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-2xl p-7">
                  <Icon className="h-5 w-5 text-violet-300" strokeWidth={1.75} />
                  <h2 className="font-display mt-4 text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="md" className="text-center">
          <h2 className="font-display text-3xl font-bold">Questions or a correction?</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            If a ranking looks off or a product has changed, we want to hear it.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Contact the team
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
