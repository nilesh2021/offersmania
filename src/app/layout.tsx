import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Figtree, Sora } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offersmania.com"),

  title: {
    default: "OffersMania",
    template: "%s | OffersMania",
  },

  description:
    "Compare dating sites, AI tools, software, and online offers.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "OffersMania",
    description:
      "Compare dating sites, AI tools, software and online offers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${sora.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}