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
    "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-sm hover:opacity-90",
  secondary:
    "border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] hover:border-[var(--line-strong)] hover:bg-[var(--card-hover)]",
  ghost:
    "border border-transparent bg-transparent text-muted hover:border-line hover:bg-[var(--card-hover)] hover:text-fg",
  accent:
    "stay-white bg-brand text-white shadow-sm hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-11 px-6 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  external,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`;

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
