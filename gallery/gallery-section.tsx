"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const photos = [
  {
    title: "Tower Elevation View",
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Construction Progress",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Completed Building",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Interior Development",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="Project sites, progress, and completed spaces"
            description="A visual look at our construction quality, execution discipline, and finished project outcomes."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.1}>
              <div className="glass-surface group relative overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={1100}
                  height={760}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04080f]/92 via-[#04080f]/20 to-transparent transition group-hover:from-[#04080f]/70" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-2xl text-white">{photo.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#d8ceb8]">Anurag Group Construction Showcase</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
