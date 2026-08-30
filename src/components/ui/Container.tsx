type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
};

export default function Container({
  children,
  className = "",
  size = "lg",
}: Props) {
  return (
    <div className={`mx-auto w-full ${sizes[size]} px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
