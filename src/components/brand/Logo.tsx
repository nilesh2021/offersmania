import Link from "next/link";

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
        className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-brand ${
          onDark
            ? "border border-white/25 shadow-none"
            : "shadow-[0_0_20px_rgba(147,56,193,0.35)]"
        }`}
      >
        <span className="stay-white font-display text-[13px] font-bold tracking-tight text-white">
          OM
        </span>
      </span>
      <span
        className={`font-display text-[1.2rem] font-semibold tracking-tight ${
          onDark ? "text-[var(--header-fg)]" : "text-fg"
        }`}
      >
        OffersMania
      </span>
    </Link>
  );
}
