export default function DatingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dating-night min-h-screen overflow-hidden">
      <div className="dating-grain" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div className="absolute -left-24 top-[-10%] h-[520px] w-[520px] rounded-full bg-rose-600/25 blur-[140px]" />
        <div className="absolute right-[-8%] top-[18%] h-[480px] w-[480px] rounded-full bg-fuchsia-700/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-1/3 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(244,63,94,0.22),transparent_55%)]" />
      </div>

      <div className="relative z-10 border-b border-white/10 bg-black/30 px-4 py-2.5 text-center text-xs tracking-wide text-[#f3c9a8] backdrop-blur-md">
        18+ only. Private adult connections. Stay discreet.
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
