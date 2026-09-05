import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best AI Image Generators",
  description:
    "Compare AI image generators for designers, marketers, and content creators.",
};

const tools = [
  {
    name: "Midjourney",
    bestFor: "Art direction",
    note: "Still the look most brands mean when they say “AI aesthetic.”",
  },
  {
    name: "DALL·E",
    bestFor: "Chat-native images",
    note: "Convenient if you already live in ChatGPT.",
  },
  {
    name: "Adobe Firefly",
    bestFor: "Commercial safety",
    note: "Trained for Creative Cloud workflows and licensing clarity.",
  },
  {
    name: "Flux / open models",
    bestFor: "Control & cost",
    note: "More knobs, more setup — strong for product teams.",
  },
];

export default function BestAIImageGenerators() {
  return (
    <GuideLayout
      accent="ai"
      eyebrow="Images"
      title="Best AI image generators"
      subtitle="Pick a model for moodboards, ads, or product shots — not all generators are interchangeable."
      related={[
        {
          title: "Best AI Tools in 2026",
          description: "Image models in the wider AI stack.",
          href: "/ai/best-ai-tools",
          category: "Roundup",
        },
        {
          title: "Best AI Writing Tools",
          description: "Pair visuals with copy workflows.",
          href: "/ai/best-ai-writing-tools",
          category: "Writing",
        },
      ]}
    >
      <p>
        Image models differ on style, prompt control, commercial terms, and how
        well they keep a character or product consistent across shots. Start
        with the output you need (campaign art vs. UI mock vs. photo-real) and
        work backwards.
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
