 import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools in 2026 | OffersMania",
  description:
    "Discover the best AI tools for content creation, coding, design, marketing, and productivity.",
};

const tools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    description:
      "Generate content, code, ideas, and research faster.",
  },
  {
    name: "Claude",
    category: "AI Assistant",
    description:
      "Excellent for long-form writing and document analysis.",
  },
  {
    name: "Gemini",
    category: "AI Assistant",
    description:
      "Google's AI platform with deep search integration.",
  },
  {
    name: "Midjourney",
    category: "AI Image Generator",
    description:
      "Create high-quality AI-generated artwork and visuals.",
  },
  {
    name: "GitHub Copilot",
    category: "Coding Assistant",
    description:
      "Accelerate software development with AI-powered coding.",
  },
  {
    name: "Perplexity",
    category: "AI Search",
    description:
      "Research topics quickly with cited answers.",
  },
];

export default function BestAIToolsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Best AI Tools in 2026
          </h1>

          <p className="text-lg text-slate-300">
            Explore the top AI tools for writing,
            coding, image generation, research,
            and productivity.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-4 text-3xl font-bold">
          Why AI Tools Matter
        </h2>

        <p className="mb-4 text-slate-700">
          Artificial Intelligence tools are helping
          businesses and individuals automate tasks,
          improve productivity, and generate content
          faster than ever before.
        </p>

        <p className="text-slate-700">
          Whether you are a marketer, developer,
          designer, student, or entrepreneur, AI
          software can help save time and increase
          efficiency.
        </p>
      </section>

      {/* Tool Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Top AI Tools
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border p-6 shadow-sm"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {tool.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {tool.name}
              </h3>

              <p className="mt-3 text-slate-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold">
            Related Articles
          </h2>

          <div className="space-y-4">
            <Link
              href="/ai/chatgpt-vs-gemini-vs-claude"
              className="block rounded-lg border bg-white p-4 hover:shadow"
            >
              ChatGPT vs Gemini vs Claude
            </Link>

            <Link
              href="/ai/best-ai-writing-tools"
              className="block rounded-lg border bg-white p-4 hover:shadow"
            >
              Best AI Writing Tools
            </Link>

            <Link
              href="/ai/best-ai-image-generators"
              className="block rounded-lg border bg-white p-4 hover:shadow"
            >
              Best AI Image Generators
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}