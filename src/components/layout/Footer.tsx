import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

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

const social = [
  { href: "#", label: "X", icon: FaXTwitter },
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "Instagram", icon: FaInstagram },
  { href: "#", label: "LinkedIn", icon: FaLinkedinIn },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-[var(--footer-bg)] text-[var(--footer-muted)] dark:bg-ink dark:text-muted">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo variant="onDark" className="dark:[&_span:last-child]:!text-fg" />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--footer-muted)] dark:text-muted">
                Independent comparisons of AI tools and software.
              </p>
            </div>

            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="font-display text-sm font-semibold text-[var(--footer-fg)] dark:text-fg">
                  {column.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--footer-muted)] transition hover:text-[var(--footer-fg)] dark:text-muted dark:hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:pt-1">
            {social.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--footer-fg)] transition hover:bg-white/10 dark:text-muted dark:hover:bg-[var(--card-hover)] dark:hover:text-fg"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="footer-deep border-t border-black/10 dark:border-line dark:bg-ink">
        <Container className="flex flex-col gap-3 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[var(--footer-muted)] dark:text-muted">
            © {year} OffersMania. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/privacy-policy"
              className="text-[var(--footer-muted)] transition hover:text-[var(--footer-fg)] dark:hover:text-fg"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--footer-muted)] transition hover:text-[var(--footer-fg)] dark:hover:text-fg"
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="text-[var(--footer-muted)] transition hover:text-[var(--footer-fg)] dark:hover:text-fg"
            >
              Disclaimer
            </Link>
          </div>
          <p className="text-[var(--footer-muted)] dark:text-muted sm:text-right">
            Some links are affiliate partnerships.
          </p>
        </Container>
      </div>
    </footer>
  );
}
