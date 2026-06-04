import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="mx-auto max-w-6xl px-4 text-center">

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Find the Best Dating Sites in 2026
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-slate-300">
           Compare dating platforms, discover relationship-focused apps, and find the right match.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              href="/ai"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-black"
            >
              Explore AI Tools
            </Link>

            <Link
              href="/blog"
              className="rounded-lg border border-white px-6 py-3"
            >
              Read Blog
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

          <div className="grid gap-8 md:grid-cols-3">
       <Link
              href="/dating"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                Dating
              </h3>

              <p>
                Dating platforms and
                relationship resources.
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
                ChatGPT alternatives,
                AI writing tools and more.
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
                VPNs, antivirus and
                productivity software.
              </p>
            </Link>

              <Link
              href="/blog"
              className="rounded-xl border p-8 transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-bold">
                Blog
              </h3>

              <p>
                VPNs, antivirus and
                productivity software.
              </p>
            </Link>

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
                Honest reviews based on
                research and analysis.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Compare Products
              </h3>

              <p>
                Compare features, pricing,
                and benefits quickly.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Save Time
              </h3>

              <p>
                Discover the best tools
                without hours of research.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}