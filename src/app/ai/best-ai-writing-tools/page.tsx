import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best AI Writing Tools",
  description:
    "Compare AI writing tools for blogs, SEO content, emails, and marketing copy.",
};

const tools = [
  {
    name: "ChatGPT",
    bestFor: "Drafts and rewrites",
    note: "Flexible tone control and strong editing loops.",
  },
  {
    name: "Claude",
    bestFor: "Long-form articles",
    note: "Holds structure across long briefs and source docs.",
  },
  {
    name: "Jasper",
    bestFor: "Marketing teams",
    note: "Brand voice, campaigns, and collaboration features.",
  },
  {
    name: "Copy.ai",
    bestFor: "Short copy",
    note: "Ads, landing snippets, and social variants at speed.",
  },
];

export default function BestAIWritingTools() {
  return (
    <GuideLayout
      accent="ai"
      eyebrow="Writing"
      title="Best AI writing tools"
      subtitle="From blank-page drafts to SEO briefs — tools that help you ship copy, not just chat."
      related={[
        {
          title: "Best AI Tools in 2026",
          description: "See writing tools next to the rest of the stack.",
          href: "/ai/best-ai-tools",
          category: "Roundup",
        },
        {
          title: "ChatGPT vs Gemini vs Claude",
          description: "Which general assistant writes best?",
          href: "/ai/chatgpt-vs-gemini-vs-claude",
          category: "Comparison",
        },
      ]}
    >
      <p>
        Dedicated writing tools add templates, brand voice, and team workflows
        on top of a model. General assistants are often enough if you already
        have a process. Teams that publish weekly usually want the extra
        structure.
      </p>
      <div className="grid gap-4 pt-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.name} className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {tool.bestFor}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">
              {tool.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{tool.note}</p>
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
