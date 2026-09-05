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
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#4f00ca] shadow-[0_0_20px_rgba(79,0,202,0.4)]">
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
