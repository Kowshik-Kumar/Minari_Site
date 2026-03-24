"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const propertyInfo = [
  { label: "Location", value: "Durgapur, West Bengal", icon: "📍" },
  { label: "Type", value: "Residential Apartments", icon: "🏢" },
  { label: "Rating", value: "4.6 (38 reviews)", icon: "⭐" },
  { label: "Phone", value: "093337 94182", icon: "📞" },
];

export default function MenuPreviewSection() {
  return (
    <section id="property-details" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Property Details"
            title="Everything you need to know at a glance"
            description="Transparent project information to help you make your home-buying decision faster."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {propertyInfo.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-300/60 hover:bg-white/[0.08]">
                <p className="text-2xl">{item.icon}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-zinc-400">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
