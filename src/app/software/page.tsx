import type { Metadata } from "next";
import { Workflow } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Best Software Reviews 2026",
  description:
    "Compare the best software, VPNs, antivirus tools and productivity applications.",
};

const softwareArticles = [
  {
    title: "Best VPN Services",
    description: "Privacy, speed, and streaming — compared without the hype.",
    href: "/software/best-vpn",
    category: "Privacy",
  },
  {
    title: "Best Antivirus Software",
    description: "Protect devices with tools that stay out of the way.",
    href: "/software/best-antivirus",
    category: "Security",
  },
  {
    title: "Best Password Managers",
    description: "Store credentials securely and share them with a team.",
    href: "/software/password-manager",
    category: "Identity",
  },
];

export default function SoftwarePage() {
  return (
    <div className="overflow-hidden bg-ink text-white">
      <section className="relative min-h-[78vh] px-4 py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.26),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <Container className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Badge pulse className="border-emerald-400/30 text-emerald-100">
            Software Reviews 2026
          </Badge>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Software that earns{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              a spot on your stack
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            VPNs, antivirus, password managers, and productivity apps —
            compared on security, usability, and value.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/software/best-vpn" variant="primary">
              Compare VPNs
            </Button>
            <Button href="/software/best-antivirus" variant="secondary">
              Browse security
            </Button>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24">
        <Container>
          <SectionHeading
            accent="software"
            eyebrow="Guides"
            title="Popular software articles"
            subtitle="Start with privacy and security — the tools most people get wrong."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {softwareArticles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
            <p className="text-sm leading-relaxed text-slate-400">
              Looking for a category we have not ranked yet?{" "}
              <a href="/contact" className="font-medium text-emerald-300 hover:text-emerald-200">
                Tell us what to review next
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
