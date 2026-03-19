"use client";

import CtaButton from "@/components/cta-button";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Visit Minari in the heart of Dhanbad"
            description="Aman Market, Baliapur Road, near Surya Realcon, Karmatand, Damodarpur, Jharkhand 826005"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Phone</p>
              <p className="mt-2 text-2xl text-white">+91 90000 00000</p>

              <p className="mt-6 text-sm uppercase tracking-[0.14em] text-zinc-400">Hours</p>
              <p className="mt-2 text-zinc-200">Open daily until 11 PM</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="tel:+919000000000">Call Now</CtaButton>
                <CtaButton href="https://wa.me/919000000000" variant="ghost">
                  WhatsApp Booking
                </CtaButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Minari Google Maps"
                src="https://www.google.com/maps?q=Aman%20Market%2C%20Baliapur%20Road%2C%20Karmatand%2C%20Damodarpur%2C%20Jharkhand%20826005&output=embed"
                className="h-[320px] w-full"
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
