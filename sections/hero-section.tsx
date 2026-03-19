"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import CtaButton from "@/components/cta-button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#09090b]" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] items-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-200 backdrop-blur-lg">
            4.7 ★ • 400+ Reviews • Open Till 11 PM
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Premium Dining Experience in Dhanbad
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg">
            Restaurant • Banquet Hall • Event Hosting
          </p>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Best Restaurant in Dhanbad | Kitty Party & Birthday Party Organizer
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton href="#contact">Book Table</CtaButton>
            <CtaButton href="#menu" variant="ghost">
              View Menu
            </CtaButton>
            <CtaButton href="#events" variant="ghost">
              Book Event
            </CtaButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
