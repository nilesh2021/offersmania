import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools & Reviews 2026 | OffersMania",
  description:
    "Discover the best AI tools, ChatGPT alternatives, AI writing software, image generators, and productivity tools.",
};

const aiArticles = [
  {
    title: "Best AI Tools in 2026",
    description:
      "Discover the top AI tools for content creation, coding, marketing, and productivity.",
    href: "/ai/best-ai-tools",
  },
  {
    title: "ChatGPT vs Gemini vs Claude",
    description:
      "Compare the most popular AI assistants and find the best option for your needs.",
    href: "/ai/chatgpt-vs-gemini-vs-claude",
  },
  {
    title: "Best AI Writing Tools",
    description:
      "Explore AI writing tools for blogs, SEO content, emails, and marketing copy.",
    href: "/ai/best-ai-writing-tools",
  },
  {
    title: "Best AI Image Generators",
    description:
      "Compare AI image generators for designers, marketers, and content creators.",
    href: "/ai/best-ai-image-generators",
  },
  {
    title: "Best AI Coding Assistants",
    description:
      "Discover AI coding tools that help developers build applications faster.",
    href: "/ai/best-ai-coding-assistants",
  },
  {
    title: "Best AI Tools for Students",
    description:
      "Learn how students can use AI tools for studying, research, and productivity.",
    href: "/ai/best-ai-tools-for-students",
  },
];

export default function AIPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Best AI Tools & Reviews
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Explore the latest AI tools, software reviews,
            comparisons, and productivity solutions to help
            you work smarter and faster.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Popular AI Articles
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold">
                {article.title}
              </h3>

              <p className="text-slate-600">
                {article.description}
              </p>

              <span className="mt-4 inline-block font-medium text-blue-600">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold">
            Why Use AI Tools?
          </h2>

          <p className="mb-4 text-lg text-slate-700">
            Artificial Intelligence tools are transforming
            how people write content, generate images,
            develop software, conduct research, and manage
            everyday tasks.
          </p>

          <p className="mb-4 text-lg text-slate-700">
            Whether you are a student, blogger, marketer,
            designer, or business owner, AI tools can help
            increase productivity and save valuable time.
          </p>

          <p className="text-lg text-slate-700">
            At OffersMania, we review and compare leading
            AI solutions so you can choose the right tool
            for your needs.
          </p>
        </div>
      </section>
    </main>
  );
}