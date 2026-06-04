import { redirect } from "next/navigation";
import { offers } from "@/data/offers";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GoPage({
  params,
}: Props) {
  const { slug } = await params;

 const url = offers[slug as keyof typeof offers];

  if (!url) {
    redirect("/");
  }

  redirect(url);
}