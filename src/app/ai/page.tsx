import type { Metadata } from "next";
import { Code2, GraduationCap } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Best AI Tools & Reviews 2026",
  description:
    "Discover the best AI tools, ChatGPT alternatives, AI writing software, image generators, and productivity tools.",
};

const aiArticles = [
  {
    title: "Best AI Tools in 2026",
    description:
      "Top AI tools for content, coding, marketing, and everyday productivity.",
    href: "/ai/best-ai-tools",
    category: "Roundup",
  },
  {
    title: "ChatGPT vs Gemini vs Claude",
    description:
      "How the leading assistants compare on writing, reasoning, and research.",
    href: "/ai/chatgpt-vs-gemini-vs-claude",
    category: "Comparison",
  },
  {
    title: "Best AI Writing Tools",
    description:
      "Draft blogs, SEO copy, and emails without starting from a blank page.",
    href: "/ai/best-ai-writing-tools",
    category: "Writing",
  },
  {
    title: "Best AI Image Generators",
    description:
      "Visual models for designers, marketers, and content teams.",
    href: "/ai/best-ai-image-generators",
    category: "Images",
  },
];

export default function AIPage() {
  return (
    <div className="overflow-hidden bg-ink text-white">
      <section className="relative min-h-[78vh] px-4 py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.28),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]"
          aria-hidden
        />

        <Container className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Badge pulse className="border-cyan-400/30 text-cyan-100">
            AI Rankings 2026
          </Badge>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Best AI tools &{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              reviews
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Assistants, writing software, image models, and coding tools —
            compared so you spend less time testing and more time shipping.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/ai/best-ai-tools" variant="primary">
              See top tools
            </Button>
            <Button href="/ai/chatgpt-vs-gemini-vs-claude" variant="secondary">
              Compare assistants
            </Button>
          </div>
        </Container>
      </section>

      <section className="px-4 pb-20">
        <Container>
          <SectionHeading
            accent="ai"
            eyebrow="Guides"
            title="Popular AI articles"
            subtitle="Start with a roundup or jump into a head-to-head."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aiArticles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 pb-24">
        <Container size="md">
          <Card className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Why it matters
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Why use AI tools?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                AI tools now sit in the workflow for writing, design, research,
                and software. The right stack cuts busywork without replacing
                judgment.
              </p>
              <p>
                Students, marketers, developers, and operators all need
                different strengths — speed, citations, visuals, or code.
              </p>
              <p className="text-slate-400">
                OffersMania compares leading options so you can match a tool to
                the job, not the launch-week hype.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Code2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="font-medium">Builders</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Coding assistants and research models.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <GraduationCap className="mt-0.5 h-5 w-5 text-violet-300" />
                <div>
                  <p className="font-medium">Learners</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Study, outline, and research helpers.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
