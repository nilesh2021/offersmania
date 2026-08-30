type Accent = "brand" | "dating" | "ai" | "software";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "default" | "large";
  accent?: Accent;
};

const eyebrowColor: Record<Accent, string> = {
  brand: "text-violet-500",
  dating: "text-pink-500",
  ai: "text-cyan-600",
  software: "text-emerald-600",
};

const barColor: Record<Accent, string> = {
  brand: "from-violet-500 to-cyan-400",
  dating: "from-pink-500 to-purple-500",
  ai: "from-cyan-400 to-violet-500",
  software: "from-emerald-400 to-teal-500",
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "default",
  accent = "dating",
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const titleSize =
    size === "large" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";

  return (
    <div className={`${alignClass} mb-10`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor[accent]}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display ${eyebrow ? "mt-3" : ""} ${titleSize} font-bold tracking-tight text-fg`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 leading-relaxed text-muted ${align === "center" ? "mx-auto max-w-xl" : ""}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-0.5 w-16 rounded-full bg-gradient-to-r ${barColor[accent]} ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
