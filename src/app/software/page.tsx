import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Software Reviews 2026 | OffersMania",
  description:
    "Compare the best software, VPNs, antivirus tools and productivity applications.",
};

const softwareArticles = [
  {
    title: "Best VPN Services",
    description:
      "Compare top VPN providers for privacy and security.",
    href: "/software/best-vpn",
  },
  {
    title: "Best Antivirus Software",
    description:
      "Protect your devices with leading antivirus solutions.",
    href: "/software/best-antivirus",
  },
  {
    title: "Best Password Managers",
    description:
      "Store passwords securely and improve online security.",
    href: "/software/best-password-managers",
  },
  {
    title: "Best Productivity Software",
    description:
      "Tools to help individuals and teams work smarter.",
    href: "/software/best-productivity-software",
  },
];

export default function SoftwarePage() {
  return (
    <main>
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Software Reviews
          </h1>

          <p className="mx-auto max-w-3xl text-lg">
            Compare software products,
            VPNs, antivirus tools and
            productivity applications.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Popular Software Articles
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {softwareArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-xl border p-6 hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-semibold">
                {article.title}
              </h3>

              <p className="text-slate-600">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}