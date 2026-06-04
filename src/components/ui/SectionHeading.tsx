type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "default" | "large";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "default",
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const titleSize =
    size === "large"
      ? "text-4xl md:text-5xl"
      : "text-3xl md:text-4xl";

  return (
    <div className={`${alignClass} mb-10`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-400/90">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-3" : ""} ${titleSize} font-bold tracking-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-slate-400 ${align === "center" ? "mx-auto max-w-xl" : ""}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-0.5 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
