import type { ReactNode } from "react";
import Container from "./Container";
import Badge from "./Badge";
import ArticleCard from "./ArticleCard";

type Accent = "brand" | "dating" | "ai" | "software";

type Related = {
  title: string;
  description: string;
  href: string;
  category?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: Accent;
  children: ReactNode;
  related?: Related[];
};

const accentBar: Record<Accent, string> = {
  brand: "from-[#4f00ca] to-[#7b3dff]",
  dating: "from-[#4f00ca] to-[#7b3dff]",
  ai: "from-[#4f00ca] to-[#7b3dff]",
  software: "from-[#4f00ca] to-[#7b3dff]",
};

export default function GuideLayout({
  eyebrow,
  title,
  subtitle,
  accent = "brand",
  children,
  related,
}: Props) {
  return (
    <div className="bg-ink text-fg">
      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container size="md" className="relative z-10">
          {eyebrow && <Badge pulse>{eyebrow}</Badge>}
          <h1 className="font-display mt-5 text-4xl font-bold md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
          <div
            className={`mt-8 h-1 w-16 rounded-full bg-gradient-to-r ${accentBar[accent]}`}
          />
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container size="md" className="space-y-6 text-base leading-relaxed text-slate-300">
          {children}
        </Container>
      </section>

      {related && related.length > 0 && (
        <section className="border-t border-white/10 py-16">
          <Container>
            <h2 className="font-display mb-8 text-2xl font-semibold">
              Related guides
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.href} {...item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
