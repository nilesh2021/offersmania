import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-lg shadow-black/10 hover:opacity-90",
  secondary:
    "border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] backdrop-blur-md hover:border-[var(--line-strong)]",
  ghost:
    "border border-line bg-card text-fg hover:bg-[var(--card-hover)]",
  accent:
    "stay-white bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:from-violet-400 hover:to-indigo-400",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  external,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} rel="nofollow sponsored">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
