"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const photos = [
  {
    title: "Signature Dishes",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Restaurant Interior",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banquet Hall",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Live Celebrations",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Gallery"
            title="A visual taste of Minari ambience"
            description="Every corner is designed for warm dining, celebratory gatherings, and picture-perfect moments."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={800}
                  height={720}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-2xl text-white">{photo.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
