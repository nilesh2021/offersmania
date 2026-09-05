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
      className="stay-white inline-flex items-center justify-center gap-2 rounded-full bg-[#4f00ca] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[0_8px_24px_rgba(79,0,202,0.35)] transition hover:scale-[1.02] hover:bg-[#3d00a0]"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
