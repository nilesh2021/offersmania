import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best Antivirus Software 2026",
  description:
    "Compare leading antivirus programs for Windows, Mac, and mobile devices.",
};

const products = [
  {
    name: "Avast Antivirus",
    bestFor: "Free to full suite",
    note: "Compare Free, Premium Security, and Ultimate — then check current offers.",
    href: "/software/avast-antivirus",
  },
  {
    name: "Bitdefender",
    bestFor: "Low impact",
    note: "Strong detection with a lighter footprint than many suites.",
  },
  {
    name: "Malwarebytes",
    bestFor: "Cleanup",
    note: "Excellent second-opinion scanner when something already feels off.",
  },
  {
    name: "Microsoft Defender",
    bestFor: "Built-in baseline",
    note: "Fine for careful users; add a specialist tool if you want extra layers.",
  },
  {
    name: "Norton / Gen Digital",
    bestFor: "Bundles",
    note: "VPN and identity extras in one bill — watch overlapping features.",
  },
];

export default function BestAntivirus() {
  return (
    <GuideLayout
      accent="software"
      eyebrow="Security"
      title="Best antivirus software"
      subtitle="Protection that stays out of the way — compared on detection, noise, and value."
      related={[
        {
          title: "Best VPN Services",
          description: "Network privacy alongside device security.",
          href: "/software/best-vpn",
          category: "Privacy",
        },
        {
          title: "Best Password Managers",
          description: "Stop reused passwords from undoing your AV.",
          href: "/software/password-manager",
          category: "Identity",
        },
      ]}
    >
      <p>
        Modern antivirus is less about a scary scan button and more about quiet
        real-time protection, ransomware rollback, and whether the suite nags
        you into extras you will never use.
      </p>
      <div className="grid gap-4 pt-4 md:grid-cols-2">
        {products.map((item) => (
          <Card key={item.name} className="p-5" href={item.href}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {item.bestFor}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.note}</p>
            {item.href && (
              <p className="mt-3 text-sm font-semibold text-brand">
                View offers →
              </p>
            )}
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
