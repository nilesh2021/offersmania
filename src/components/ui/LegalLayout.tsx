import type { ReactNode } from "react";

import Container from "@/components/ui/Container";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  updated = "August 2026",
  children,
}: Props) {
  return (
    <div className="bg-ink text-fg">
      <div className="border-b border-line bg-[var(--page-soft)]">
        <Container size="sm" className="py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Legal
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-fg md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        </Container>
      </div>
      <Container size="sm" className="prose-legal py-14">
        {children}
      </Container>
    </div>
  );
}
