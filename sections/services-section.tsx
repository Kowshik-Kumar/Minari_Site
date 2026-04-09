"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const services = [
  {
    title: "Residential Construction",
    description: "Modern homes and apartment projects built with structural strength and premium finishes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M3 8h18" />
      </svg>
    ),
  },
  {
    title: "Commercial Projects",
    description: "Office and business spaces planned for functionality, durability, and long-term asset value.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M4 7h16M4 17h16" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="17" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Renovation",
    description: "End-to-end renovation services to upgrade existing properties with quality craftsmanship.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "Interior Development",
    description: "Functional and elegant interior execution tailored for modern living and workspaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 18h16M6 15l4-4 3 2 5-6" />
        <path d="M15 7h3v3" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Construction services built on quality and reliability"
            description="From planning to execution, every service is delivered with professional supervision, transparent communication, and high build standards."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="glass-surface group rounded-2xl p-6"
              >
                <div className="inline-flex rounded-xl border border-[#efc77d]/45 bg-[#efc77d]/12 p-3 text-[#f3dfba]">
                  {service.icon}
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#d9c8a7]">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-[#d8ceb8]">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-[#efc77d]/80" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
