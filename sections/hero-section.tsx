"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import CtaButton from "@/components/cta-button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28" id="home">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#09090b]" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] items-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-200 backdrop-blur-lg">
            4.6 ★ • 38 Reviews • Durgapur
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            ANURAG GROUP
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-200 sm:text-lg">
            Premium Residential Apartments in Durgapur
          </p>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Thoughtfully planned homes in a prime Bidhannagar location with quality construction and
            modern lifestyle amenities.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton href="tel:09333794182">Call Now</CtaButton>
            <CtaButton href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property" variant="ghost">
              WhatsApp
            </CtaButton>
            <CtaButton href="#contact" variant="ghost">
              Book Site Visit
            </CtaButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
