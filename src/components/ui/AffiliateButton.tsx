import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AffiliateButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      rel="nofollow sponsored"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:scale-[1.02] hover:from-pink-400 hover:to-rose-500"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
