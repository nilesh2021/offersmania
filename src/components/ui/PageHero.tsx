import Container from "./Container";
import Badge from "./Badge";

type Accent = "brand" | "dating" | "ai" | "software";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  accent?: Accent;
  actions?: React.ReactNode;
  stats?: { value: string; label: string }[];
};

const glows: Record<Accent, string> = {
  brand:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,0,202,0.28),transparent)]",
  dating:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,0,202,0.28),transparent)]",
  ai: "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,0,202,0.28),transparent)]",
  software:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,0,202,0.28),transparent)]",
};

const gradientText: Record<Accent, string> = {
  brand: "from-[#4f00ca] via-[#7b3dff] to-[#9b6dff]",
  dating: "from-[#4f00ca] via-[#7b3dff] to-[#9b6dff]",
  ai: "from-[#4f00ca] via-[#7b3dff] to-[#9b6dff]",
  software: "from-[#4f00ca] via-[#7b3dff] to-[#9b6dff]",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "brand",
  actions,
  stats,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-fg md:py-32">
      <div className={`pointer-events-none absolute inset-0 ${glows[accent]}`} />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative z-10 text-center">
        {eyebrow && (
          <Badge pulse className="mb-6">
            {eyebrow}
          </Badge>
        )}

        <h1 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {typeof title === "string" ? (
            <span
              className={`bg-gradient-to-r ${gradientText[accent]} bg-clip-text text-transparent`}
            >
              {title}
            </span>
          ) : (
            title
          )}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {subtitle}
          </p>
        )}

        {actions && (
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {actions}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-6 py-5">
                <p className="font-display text-2xl font-bold text-fg">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
