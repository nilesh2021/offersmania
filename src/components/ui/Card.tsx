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
  const classes = `surface-card rounded-2xl ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`group block transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--card-hover)] ${classes}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
