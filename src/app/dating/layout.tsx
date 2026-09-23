import DatingShell from "@/components/dating/DatingShell";

export default function DatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DatingShell>{children}</DatingShell>;
}
