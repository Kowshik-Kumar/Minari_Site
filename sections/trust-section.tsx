"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const trustMetrics = [
  {
    value: "10+",
    label: "Projects Completed",
    description: "Residential and commercial developments delivered with quality construction standards.",
  },
  {
    value: "100+",
    label: "Happy Clients",
    description: "Families and investors who trust our transparent process and dependable delivery.",
  },
  {
    value: "5+",
    label: "Years Experience",
    description: "Hands-on expertise in planning, execution, and project handover management.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Trust & Performance"
            title="Numbers that reflect our credibility"
            description="Built through consistent quality, timely delivery, and long-term client confidence."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {trustMetrics.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 190, damping: 18 }}
                className="glass-surface rounded-2xl p-6"
              >
                <p className="font-display text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-lg font-medium text-[#f2debb]">{item.label}</p>
                <p className="mt-3 text-sm text-[#d8ceb8]">{item.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
