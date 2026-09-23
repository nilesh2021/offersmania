import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Globe, KeyRound, Shield, Workflow } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Best Software Reviews 2026",
  description:
    "Compare the best software, VPNs, antivirus tools and productivity applications.",
};

const softwareArticles: {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: LucideIcon;
  accent: string;
}[] = [
  {
    title: "Best VPN Services",
    description: "Privacy, speed, and streaming — compared without the hype.",
    href: "/software/best-vpn",
    category: "Privacy",
    icon: Globe,
    accent: "from-[#7b3dff]/35 to-[#4f00ca]/20",
  },
  {
    title: "Best Antivirus Software",
    description: "Protect devices with tools that stay out of the way.",
    href: "/software/best-antivirus",
    category: "Security",
    icon: Shield,
    accent: "from-[#9b6dff]/30 to-[#4f00ca]/25",
  },
  {
    title: "Best Password Managers",
    description: "Store credentials securely and share them with a team.",
    href: "/software/password-manager",
    category: "Identity",
    icon: KeyRound,
    accent: "from-[#7b3dff]/30 to-[#9b6dff]/20",
  },
];

export default function SoftwarePage() {
  return (
    <div className="overflow-hidden bg-ink text-white">
      <section className="relative min-h-[78vh] px-4 py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,0,202,0.28),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <Container className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Badge pulse className="border-[var(--accent)]/30 text-brand">
            Software Reviews 2026
          </Badge>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Software that earns{" "}
            <span className="bg-gradient-to-r from-[#4f00ca] via-[#7b3dff] to-[#9b6dff] bg-clip-text text-transparent">
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
          <div className="grid gap-6 md:grid-cols-3">
            {softwareArticles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block h-full"
                >
                  <article
                    className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#4f00ca]/40 hover:bg-white/[0.14] hover:shadow-[0_12px_40px_rgba(79,0,202,0.18)]"
                  >
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${article.accent} blur-2xl transition group-hover:scale-110`}
                      aria-hidden
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div className="inline-flex rounded-xl border border-white/20 bg-white/10 p-3 text-brand backdrop-blur-sm">
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white group-hover:text-brand">
                        {article.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                        {article.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Read guide
                        <svg
                          className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-slate-400">
              Looking for a category we have not ranked yet?{" "}
              <a href="/contact" className="font-medium text-brand hover:opacity-80">
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
