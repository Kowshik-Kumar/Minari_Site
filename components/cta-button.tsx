import Link from "next/link";
import { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
};

export default function CtaButton({ href, children, variant = "solid" }: CtaButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300";
  const solidClass = "bg-amber-300 text-zinc-950 hover:bg-amber-200";
  const ghostClass = "border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10";

  return (
    <Link href={href} className={`${baseClass} ${variant === "solid" ? solidClass : ghostClass}`}>
      {children}
    </Link>
  );
}
