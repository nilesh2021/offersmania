"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/ai", label: "AI" },
  { href: "/dating", label: "Dating" },
  { href: "/software", label: "Software" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDating = pathname.startsWith("/dating");

  const linkClass = (href: string) => {
    const isActive =
      href === "/dating"
        ? pathname.startsWith("/dating")
        : pathname.startsWith(href);

    if (isDating) {
      return isActive
        ? "text-pink-400 transition hover:text-pink-300"
        : "text-slate-300 transition hover:text-white";
    }

    return isActive
      ? "font-medium text-pink-600"
      : "text-slate-700 transition hover:text-slate-900";
  };

  return (
    <header
      className={
        isDating
          ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 text-white backdrop-blur-xl"
          : "sticky top-0 z-50 border-b bg-white"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className={
            isDating
              ? "text-2xl font-bold text-white"
              : "text-2xl font-bold text-slate-900"
          }
        >
          OffersMania
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={isDating ? "text-white md:hidden" : "md:hidden"}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div className={isDating ? "border-t border-white/10 md:hidden" : "border-t md:hidden"}>
          <div className="flex flex-col p-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 ${linkClass(href)}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
