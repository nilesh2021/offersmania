import Script from "next/script";

import { faqSchema } from "@/lib/schema";

export type DatingFaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: DatingFaqItem[];
  id?: string;
};

export default function DatingFaq({ items, id = "dating-faq-schema" }: Props) {
  const schema = faqSchema(items);

  return (
    <section className="px-4 py-8 md:py-10">
      <Script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f3c9a8]">
          Questions
        </p>
        <h2 className="font-display mt-2 text-center text-2xl font-bold text-white md:text-3xl">
          Before you join
        </h2>
        <div className="mt-6 space-y-3">
          {items.map((item, i) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/12 bg-white/[0.05] p-4 backdrop-blur-xl md:p-5"
            >
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-xs font-bold text-[#f3c9a8]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
