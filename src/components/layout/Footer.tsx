import Link from "next/link";

import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "Categories",
    links: [
      { href: "/ai", label: "AI Tools" },
      { href: "/software", label: "Software" },
      { href: "/blog", label: "Guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-muted">
      <Container className="py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-2 max-w-xs text-sm leading-snug text-muted">
              Independent comparisons of AI tools and software.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-fg">
                {column.title}
              </h4>
              <ul className="mt-2 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-1 border-t border-line pt-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OffersMania. All rights reserved.</p>
          <p>Some links are affiliate partnerships..</p>
        </div>
      </Container>
    </footer>
  );
}
