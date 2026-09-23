import Link from "next/link";

import LogoMark from "@/components/brand/LogoMark";

type Props = {
  className?: string;
  variant?: "default" | "onDark";
};

export default function Logo({
  className = "",
  variant = "default",
}: Props) {
  const onDark = variant === "onDark";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="OffersMania home"
    >
      <span
        className={`relative shrink-0 transition-transform duration-200 group-hover:scale-[1.02] ${
          onDark ? "" : "shadow-[0_0_20px_rgba(147,56,193,0.35)]"
        }`}
      >
        <LogoMark size={36} />
      </span>
      <span
        className={`font-display text-[1.15rem] font-bold tracking-tight sm:text-[1.2rem] ${
          onDark ? "text-[var(--header-fg)]" : "text-fg"
        }`}
      >
        <span className={onDark ? "text-[var(--header-fg)]" : "text-fg"}>
          Offers
        </span>
        <span className="text-[var(--heading-accent)]">Mania</span>
      </span>
    </Link>
  );
}
