import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function Card({
  children,
  className = "",
  href,
}: Props) {
  const classes = `surface-card rounded-xl ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`group block transition-colors duration-200 hover:bg-[var(--card-hover)] ${classes}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
