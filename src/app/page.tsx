import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="mx-auto max-w-6xl px-4 text-center">

         <h1 className="mb-6 text-5xl font-bold md:text-7xl">
  Discover The Best Online Offers & Tools
</h1>

<p className="mx-auto max-w-3xl text-xl text-slate-300">
  Compare dating sites, AI tools, software, online services,
  and trending digital products all in one place.
</p>
          <div className="mt-8 flex justify-center gap-4">

  <Link
    href="/dating"
    className="rounded-lg bg-white px-6 py-3 font-semibold text-black"
  >
    Explore Dating Offers
  </Link>

  <Link
    href="/software"
    className="rounded-lg border border-white px-6 py-3"
  >
    Browse Software
  </Link>

</div>
        </div>
      </section>

      {/* Categories */}

      <section className="py-20">

        <div className="mx-auto max-w-6xl px-4">

          <h2 className="mb-10 text-center text-4xl font-bold">
            Popular Categories
          </h2>

         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
       <Link
              href="/dating"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
              Dating Sites
              </h3>

              <p>
               Compare dating platforms,
relationship apps, and niche dating communities.
              </p>
            </Link>
            <Link
              href="/ai"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                AI Tools
              </h3>

              <p>
               AI chatbots, writing assistants,
image generators and productivity tools.
              </p>
            </Link>

     

            <Link
              href="/software"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                Software
              </h3>

              <p>
               VPNs, antivirus programs,
business software and utilities.
              </p>
            </Link>

              <Link
              href="/blog"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                Guides & Reviews
              </h3>

              <p>
              Expert comparisons,
tutorials and buying guides.
              </p>
            </Link>

          </div>
        </div>
      </section>
{/* Statistics Section */}

<section className="bg-slate-900 py-20 text-white">
  <div className="mx-auto max-w-6xl px-4">

    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-cyan-400">
          100+
        </h3>
        <p className="mt-3 text-slate-300">
          Offers Reviewed
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-violet-400">
          50+
        </h3>
        <p className="mt-3 text-slate-300">
          Software Tools
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-emerald-400">
          25+
        </h3>
        <p className="mt-3 text-slate-300">
          Buying Guides
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-amber-400">
          100+
        </h3>
        <p className="mt-3 text-slate-300">
          Product Comparisons
        </p>
      </div>

    </div>

  </div>
</section>
      {/* Why Choose Us */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-6xl px-4">

          <h2 className="mb-10 text-center text-4xl font-bold">
            Why OffersMania?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Expert Reviews
              </h3>

              <p>
               We research and compare online products
to help users make informed decisions.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
              Easy Comparisons </h3>

              <p>
               Compare features, pricing,
pros and cons in one place.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
             Updated Regularly
              </h3>

              <p>
               New tools, offers and reviews
added frequently.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}