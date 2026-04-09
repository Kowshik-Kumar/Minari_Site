"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <SectionTitle
              eyebrow="About Anurag Group"
              title="Trusted builders in Durgapur delivering quality with commitment"
              description="Anurag Group (Builders & Developers) is focused on creating durable residential and commercial spaces with uncompromising construction standards and professional project management."
            />
            <p className="max-w-3xl text-[#d8ceb8]">
              Our mission is to build landmarks that offer long-term value, structural reliability, and modern lifestyle comfort.
              Our vision is to be the most trusted construction and real estate development brand in the region.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-surface rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#f2debb]">Company Highlights</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-display text-3xl font-semibold text-white">5+ Years</p>
                  <p className="mt-1 text-sm text-[#d8ceb8]">Experience in construction and real estate delivery</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-display text-3xl font-semibold text-white">10+ Sites</p>
                  <p className="mt-1 text-sm text-[#d8ceb8]">Projects developed with quality-first execution</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-display text-3xl font-semibold text-white">100+ Clients</p>
                  <p className="mt-1 text-sm text-[#d8ceb8]">Families and investors who trust our work</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
