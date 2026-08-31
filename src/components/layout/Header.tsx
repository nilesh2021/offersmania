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

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--header)] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--header)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-3 py-2 text-sm font-medium tracking-tight transition-colors ${
                isActive(href)
                  ? "text-fg"
                  : "text-muted hover:text-fg"
              }`}
            >
              {label}
              {isActive(href) && (
                <span
                  className="absolute inset-x-3 -bottom-[calc(0.5rem+1px)] h-0.5 rounded-full bg-brand"
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Contact
          </Button>
          <Button href="/ai" variant="primary" size="sm">
            Explore offers
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-card text-fg transition-colors hover:bg-[var(--card-hover)] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "bg-[var(--accent-soft)] text-fg"
                    : "text-muted hover:bg-[var(--card-hover)] hover:text-fg"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-[var(--card-hover)] hover:text-fg"
            >
              Contact
            </Link>
            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
              <Button href="/ai" variant="primary" size="md" className="w-full">
                Explore offers
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
