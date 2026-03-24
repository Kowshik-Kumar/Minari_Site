"use client";

import { motion } from "framer-motion";

const bookVisitText = encodeURIComponent("Hi, I'm interested in booking a site visit for your property.");

export default function StickyCtaBar() {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-zinc-950/95 p-3 backdrop-blur-xl"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-2">
        <a
          href="tel:09333794182"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-950 transition hover:bg-amber-200"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/50 hover:bg-white/15"
        >
          WhatsApp
        </a>
        <a
          href={`https://wa.me/919333794182?text=${bookVisitText}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/50 hover:bg-white/15"
        >
          Book Visit
        </a>
      </div>
    </motion.div>
  );
}
