import type { Metadata } from "next";

import DatingShell from "@/components/dating/DatingShell";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DatingShell>{children}</DatingShell>;
}
