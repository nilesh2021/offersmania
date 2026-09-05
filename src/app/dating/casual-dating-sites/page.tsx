import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import Breadcrumb from "@/components/layout/Breadcrumb";
import { faqSchema } from "@/lib/schema";
import { datingOffers } from "@/data/datingOffers";

export const metadata: Metadata = {
  title: "Best Casual Dating Sites (2026)",
  description:
    "Compare the best casual dating sites and apps. Discover popular platforms for casual encounters, fun connections, and meeting new people.",
};

const schema = faqSchema([
  {
    question: "What is the best casual dating site?",
    answer:
      "The best casual dating site depends on your location, preferences, and the type of connections you are looking for.",
  },
  {
    question: "Are casual dating sites popular?",
    answer:
      "Yes. Millions of adults use casual dating platforms to meet new people and build connections.",
  },
  {
    question: "Can I use casual dating sites for free?",
    answer:
      "Most casual dating sites offer free registration, while premium features may require a paid membership.",
  },
]);

export default function CasualDatingSitesPage() {
  return (
    <main>
      <Script
        id="usa-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

     <Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Dating", href: "/dating" },
    { label: "Casual Dating Sites" },
  ]}
/>

      {/* Hero */}

     <section className="bg-gradient-to-r from-[#4f00ca] to-[#3d00a0] py-20 text-white">
  <div className="mx-auto max-w-6xl px-4 text-center">

    <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
      Casual Dating Guide 2026
    </span>

    <h1 className="mt-6 text-5xl font-bold md:text-6xl">
      Best Casual Dating Sites
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-brand">
      Looking for casual dating opportunities?
      We compared some of the most popular
      platforms to help you find the right site
      for meeting new people online.
    </p>

  </div>
</section>

      {/* Intro */}

    <section className="mx-auto max-w-5xl px-4 py-16">

  <h2 className="mb-6 text-3xl font-bold">
    Finding The Right Casual Dating Site
  </h2>

  <p className="mb-5 text-lg text-slate-700">
    Casual dating gives people the freedom to
    meet others without the expectations often
    associated with traditional relationships.
  </p>

  <p className="text-lg text-slate-700">
    Modern dating platforms make it easier than
    ever to connect with local singles, discover
    new people, and explore dating opportunities.
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
  {offer.name} is one of the most popular
  platforms for casual dating and meeting
  like-minded adults online.
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
<section className="bg-white py-16">
  <div className="mx-auto max-w-5xl px-4">

    <h2 className="mb-6 text-3xl font-bold">
      Why Trust Our Recommendations?
    </h2>

    <p className="text-lg text-slate-700">
      We compare dating platforms based on ease
      of registration, user experience, popularity,
      mobile usability, and overall value.
      Our goal is to help readers discover
      quality dating sites quickly and safely.
    </p>

  </div>
</section>
<section className="mx-auto max-w-5xl px-4 py-16">

  <h2 className="mb-8 text-3xl font-bold">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">

    <div className="rounded-lg border p-6">
      <h3 className="mb-3 text-xl font-semibold">
        What is the best casual dating site?
      </h3>

      <p>
        The best platform depends on your
        preferences and location.
      </p>
    </div>

    <div className="rounded-lg border p-6">
      <h3 className="mb-3 text-xl font-semibold">
        Are casual dating sites safe?
      </h3>

      <p>
        Reputable dating platforms provide
        privacy controls and security features.
      </p>
    </div>

    <div className="rounded-lg border p-6">
      <h3 className="mb-3 text-xl font-semibold">
        Can I join for free?
      </h3>

      <p>
        Most dating platforms offer free
        registration and optional premium features.
      </p>
    </div>

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
        href="/dating/tinder-alternatives"
        className="rounded-lg border bg-white p-6 hover:shadow-lg"
      >
        Tinder Alternatives
      </Link>

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

    </div>

  </div>

</section>

      {/* CTA */}

     <section className="bg-[#4f00ca] py-20 text-white">

  <div className="mx-auto max-w-4xl px-4 text-center">

    <h2 className="mb-6 text-4xl font-bold">
      Ready To Meet New People?
    </h2>

    <p className="mb-8 text-lg">
      Explore our recommended casual dating
      platforms and start connecting today.
    </p>

    <Link
      href="/go/realsexclub"
      className="inline-flex rounded-lg bg-white px-10 py-4 text-lg font-semibold text-[#4f00ca]"
    >
      Visit Top Pick
    </Link>

  </div>

</section>
    </main>
  );
}