import Link from "next/link";

type Cta = {
  href: string;
  label: string;
  external?: boolean;
};

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  primary: Cta;
  secondary?: Cta;
};

function SilhouetteStack() {
  return (
    <div className="relative mx-auto mt-14 h-64 w-full max-w-md sm:h-72" aria-hidden>
      <div className="absolute left-[8%] top-6 h-52 w-36 -rotate-6 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-rose-300/30 via-rose-900/40 to-[#1a0c14] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:h-60 sm:w-40">
        <div className="absolute inset-x-6 top-8 h-16 rounded-full bg-rose-200/25 blur-md" />
        <div className="absolute inset-x-8 top-20 h-28 rounded-[40%] bg-rose-100/20" />
      </div>
      <div className="absolute right-[8%] top-4 h-52 w-36 rotate-6 overflow-hidden rounded-3xl border border-amber-200/20 bg-gradient-to-b from-amber-200/25 via-fuchsia-900/35 to-[#1a0c14] shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:h-60 sm:w-40">
        <div className="absolute inset-x-6 top-10 h-14 rounded-full bg-amber-100/25 blur-md" />
        <div className="absolute inset-x-7 top-24 h-28 rounded-[42%] bg-fuchsia-100/15" />
      </div>
      <div className="absolute left-1/2 top-0 h-56 w-40 -translate-x-1/2 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-pink-200/35 via-rose-800/45 to-[#12060c] shadow-[0_24px_60px_rgba(190,24,93,0.35)] sm:h-64 sm:w-44">
        <div className="absolute inset-x-8 top-7 h-16 rounded-full bg-white/20 blur-sm" />
        <div className="absolute inset-x-6 top-[4.5rem] h-32 rounded-[46%] bg-gradient-to-b from-rose-100/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  );
}

export default function DatingHero({
  eyebrow = "Adult connections · discreet",
  title,
  subtitle,
  primary,
  secondary,
}: Props) {
  const primaryClass =
    "stay-white inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold tracking-tight text-[#1a1204] shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] hover:bg-[#e4c45a]";
  const secondaryClass =
    "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/12";

  return (
    <section className="relative px-4 pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#f3c9a8] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
          </span>
          {eyebrow}
        </span>

        <h1 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primary.external ? (
            <a
              href={primary.href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className={primaryClass}
            >
              {primary.label}
            </a>
          ) : (
            <Link href={primary.href} rel="nofollow sponsored" className={primaryClass}>
              {primary.label}
            </Link>
          )}
          {secondary &&
            (secondary.external ? (
              <a href={secondary.href} className={secondaryClass}>
                {secondary.label}
              </a>
            ) : (
              <Link href={secondary.href} className={secondaryClass}>
                {secondary.label}
              </Link>
            ))}
        </div>

        <SilhouetteStack />
      </div>
    </section>
  );
}
