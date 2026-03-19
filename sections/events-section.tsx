"use client";

import CtaButton from "@/components/cta-button";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import Image from "next/image";

const events = ["Birthday Parties", "Kitty Parties", "Corporate Gatherings", "Small Weddings"];

const gallery = [
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80",
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#09090b] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Banquet & Events"
            title="A flexible banquet space for milestone moments"
            description="Celebrate birthdays, kitty parties, corporate get-togethers, and elegant small weddings in one premium venue."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-3">
            {events.map((event) => (
              <span
                key={event}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.15em] text-zinc-300"
              >
                {event}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((image, index) => (
            <Reveal key={image} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={image}
                  alt="Minari event setup"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10">
          <CtaButton href="#contact">Book Your Event</CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
