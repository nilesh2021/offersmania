import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Script from "next/script";
import { faqSchema } from "@/lib/schema";
export const metadata: Metadata = {
  title: "Best Senior Dating Sites (2026) | OffersMania",
  description:
    "Discover the best dating sites for seniors looking for companionship, friendship, and relationships.",
};
const schema = faqSchema([
  {
    question: "What are the best senior dating sites?",
    answer:
      "The best senior dating sites are platforms designed for adults over 50 who are looking for companionship, friendship, or meaningful relationships.",
  },
  {
    question: "Are senior dating sites safe?",
    answer:
      "Most reputable senior dating platforms provide privacy controls, profile verification features, and security measures to help protect users.",
  },
  {
    question: "Can seniors find serious relationships online?",
    answer:
      "Yes. Many seniors successfully find companionship and long-term relationships through online dating platforms.",
  },
  {
    question: "Do senior dating sites have mobile apps?",
    answer:
      "Many senior dating platforms offer mobile-friendly websites and dedicated apps for Android and iOS devices.",
  },
  {
    question: "Are senior dating sites free?",
    answer:
      "Most platforms allow free registration, while premium features and messaging tools may require a paid membership.",
  },
]);
export default function SeniorDatingSitesPage() {
  return (

    <>   <Breadcrumb
      items={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Dating",
          href: "/dating",
        },
        {
          label: "Serious Relationship Dating Sites",
        },
      ]}
    />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <h1 className="mb-6 text-5xl font-bold">
          Best Senior Dating Sites
        </h1>

        <p className="mb-8 text-lg text-slate-700">
          Senior dating platforms help older adults
          meet new people, build friendships, and
          find meaningful relationships.
        </p>

        <Link
          href="/go/senior-dating"
          className="inline-flex rounded-lg bg-[#4f00ca] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#3d00a0]"
        >
          Visit Senior Dating Site
        </Link>
        {/* FAQ Section */}

        <section className="mx-auto max-w-5xl px-4 py-16">

          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                What are senior dating sites?
              </h3>

              <p>
                Senior dating sites are platforms specifically
                designed for older adults looking for friendship,
                companionship, or romantic relationships.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Are senior dating sites safe?
              </h3>

              <p>
                Reputable dating platforms include privacy controls,
                reporting tools, and security features to help users
                stay safe online.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Can people over 50 use dating apps?
              </h3>

              <p>
                Absolutely. Many dating platforms are designed
                specifically for adults over 50 and have large,
                active communities.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Do senior dating sites require payment?
              </h3>

              <p>
                Most sites offer free registration, while advanced
                communication and matching features may require a
                premium membership.
              </p>
            </div>

          </div>

        </section>
      </main></>
  );
}