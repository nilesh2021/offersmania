import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AffiliateButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-pink-600
        px-8
        py-4
        font-semibold
        text-white
        transition
        hover:bg-pink-700
      "
    >
      {children}
    </Link>
  );
}