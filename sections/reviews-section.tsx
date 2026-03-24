"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const testimonials = [
  {
    quote:
      "The apartment layout is practical, premium, and perfect for families. Site visit experience was smooth.",
    name: "Sourav M.",
  },
  {
    quote:
      "Great location in Bidhannagar with easy connectivity. The team explained all details transparently.",
    name: "Priyanka D.",
  },
  {
    quote:
      "Quality construction and reasonable pricing made ANURAG GROUP our first choice in Durgapur.",
    name: "Arijit B.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#09090b] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Reviews"
            title="Trusted by homebuyers in Durgapur"
            description="A strong reputation built on quality, transparency, and customer satisfaction."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 px-5 py-3">
            <span className="font-display text-3xl text-amber-300">4.6</span>
            <span className="text-zinc-200">⭐ Average Rating (38 reviews)</span>
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
