import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best VPN Services 2026",
  description:
    "Compare top VPN providers for privacy, security, streaming, and everyday browsing.",
};

const vpns = [
  {
    name: "ExpressVPN",
    bestFor: "Ease of use",
    note: "Polished apps and reliable streaming on most devices.",
  },
  {
    name: "NordVPN",
    bestFor: "Value + extras",
    note: "Threat protection and a large server list for the price.",
  },
  {
    name: "Mullvad",
    bestFor: "Privacy-first",
    note: "Minimal account data and a straightforward fee model.",
  },
  {
    name: "Proton VPN",
    bestFor: "Free + paid mix",
    note: "Strong privacy story if you already use Proton Mail.",
  },
];

export default function BestVPN() {
  return (
    <GuideLayout
      accent="software"
      eyebrow="Privacy"
      title="Best VPN services"
      subtitle="Speed, streaming, and actual privacy — compared without the homepage slogans."
      related={[
        {
          title: "Best Antivirus Software",
          description: "Device protection that pairs with a VPN.",
          href: "/software/best-antivirus",
          category: "Security",
        },
        {
          title: "Best Password Managers",
          description: "Lock down accounts the VPN cannot save.",
          href: "/software/password-manager",
          category: "Identity",
        },
      ]}
    >
      <p>
        A VPN encrypts traffic on untrusted networks and can change your
        apparent location. It is not a complete privacy suite: it will not
        replace a password manager, updates, or good account hygiene.
      </p>
      <p>
        Weigh logging policy, independent audits, streaming reliability, and
        whether you need one license across phones, laptops, and routers.
      </p>
      <div className="grid gap-4 pt-4 md:grid-cols-2">
        {vpns.map((vpn) => (
          <Card key={vpn.name} className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {vpn.bestFor}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">
              {vpn.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{vpn.note}</p>
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
