"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import CtaButton from "@/components/cta-button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 section-shell" id="home">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(8,12,18,0.92),rgba(9,13,21,0.78)_40%,rgba(12,16,24,0.94))]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#d6a64f]/20 blur-[95px]" />
        <div className="absolute bottom-20 right-8 h-72 w-72 rounded-full bg-[#ff8b3d]/15 blur-[100px]" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="mb-6 inline-flex rounded-full border border-[#e8c178]/55 bg-[#e8c178]/16 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f4dfb9] backdrop-blur-lg">
            Anurag Group | Builders & Developers
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Building Trust. Creating Landmarks.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#f3e8cf] sm:text-xl">
            Premium Construction & Real Estate Development
          </p>
          <p className="mt-4 max-w-3xl text-[#d8ceb8] sm:text-lg">
            From residential communities to commercial spaces, we deliver durable construction,
            transparent execution, and trusted project delivery across Durgapur.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <CtaButton href="/#projects">View Projects</CtaButton>
            <CtaButton href="/#contact" variant="ghost">
              Get a Quote
            </CtaButton>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-3"
          >
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "100+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="glass-surface rounded-2xl p-4">
                <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-[#d9c8a7]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden flex-1 justify-end xl:flex"
        >
          <div className="glass-surface w-full max-w-md rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#f4dfb9]">Why Choose Us</p>
            <p className="mt-4 text-2xl font-semibold text-white">Reliable construction from foundation to handover</p>
            <ul className="mt-6 space-y-3 text-sm text-[#d8ceb8]">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Quality Materials</span>
                <span>Certified</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>On-Time Delivery</span>
                <span>Priority</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>Transparent Process</span>
                <span>Always</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
