import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({
  items,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-1 text-sm text-slate-500"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-pink-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-800">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span className="mx-2">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}