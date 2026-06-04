import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Christian Dating Sites (2026) | OffersMania",
  description:
    "Compare Christian dating platforms for faith-based relationships and meaningful connections.",
};

export default function ChristianDatingSitesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">

      <h1 className="mb-6 text-5xl font-bold">
        Best Christian Dating Sites
      </h1>

      <p className="mb-8 text-lg text-slate-700">
        Find Christian-focused dating platforms
        that connect singles who share similar
        values and beliefs.
      </p>

      <Link
        href="/go/christian-dating"
        className="inline-flex rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white"
      >
        View Top Dating Site
      </Link>

    </main>
  );
}