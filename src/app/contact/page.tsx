import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact OffersMania",
  description:
    "Get in touch with OffersMania for partnerships, corrections, or editorial questions.",
};

export default function ContactPage() {
  return (
    <div className="bg-ink text-white">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <Container size="md" className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Contact
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold md:text-6xl">
            Let’s talk.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Partnerships, corrections, and guide requests — send a note and we
            will get back when we can.
          </p>
        </Container>
      </section>

      <section className="border-t border-white/10 py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <form
            className="glass rounded-3xl p-6 md:p-8"
            action="mailto:hello@offersmania.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-200">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none ring-violet-400/0 transition placeholder:text-slate-500 focus:border-violet-400/40 focus:ring-4 focus:ring-violet-400/15"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400/40 focus:ring-4 focus:ring-violet-400/15"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-200">
              Topic
              <select
                name="topic"
                className="mt-2 w-full rounded-xl border border-white/15 bg-ink-soft px-4 py-3 text-white outline-none focus:border-violet-400/40"
              >
                <option>Editorial / correction</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-400/40 focus:ring-4 focus:ring-violet-400/15"
                placeholder="How can we help?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-[var(--btn-primary-bg)] px-7 py-3 text-sm font-semibold text-[var(--btn-primary-fg)] transition hover:opacity-90"
            >
              Send message
            </button>
          </form>

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                text: "hello@offersmania.com",
              },
              {
                icon: MessageCircle,
                title: "Editorial",
                text: "Flag outdated rankings or product changes.",
              },
              {
                icon: MapPin,
                title: "Coverage",
                text: "Guides covering AI tools, VPNs, security, and productivity software.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass flex gap-4 rounded-2xl p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
