import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dating Sites & Dating Apps (2026) | OffersMania",
  description:
    "Compare dating sites, apps, and relationship platforms. Discover the best dating websites for serious relationships, casual dating, seniors, and more.",
};

const featuredPages = [
  {
    title: "Best Dating Sites Germany",
    href: "/dating/best-dating-sites-germany",
  },
  {
    title: "Best Dating Sites USA",
    href: "/dating/best-dating-sites-usa",
  },
  {
    title: "Serious Relationship Dating Sites",
    href: "/dating/serious-relationship-dating-sites",
  },
  {
    title: "Tinder Alternatives",
    href: "/dating/tinder-alternatives",
  },
];

const categories = [
  {
    title: "Senior Dating",
    href: "/dating/senior-dating-sites",
  },
  {
    title: "Mature Dating",
    href: "/dating/mature-dating-sites",
  },
  {
    title: "Christian Dating",
    href: "/dating/christian-dating-sites",
  },
  {
    title: "Casual Dating",
    href: "/dating/casual-dating-sites",
  },
];

export default function DatingPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-r from-pink-600 to-rose-700 py-20 text-white">

        <div className="mx-auto max-w-6xl px-4 text-center">

          <h1 className="text-5xl font-bold md:text-6xl">
            Best Dating Sites & Apps
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-pink-100">
            Compare dating platforms, relationship apps,
            and online dating services to find the best
            match for your goals.
          </p>

        </div>

      </section>

      {/* Featured Pages */}

      <section className="mx-auto max-w-7xl px-4 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Popular Dating Guides
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {featuredPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border p-6 hover:shadow-lg"
            >
              <h3 className="font-semibold">
                {page.title}
              </h3>
            </Link>
          ))}

        </div>

      </section>

      {/* Categories */}

      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-7xl px-4">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Browse By Category
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  {category.title}
                </h3>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-5xl px-4 py-16">

        <h2 className="mb-6 text-3xl font-bold">
          Why Online Dating Is More Popular Than Ever
        </h2>

        <p className="mb-5 text-lg text-slate-700">
          Online dating has transformed the way people
          meet and build relationships. Millions of
          singles use dating websites and apps every day
          to connect with potential partners.
        </p>

        <p className="mb-5 text-lg text-slate-700">
          Whether you are looking for a serious
          relationship, companionship, friendship, or
          casual dating, there are platforms designed
          specifically for your goals.
        </p>

      </section>

      {/* FAQ */}

      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-5xl px-4">

          <h2 className="mb-8 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold">
                What is the best dating site?
              </h3>

              <p>
                The best dating site depends on your
                goals, preferences, and location.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Are dating sites safe?
              </h3>

              <p>
                Reputable platforms offer privacy and
                security features to help protect users.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Can I use dating apps for free?
              </h3>

              <p>
                Most dating platforms offer free
                registration, while premium features may
                require a paid subscription.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="bg-pink-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Start Your Dating Journey Today
          </h2>

          <p className="mb-8 text-lg">
            Explore our top-rated dating platforms and
            find the best option for your relationship goals.
          </p>

          <Link
            href="/dating/best-dating-sites-germany"
            className="inline-flex rounded-lg bg-white px-8 py-4 font-semibold text-pink-700"
          >
            Explore Dating Sites
          </Link>

        </div>

      </section>

    </main>
  );
}