import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-1 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="transition hover:text-fg">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-fg">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="mx-1.5 h-3.5 w-3.5 opacity-50" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
