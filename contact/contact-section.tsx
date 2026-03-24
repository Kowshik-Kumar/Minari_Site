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
    <section id="contact" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Book Site Visit"
            title="Speak with our property advisor"
            description="Share your details and get complete project information, pricing, and site visit support."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Contact</p>
              <p className="mt-2 text-2xl text-white">093337 94182</p>

              <p className="mt-6 text-sm uppercase tracking-[0.14em] text-zinc-400">Office Address</p>
              <p className="mt-2 text-zinc-200">
                A-17, Meghmallar Sarani, Bidhannagar, Durgapur, West Bengal 713212
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="tel:09333794182">Call Now</CtaButton>
                <CtaButton href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property" variant="ghost">
                  WhatsApp
                </CtaButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.14em] text-zinc-400">Lead Form</p>

              <label className="mb-3 block text-sm text-zinc-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mb-5 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/70"
                placeholder="Enter your name"
                required
              />

              <label className="mb-3 block text-sm text-zinc-200" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mb-5 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/70"
                placeholder="Enter phone number"
                required
              />

              <label className="mb-3 block text-sm text-zinc-200" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mb-6 h-28 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/70"
                placeholder="Share your preferred budget, BHK type, or visit timing"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-950 transition hover:bg-amber-200"
              >
                Get Property Details
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
