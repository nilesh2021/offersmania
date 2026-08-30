import type { Metadata } from "next";

import Card from "@/components/ui/Card";
import GuideLayout from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  title: "Best Password Managers 2026",
  description:
    "Compare password managers for personal use, families, and teams.",
};

const products = [
  {
    name: "1Password",
    bestFor: "Families & teams",
    note: "Travel mode, Watchtower, and polished apps across every device.",
  },
  {
    name: "Bitwarden",
    bestFor: "Open source value",
    note: "Excellent free tier; self-host if you want full control.",
  },
  {
    name: "Apple iCloud Keychain",
    bestFor: "Apple-only",
    note: "Invisible if you stay in Safari — limited once you leave the garden.",
  },
  {
    name: "Proton Pass",
    bestFor: "Proton users",
    note: "Fits a privacy-first stack next to Mail and VPN.",
  },
];

export default function PasswordManager() {
  return (
    <GuideLayout
      accent="software"
      eyebrow="Identity"
      title="Best password managers"
      subtitle="Unique passwords everywhere, without a spreadsheet you will eventually leak."
      related={[
        {
          title: "Best VPN Services",
          description: "Protect the network around those logins.",
          href: "/software/best-vpn",
          category: "Privacy",
        },
        {
          title: "Best Antivirus Software",
          description: "Device-level protection to pair with a vault.",
          href: "/software/best-antivirus",
          category: "Security",
        },
      ]}
    >
      <p>
        A password manager is the highest-leverage security tool most people
        skip. Look for a strong free or family plan, passkey support, and a
        recovery story you will actually follow.
      </p>
      <div className="grid gap-4 pt-4 md:grid-cols-2">
        {products.map((item) => (
          <Card key={item.name} className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
              {item.bestFor}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-white">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.note}</p>
          </Card>
        ))}
      </div>
    </GuideLayout>
  );
}
