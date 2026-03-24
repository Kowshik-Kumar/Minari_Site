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
  const className = `${baseClass} ${variant === "solid" ? solidClass : ghostClass}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const isHttp = href.startsWith("http://") || href.startsWith("https://");

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (isHttp) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <a href={href} className={className}>{children}</a>;
}
