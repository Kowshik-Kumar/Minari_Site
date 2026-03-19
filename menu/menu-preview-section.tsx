"use client";

import Container from "@/components/container";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

const categories = ["Starters", "Main Course", "Chinese", "Veg", "Non-Veg", "Desserts", "Beverages"];

const sampleItems = [
  { name: "Paneer Tikka Sizzler", category: "Starters", price: "₹260" },
  { name: "Butter Chicken", category: "Main Course", price: "₹360" },
  { name: "Veg Hakka Noodles", category: "Chinese", price: "₹220" },
  { name: "Mutton Rogan Josh", category: "Non-Veg", price: "₹390" },
  { name: "Sizzling Brownie", category: "Desserts", price: "₹180" },
  { name: "Fresh Lime Soda", category: "Beverages", price: "₹120" },
];

export default function MenuPreviewSection() {
  return (
    <section id="menu" className="bg-[#0d0d10] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Menu"
            title="Crafted flavors across every course"
            description="Average spend ₹200–₹400 per person. Premium plating, rich flavors, and generous portions."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-zinc-300"
              >
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {sampleItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-amber-300/70 hover:bg-white/[0.07]">
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{item.category}</p>
                </div>
                <p className="font-display text-xl text-amber-300">{item.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
