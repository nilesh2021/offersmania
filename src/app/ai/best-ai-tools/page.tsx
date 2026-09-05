import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best AI Tools in 2026",
  description:
    "Discover the best AI tools for content creation, coding, design, marketing, and productivity.",
};

const tools = [
  {
    name: "ChatGPT",
    category: "Assistant",
    description: "General-purpose writing, coding, and research with a huge plugin ecosystem.",
  },
  {
    name: "Claude",
    category: "Assistant",
    description: "Strong long-context writing, document analysis, and careful reasoning.",
  },
  {
    name: "Gemini",
    category: "Assistant",
    description: "Google’s assistant with deep Search and Workspace integration.",
  },
  {
    name: "Midjourney",
    category: "Images",
    description: "High-quality generated artwork and campaign visuals.",
  },
  {
    name: "GitHub Copilot",
    category: "Coding",
    description: "Inline coding assistance inside the editor you already use.",
  },
  {
    name: "Perplexity",
    category: "Search",
    description: "Cited answers for research when you need sources, not vibes.",
  },
];

export default function BestAIToolsPage() {
  return (
    <GuideLayout
      accent="ai"
      eyebrow="AI Roundup · 2026"
      title="Best AI tools in 2026"
      subtitle="Assistants, image models, coding tools, and research — the stack most teams actually keep."
      related={[
        {
          title: "ChatGPT vs Gemini vs Claude",
          description: "Head-to-head on writing and reasoning.",
          href: "/ai/chatgpt-vs-gemini-vs-claude",
          category: "Comparison",
        },
        {
          title: "Best AI Writing Tools",
          description: "Draft blogs, SEO, and email faster.",
          href: "/ai/best-ai-writing-tools",
          category: "Writing",
        },
        {
          title: "Best AI Image Generators",
          description: "Visual models for campaigns and product.",
          href: "/ai/best-ai-image-generators",
          category: "Images",
        },
      ]}
    >
      <p>
        AI tools are no longer a novelty tab. They sit in writing, design,
        support, and engineering workflows. The useful question is not “which
        model is smartest” — it is which one matches the job, the budget, and
        the data you can actually share with it.
      </p>
      <p>
        Use this roundup as a shortlist. Then open a comparison guide for the
        category you care about.
      </p>

      <h2 className="font-display pt-4 text-2xl font-semibold text-white">
        Top tools
      </h2>
      <div className="grid gap-4 pt-2 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.name} className="p-5">
            <span className="inline-flex rounded-full border border-[#4f00ca]/25 bg-[#4f00ca]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
              {tool.category}
            </span>
            <h3 className="font-display mt-3 text-xl font-semibold text-white">
              {tool.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {tool.description}
            </p>
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
