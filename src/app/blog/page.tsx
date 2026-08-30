import type { Metadata } from "next";

import ArticleCard from "@/components/ui/ArticleCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Guides & Reviews",
  description:
    "Editorial comparisons of AI tools and software from OffersMania.",
};

const posts = [
  {
    title: "Best AI Tools in 2026",
    description: "Assistants, image models, and coding tools in one roundup.",
    href: "/ai/best-ai-tools",
    category: "AI",
  },
  {
    title: "ChatGPT vs Gemini vs Claude",
    description: "Head-to-head on writing, research, and reasoning.",
    href: "/ai/chatgpt-vs-gemini-vs-claude",
    category: "AI",
  },
  {
    title: "Best AI Writing Tools",
    description: "Draft faster for blogs, SEO, and email.",
    href: "/ai/best-ai-writing-tools",
    category: "AI",
  },
  {
    title: "Best AI Image Generators",
    description: "Visual models for campaigns and product work.",
    href: "/ai/best-ai-image-generators",
    category: "AI",
  },
  {
    title: "Best VPN Services",
    description: "Privacy and streaming VPNs compared.",
    href: "/software/best-vpn",
    category: "Software",
  },
  {
    title: "Best Antivirus Software",
    description: "Protection that stays out of the way.",
    href: "/software/best-antivirus",
    category: "Software",
  },
  {
    title: "Best Password Managers",
    description: "Unique passwords without a leaked spreadsheet.",
    href: "/software/password-manager",
    category: "Software",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-ink text-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <Container className="relative z-10">
          <SectionHeading
            accent="brand"
            align="left"
            size="large"
            eyebrow="Editorial"
            title="Guides & reviews"
            subtitle="Comparisons you can scan in a sitting — AI tools and software."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.href} {...post} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
