"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const services = [
  "Restaurant Dining",
  "Banquet Hall",
  "Birthday Parties",
  "Kitty Party Hosting",
  "Family Celebrations",
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#09090b] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Designed for everyday dining and unforgettable celebrations"
            description="From intimate dinners to joyful party nights, Minari combines warm hospitality with premium ambience."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{service}</h3>
                <p className="mt-3 text-sm text-zinc-300">
                  Curated setup, reliable hosting, and a refined environment built for comfort.
                </p>
                <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-amber-300/70" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
