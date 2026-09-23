"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/ai", label: "AI Tools" },
  { href: "/software", label: "Software" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string) => {
    const active = isActive(href);
    return [
      "relative px-3 py-2 text-sm font-medium tracking-tight transition-colors",
      "text-[var(--header-muted)] hover:text-[var(--header-fg)]",
      "dark:text-muted dark:hover:text-fg",
      active ? "text-[var(--header-fg)] dark:text-fg" : "",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-[var(--header)] dark:border-line dark:bg-[var(--header)] dark:backdrop-blur-md dark:supports-[backdrop-filter]:bg-[var(--header)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo variant="onDark" className="dark:[&_span:last-child]:!text-fg" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass(href)}>
              {label}
              {isActive(href) && (
                <span
                  className="absolute inset-x-3 -bottom-[calc(0.5rem+1px)] hidden h-0.5 rounded-full bg-[var(--header-fg)] dark:block dark:bg-brand"
                  aria-hidden
                />
              )}
              {isActive(href) && (
                <span
                  className="absolute inset-x-3 -bottom-[calc(0.5rem+1px)] h-0.5 rounded-full bg-white/90 dark:hidden"
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href="/ai"
            variant="highlight"
            size="sm"
            className="font-bold"
          >
            Explore offers
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#212529] transition-colors hover:bg-black/10 dark:text-fg dark:hover:bg-[var(--card-hover)] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-[var(--header)] dark:border-line dark:bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "bg-white/15 text-[var(--header-fg)] dark:bg-[var(--accent-soft)] dark:text-fg"
                    : "text-[var(--header-muted)] hover:bg-white/10 hover:text-[var(--header-fg)] dark:text-muted dark:hover:bg-[var(--card-hover)] dark:hover:text-fg"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/15 pt-4 dark:border-line">
              <Button href="/ai" variant="highlight" size="md" className="w-full">
                Explore offers
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
