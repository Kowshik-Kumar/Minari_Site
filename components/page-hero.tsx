"use client";

import CtaButton from "@/components/cta-button";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book Now",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#09090b] pb-14 pt-36 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-amber-300/15 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-slate-300/10 blur-3xl"
        />
      </div>

      <Container>
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-300">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-zinc-300 md:text-lg">{description}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-8">
          <div className="flex flex-wrap gap-3">
            <CtaButton href={primaryHref}>{primaryLabel}</CtaButton>
            <CtaButton href="/" variant="ghost">
              Back to Home
            </CtaButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}