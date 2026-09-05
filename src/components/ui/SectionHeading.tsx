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
  brand: "text-brand",
  dating: "text-brand",
  ai: "text-brand",
  software: "text-brand",
};

const barColor: Record<Accent, string> = {
  brand: "from-[#4f00ca] to-[#7b3dff]",
  dating: "from-[#4f00ca] to-[#7b3dff]",
  ai: "from-[#4f00ca] to-[#7b3dff]",
  software: "from-[#4f00ca] to-[#7b3dff]",
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
