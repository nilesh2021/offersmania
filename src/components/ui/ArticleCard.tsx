import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  href: string;
  category?: string;
};

export default function ArticleCard({
  title,
  description,
  href,
  category,
}: Props) {
  return (
    <Link
      href={href}
      className="surface-card group flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--card-hover)]"
    >
      {category && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--card-hover)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
          {category}
        </span>
      )}
      <h3 className="font-display text-lg font-semibold tracking-tight text-fg group-hover:text-brand">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Read guide
        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
