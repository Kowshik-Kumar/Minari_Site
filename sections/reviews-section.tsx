"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const testimonials = [
  {
    quote:
      "Anurag Group maintained excellent build quality and completed our project on schedule. The team was transparent from day one.",
    name: "Sourav Mukherjee",
    role: "Homeowner, Durgapur",
  },
  {
    quote:
      "From planning to handover, communication was clear and professional. We are very satisfied with the final result.",
    name: "Priyanka Das",
    role: "Client, Commercial Unit",
  },
  {
    quote:
      "Their reliability and attention to detail stood out. I would strongly recommend Anurag Group for serious construction work.",
    name: "Arijit Banerjee",
    role: "Property Investor",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Testimonials"
            title="What our clients say about working with us"
            description="Long-term trust is built through quality execution, reliability, and transparent communication."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#eec97e]/55 bg-[#eec97e]/12 px-5 py-3">
            <span className="font-display text-3xl text-[#f4dfb9]">4.8</span>
            <span className="text-[#f0e6d3]">Average Client Rating</span>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="glass-surface rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-1 text-[#ffcf67]" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M12 2.8 14.8 8l5.8.8-4.2 4.1 1 5.8-5.2-2.6-5.2 2.6 1-5.8L3.8 8.8 9.6 8 12 2.8Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#f2efe8]">“{item.quote}”</p>
                <p className="mt-5 text-sm uppercase tracking-[0.14em] text-[#f1deba]">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#c2b39a]">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
