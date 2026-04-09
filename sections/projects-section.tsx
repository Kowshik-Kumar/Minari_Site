"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const projects = [
  {
    name: "Anurag Residency Phase I",
    location: "Bidhannagar, Durgapur",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Anurag Heights",
    location: "City Center, Durgapur",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Anurag Business Hub",
    location: "Benachity, Durgapur",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Anurag Green Enclave",
    location: "Muchipara, Durgapur",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585153986-1b6053b31d50?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Projects"
            title="Ongoing and completed landmarks"
            description="Explore selected residential and commercial developments delivered with strong quality standards and on-time execution."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 190, damping: 18 }}
                className="glass-surface group overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={780}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b10]/90 via-[#070b10]/15 to-transparent" />
                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                      project.status === "Completed"
                        ? "border border-[#eec97e]/65 bg-[#eec97e]/22 text-[#f6e2bd]"
                        : "border border-[#ff9e5f]/65 bg-[#ff9e5f]/20 text-[#ffd7bf]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl text-white">{project.name}</p>
                  <p className="mt-2 text-sm text-[#d8ceb8]">{project.location}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
