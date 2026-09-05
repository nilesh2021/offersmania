import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Script from "next/script";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Serious Relationship Dating Sites (2026) | OffersMania",
  description:
    "Discover the best dating sites for serious relationships, meaningful connections, and long-term commitment.",
};
const schema = faqSchema([
  {
    question:
      "What is a serious relationship dating site?",
    answer:
      "These platforms are designed for people looking for long-term relationships rather than casual dating.",
  },
  {
    question:
      "Do serious dating sites work?",
    answer:
      "Many people successfully meet partners through relationship-focused dating platforms.",
  },
]);
export default function SeriousRelationshipDatingSitesPage() {
  return (
    <main>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4f00ca] to-[#7b3dff] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Relationship Dating Guide
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Best Serious Relationship Dating Sites
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-purple-100">
            Looking for a meaningful relationship instead of
            casual dating? Explore dating platforms designed
            for people seeking long-term commitment and genuine
            connections.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/go/serious-dating"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-700 transition hover:scale-105"
            >
              View Recommended Site
            </Link>

            <Link
              href="#comparison"
              className="rounded-lg border border-white px-8 py-4"
            >
              Compare Platforms
            </Link>

          </div>

        </div>
      </section>

      {/* Introduction */}

      <section className="mx-auto max-w-5xl px-4 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Why Choose Relationship-Focused Dating Sites?
        </h2>

        <p className="mb-5 text-lg text-slate-700">
          Not all dating platforms are created for the same
          purpose. Some focus on casual conversations, while
          others are built specifically for users seeking
          long-term relationships and marriage.
        </p>

        <p className="text-lg text-slate-700">
          Relationship-focused dating sites often provide
          detailed profiles, compatibility matching, and
          features designed to help people build meaningful
          connections.
        </p>

      </section>

      {/* Editor Choice */}

      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Best Overall Choice
            </span>

            <h2 className="mt-5 text-3xl font-bold">
              Our Top Pick For Serious Relationships
            </h2>

            <p className="mt-4 text-slate-700">
              A highly rated platform focused on meaningful
              relationships, compatibility matching, and
              long-term commitment.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Relationship-focused community</li>
              <li>✓ Advanced matching system</li>
              <li>✓ Detailed profiles</li>
              <li>✓ Mobile friendly</li>
              <li>✓ Large active member base</li>
            </ul>

            <Link
              href="/go/serious-dating"
              className="mt-8 inline-flex rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700"
            >
              Visit Dating Site
            </Link>

          </div>

        </div>

      </section>

      {/* Comparison */}

      <section
        id="comparison"
        className="mx-auto max-w-6xl px-4 py-16"
      >

        <h2 className="mb-8 text-center text-3xl font-bold">
          Compare Relationship Dating Sites
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse overflow-hidden rounded-xl border">

            <thead>
              <tr className="bg-slate-100">
                <th className="border p-4 text-left">
                  Platform
                </th>

                <th className="border p-4">
                  Best For
                </th>

                <th className="border p-4">
                  Mobile App
                </th>

                <th className="border p-4">
                  Rating
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-4 font-semibold">
                  Top Pick
                </td>

                <td className="border p-4">
                  Long-Term Relationships
                </td>

                <td className="border p-4 text-center">
                  ✓
                </td>

                <td className="border p-4 text-center">
                  9.8/10
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Alternative #1
                </td>

                <td className="border p-4">
                  Compatibility Matching
                </td>

                <td className="border p-4 text-center">
                  ✓
                </td>

                <td className="border p-4 text-center">
                  9.4/10
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Alternative #2
                </td>

                <td className="border p-4">
                  Marriage-Oriented Dating
                </td>

                <td className="border p-4 text-center">
                  ✓
                </td>

                <td className="border p-4 text-center">
                  9.1/10
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Final CTA */}

      <section className="bg-purple-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Ready For A Meaningful Relationship?
          </h2>

          <p className="mb-8 text-lg">
            Join a dating platform focused on genuine
            connections and long-term relationships.
          </p>

          <Link
            href="/go/serious-dating"
            className="inline-flex rounded-lg bg-white px-10 py-4 text-lg font-semibold text-purple-700 transition hover:scale-105"
          >
            Start Now
          </Link>

        </div>

      </section>

    </main>
  );
}