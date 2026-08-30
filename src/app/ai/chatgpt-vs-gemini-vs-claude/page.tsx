import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "ChatGPT vs Gemini vs Claude",
  description:
    "Compare ChatGPT, Google Gemini, and Claude to find the best AI assistant for writing, research, and work.",
};

const rows = [
  { label: "Best for writing", chatgpt: "Strong", gemini: "Good", claude: "Excellent" },
  { label: "Research / citations", chatgpt: "Good", gemini: "Excellent", claude: "Good" },
  { label: "Long documents", chatgpt: "Good", gemini: "Good", claude: "Excellent" },
  { label: "Coding help", chatgpt: "Excellent", gemini: "Good", claude: "Strong" },
  { label: "Workspace fit", chatgpt: "Apps & API", gemini: "Google", claude: "Projects" },
];

export default function ChatGPTvsGeminivsClaude() {
  return (
    <GuideLayout
      accent="ai"
      eyebrow="Head-to-head"
      title="ChatGPT vs Gemini vs Claude"
      subtitle="Three assistants, three strengths. Pick the one that matches how you actually work."
      related={[
        {
          title: "Best AI Tools in 2026",
          description: "The wider AI stack beyond chat.",
          href: "/ai/best-ai-tools",
          category: "Roundup",
        },
        {
          title: "Best AI Writing Tools",
          description: "Specialized writers vs general chat.",
          href: "/ai/best-ai-writing-tools",
          category: "Writing",
        },
      ]}
    >
      <p>
        ChatGPT is the default for many people: fast, flexible, and plugged into
        a large app ecosystem. Gemini is the natural pick if your day already
        lives in Google Search, Gmail, and Docs. Claude tends to win on long,
        careful writing and large document review.
      </p>
      <p>
        None of them is universally “best.” Most power users keep two — one for
        drafting, one for research or code.
      </p>

      <div className="overflow-x-auto pt-4">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="py-3 pr-4 font-semibold">Dimension</th>
              <th className="py-3 pr-4 font-semibold">ChatGPT</th>
              <th className="py-3 pr-4 font-semibold">Gemini</th>
              <th className="py-3 font-semibold">Claude</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-white/10">
                <td className="py-3.5 pr-4 font-medium text-white">{row.label}</td>
                <td className="py-3.5 pr-4 text-slate-300">{row.chatgpt}</td>
                <td className="py-3.5 pr-4 text-slate-300">{row.gemini}</td>
                <td className="py-3.5 text-slate-300">{row.claude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 pt-6 md:grid-cols-3">
        {[
          { name: "ChatGPT", take: "Best all-rounder if you want one assistant for everything." },
          { name: "Gemini", take: "Best if Search and Google Workspace are already home." },
          { name: "Claude", take: "Best when the job is long-form, nuance, or big files." },
        ].map((item) => (
          <Card key={item.name} className="p-5">
            <h3 className="font-display text-lg font-semibold text-white">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.take}</p>
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
