import Link from "next/link";

type Props = {
  className?: string;
};

export default function Logo({ className = "" }: Props) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="OffersMania home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(124,92,255,0.35)]">
        <span className="stay-white font-display text-[13px] font-bold tracking-tight text-white">
          OM
        </span>
      </span>
      <span className="font-display text-[1.2rem] font-semibold tracking-tight text-fg">
        OffersMania
      </span>
    </Link>
  );
}
