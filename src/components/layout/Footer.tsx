"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isDating = pathname.startsWith("/dating");

  const linkClass = isDating
    ? "text-slate-400 transition hover:text-pink-300"
    : "transition hover:text-slate-900";

  return (
    <footer
      className={
        isDating
          ? "border-t border-white/10 bg-slate-950 text-slate-300"
          : "border-t bg-slate-50"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-bold">OffersMania</h3>
            <p className={`text-sm ${isDating ? "text-slate-400" : "text-slate-600"}`}>
              Discover the best software, AI tools, dating platforms, and digital
              products.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai" className={linkClass}>
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/dating" className={linkClass}>
                  Dating
                </Link>
              </li>
              <li>
                <Link href="/software" className={linkClass}>
                  Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={linkClass}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-10 border-t pt-6 text-center text-sm ${isDating ? "border-white/10 text-slate-500" : "text-slate-500"}`}
        >
          © {new Date().getFullYear()} OffersMania. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
