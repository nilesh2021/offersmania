"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/theme/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--header)] text-fg backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition ${
                isActive(href)
                  ? "bg-[var(--card)] text-fg"
                  : "text-muted hover:bg-[var(--card)] hover:text-fg"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" variant="secondary" size="sm">
            Contact
          </Button>
          <Button href="/ai" variant="primary" size="sm">
            Explore offers
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-[var(--card)] text-fg"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(href)
                    ? "bg-[var(--card)] text-fg"
                    : "text-muted hover:bg-[var(--card)] hover:text-fg"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-[var(--card)] hover:text-fg"
            >
              Contact
            </Link>
            <Button href="/ai" variant="primary" size="md" className="mt-2">
              Explore offers
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
