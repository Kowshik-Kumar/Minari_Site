"use client";

import { FormEvent, useState } from "react";
import CtaButton from "@/components/cta-button";
import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Hi, I'm interested in your property. Name: ${name || "N/A"}, Phone: ${phone || "N/A"}, Message: ${message || "N/A"}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919333794182?text=${encoded}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Start your project discussion with our team"
            description="Send your inquiry for residential, commercial, or renovation requirements and get a detailed consultation."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="glass-surface rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-[#f2debb]">Contact</p>
              <p className="mt-2 text-2xl font-semibold text-white">093337 94182</p>

              <p className="mt-6 text-sm uppercase tracking-[0.14em] text-[#f2debb]">Office Address</p>
              <p className="mt-2 text-[#f0e6d3]">
                A-17, Meghmallar Sarani, Bidhannagar, Durgapur, West Bengal 713212
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#d8ceb8]">
                <p>Office hours: Monday to Saturday, 10:00 AM to 7:00 PM.</p>
                <p>Discuss project planning, quotation, timelines, and site visit support.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="tel:09333794182">Call Now</CtaButton>
                <CtaButton href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property" variant="ghost">
                  WhatsApp
                </CtaButton>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Anurag Group Office Location"
                  src="https://www.google.com/maps?q=A-17%2C%20Meghmallar%20Sarani%2C%20Bidhannagar%2C%20Durgapur%2C%20West%20Bengal%20713212&output=embed"
                  className="h-52 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass-surface rounded-2xl p-6"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.14em] text-[#f2debb]">Inquiry Form</p>

              <label className="mb-3 block text-sm text-[#f0e6d3]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mb-5 w-full rounded-xl border border-white/15 bg-[#101621]/80 px-4 py-3 text-white outline-none transition placeholder:text-[#9e9583] focus:border-[#efc77d]/80"
                placeholder="Enter your name"
                required
              />

              <label className="mb-3 block text-sm text-[#f0e6d3]" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mb-5 w-full rounded-xl border border-white/15 bg-[#101621]/80 px-4 py-3 text-white outline-none transition placeholder:text-[#9e9583] focus:border-[#efc77d]/80"
                placeholder="Enter phone number"
                required
              />

              <label className="mb-3 block text-sm text-[#f0e6d3]" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mb-6 h-28 w-full rounded-xl border border-white/15 bg-[#101621]/80 px-4 py-3 text-white outline-none transition placeholder:text-[#9e9583] focus:border-[#efc77d]/80"
                placeholder="Share your property type, location, budget, and timeline"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#efc77d]/70 bg-[linear-gradient(140deg,#efc77d,#d99f43)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1b1306] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(140deg,#f3cf88,#dfa950)]"
              >
                Submit Inquiry
              </button>

              <a
                href="tel:09333794182"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.11]"
              >
                Prefer a call instead?
              </a>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
