type Props = {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
};

export default function Badge({
  children,
  className = "",
  pulse = false,
}: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-[var(--card)] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-fg backdrop-blur-md ${className}`}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
      )}
      {children}
    </span>
  );
}
