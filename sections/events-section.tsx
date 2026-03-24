"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

export default function EventsSection() {
  return (
    <section id="location" className="bg-[#09090b] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Location"
            title="Prime location in Bidhannagar, Durgapur"
            description="Well-connected address with access to schools, healthcare, shopping, and major roads."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.15em] text-zinc-400">Address</p>
              <p className="mt-3 text-lg text-zinc-100">
                A-17, Meghmallar Sarani, Bidhannagar, Durgapur, West Bengal 713212
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.15em] text-zinc-400">Area Highlight</p>
              <p className="mt-3 text-zinc-300">Prime location in Bidhannagar, Durgapur</p>
              <a
                href="https://maps.google.com/?q=A-17%2C+Meghmallar+Sarani%2C+Bidhannagar%2C+Durgapur%2C+West+Bengal+713212"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="ANURAG GROUP Location"
                src="https://www.google.com/maps?q=A-17%2C%20Meghmallar%20Sarani%2C%20Bidhannagar%2C%20Durgapur%2C%20West%20Bengal%20713212&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
