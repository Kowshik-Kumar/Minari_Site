"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const testimonials = [
  {
    quote: "Great ambience, rich flavors, and highly cooperative staff for birthday events.",
    name: "Aman S.",
  },
  {
    quote: "Best place in Dhanbad for kitty parties. Food quality and service are consistently good.",
    name: "Neha R.",
  },
  {
    quote: "Banquet hall setup was elegant and well-managed for our family celebration.",
    name: "Rahul K.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#09090b] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Reviews"
            title="Loved by families, friends, and event hosts"
            description="4.7 rating with 400+ reviews across dining and celebration experiences."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 px-5 py-3">
            <span className="font-display text-3xl text-amber-300">4.7</span>
            <span className="text-zinc-200">⭐ Average Rating (400+ reviews)</span>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-zinc-200">“{item.quote}”</p>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-zinc-400">{item.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
