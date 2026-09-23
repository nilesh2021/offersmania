"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

function isDatingRoute(pathname: string) {
  return pathname === "/dating" || pathname.startsWith("/dating/");
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDating = isDatingRoute(pathname);

  return (
    <>
      {!isDating && <Header />}
      <main
        className={
          isDating
            ? "min-h-screen"
            : "min-h-[calc(100vh-var(--shell-header-total))]"
        }
      >
        {children}
      </main>
      {!isDating && <Footer />}
    </>
  );
}
