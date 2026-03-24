"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const photos = [
  {
    title: "Exterior",
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Interior",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Living Space",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Surroundings",
    src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="Explore the project experience"
            description="Exterior architecture, refined interiors, and a neighborhood built for convenient living."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={1100}
                  height={760}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition group-hover:from-black/65" />
                <p className="absolute bottom-4 left-4 font-display text-2xl text-white">{photo.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
