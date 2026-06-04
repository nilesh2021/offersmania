import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import Breadcrumb from "@/components/layout/Breadcrumb";
import { faqSchema } from "@/lib/schema";
import { datingOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Dating Sites in USA (2026)",
  description:
    "Compare the best dating sites in the USA. Discover popular dating platforms, compare features, and find the right match for your dating goals.",
};

const schema = faqSchema([
  {
    question: "What is the best dating site in the USA?",
    answer:
      "The best dating site depends on your goals, preferences, and the type of relationship you are seeking.",
  },
  {
    question: "Are dating apps popular in the USA?",
    answer:
      "Yes. Millions of Americans use dating websites and mobile dating apps every day.",
  },
  {
    question: "Can I use dating sites for free?",
    answer:
      "Most dating sites offer free registration, while premium features may require a paid subscription.",
  },
]);

export default function BestDatingSitesUSAPage() {
  return (
    <main>
      <Script
        id="usa-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dating", href: "/dating" },
            { label: "Best Dating Sites USA" },
          ]}
        />
      </div>

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            USA Dating Guide 2026
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Best Dating Sites in USA
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Compare top-rated dating platforms available in
            the United States. Find the right site based on
            your preferences, relationship goals, and dating style.
          </p>

        </div>
      </section>

      {/* Intro */}

      <section className="mx-auto max-w-5xl px-4 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Online Dating in the United States
        </h2>

        <p className="mb-5 text-lg text-slate-700">
          Online dating continues to grow in popularity across
          the United States. Millions of singles use dating
          websites and apps to connect with new people every day.
        </p>

        <p className="text-lg text-slate-700">
          Whether you're looking for casual dating,
          companionship, or a serious relationship, there are
          platforms designed for different needs and interests.
        </p>

      </section>

      {/* Comparison Table */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Compare Dating Sites
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse rounded-xl border bg-white">

              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-4">Rank</th>
                  <th className="border p-4">Site</th>
                  <th className="border p-4">Best For</th>
                  <th className="border p-4">Rating</th>
                  <th className="border p-4">Visit</th>
                </tr>
              </thead>

              <tbody>

               {datingOffers.map((offer) => (
                  <tr key={offer.slug}>

                    <td className="border p-4 text-center">
                      {offer.rank}
                    </td>

                    <td className="border p-4 font-semibold">
                      {offer.name}
                    </td>

                    <td className="border p-4">
                      {offer.bestFor}
                    </td>

                    <td className="border p-4 text-center">
                      {offer.rating}
                    </td>

                    <td className="border p-4 text-center">
                      <Link
                        href={`/go/${offer.slug}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Visit Site
                      </Link>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* Reviews */}

      <section className="py-16">

        <div className="mx-auto max-w-5xl px-4 space-y-10">

          {datingOffers.map((offer) => (
            <div
              key={offer.slug}
              className="rounded-2xl border bg-white p-8 shadow-sm"
            >

              <div className="flex flex-wrap items-center justify-between gap-4">

                <h2 className="text-3xl font-bold">
                  {offer.rank} {offer.name}
                </h2>

                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                  {offer.rating}
                </span>

              </div>

              <p className="mt-4 text-slate-700">
                {offer.name} is a popular platform for users
                interested in {offer.bestFor.toLowerCase()}.
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">

                <div>

                  <h3 className="mb-4 text-xl font-semibold">
                    Pros
                  </h3>

                  <ul className="space-y-2">

                    {offer.pros.map((pro) => (
                      <li key={pro}>
                        ✓ {pro}
                      </li>
                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="mb-4 text-xl font-semibold">
                    Cons
                  </h3>

                  <ul className="space-y-2">

                    {offer.cons.map((con) => (
                      <li key={con}>
                        ✗ {con}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

              <Link
                href={`/go/${offer.slug}`}
                className="mt-8 inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Visit {offer.name}
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* Related Articles */}

      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-5xl px-4">

          <h2 className="mb-8 text-3xl font-bold">
            Related Dating Guides
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <Link
              href="/dating/best-dating-sites-germany"
              className="rounded-lg border bg-white p-6 hover:shadow-lg"
            >
              Best Dating Sites Germany
            </Link>

            <Link
              href="/dating/serious-relationship-dating-sites"
              className="rounded-lg border bg-white p-6 hover:shadow-lg"
            >
              Serious Relationship Dating Sites
            </Link>

            <Link
              href="/dating/tinder-alternatives"
              className="rounded-lg border bg-white p-6 hover:shadow-lg"
            >
              Tinder Alternatives
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Ready To Start Dating?
          </h2>

          <p className="mb-8 text-lg">
            Explore our top-rated dating platforms and find
            the right match for your goals.
          </p>

          <Link
            href="/go/realsexclub"
            className="inline-flex rounded-lg bg-white px-10 py-4 text-lg font-semibold text-blue-700"
          >
            Visit Top Pick
          </Link>

        </div>

      </section>

    </main>
  );
}