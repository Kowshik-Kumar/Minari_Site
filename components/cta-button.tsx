import Link from "next/link";
import { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
};

export default function CtaButton({ href, children, variant = "solid" }: CtaButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5";
  const solidClass =
    "border border-[#e9bc67]/70 bg-[linear-gradient(140deg,#f0c875,#d89f43)] text-[#1b1306] shadow-[0_10px_30px_rgba(214,166,79,0.32)] hover:bg-[linear-gradient(140deg,#f4cf82,#dfa852)]";
  const ghostClass =
    "border border-[#e5c285]/45 bg-white/[0.07] text-white hover:border-[#f0c875]/65 hover:bg-[#f0c875]/12";
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
