import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { faqSchema } from "@/lib/schema";
export const metadata: Metadata = {
  title: "Best Casual Dating Sites (2026) | OffersMania",
  description:
    "Compare casual dating sites and apps for adults looking for fun, connections, and dating opportunities.",
};
const schema = faqSchema([
  {
    question: "What are mature dating sites?",
    answer:
      "Mature dating sites are designed for adults seeking meaningful relationships, companionship, and connections with like-minded singles.",
  },
  {
    question: "What age is considered mature dating?",
    answer:
      "Mature dating typically refers to adults over 40, although the age range may vary depending on the platform.",
  },
  {
    question: "Are mature dating sites safe?",
    answer:
      "Most reputable dating sites provide privacy settings, profile verification, and security tools to help users stay safe online.",
  },
  {
    question: "Can mature singles find serious relationships online?",
    answer:
      "Yes. Many mature singles successfully find long-term relationships and companionship through dating platforms.",
  },
  {
    question: "Do mature dating sites have mobile apps?",
    answer:
      "Many mature dating platforms offer mobile-friendly websites and dedicated apps for Android and iOS devices.",
  },
]);
export default function CasualDatingSitesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <h1 className="mb-6 text-5xl font-bold">
        Best Casual Dating Sites
      </h1>

      <p className="mb-8 text-lg text-slate-700">
        Explore dating platforms designed for casual
        connections, social interaction, and meeting
        new people.
      </p>
      {/* FAQ Section */}

      <section className="mx-auto max-w-5xl px-4 py-16">

        <h2 className="mb-8 text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">
              What are mature dating sites?
            </h3>

            <p>
              Mature dating sites are online platforms
              designed for adults seeking meaningful
              relationships, companionship, and social
              connections.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Are mature dating sites safe?
            </h3>

            <p>
              Reputable platforms offer privacy settings,
              reporting tools, and security features to
              help users stay protected.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Can mature singles find serious relationships?
            </h3>

            <p>
              Yes. Many mature dating platforms focus on
              long-term relationships and meaningful
              connections.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Do mature dating sites require payment?
            </h3>

            <p>
              Most platforms allow free registration,
              while premium features may require a paid
              subscription.
            </p>
          </div>

        </div>

      </section>
      <Link
        href="/go/mature-dating"
        className="inline-flex rounded-lg bg-pink-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-pink-700"
      >
        Visit Mature Dating Site
      </Link>

    </main>
  );
}