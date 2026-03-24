"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/container";

const navItems = [
  { label: "Gallery", href: "/gallery" },
  { label: "Details", href: "/details" },
  { label: "Location", href: "/location" },
  { label: "Reviews", href: "/reviews" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-display text-xl text-white sm:text-2xl">
              ANURAG GROUP
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.14em] text-zinc-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="md:hidden text-sm uppercase tracking-[0.16em] text-white"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {open ? "Close" : "Menu"}
            </button>

            <a
              href="tel:09333794182"
              className="hidden rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950 transition hover:bg-amber-200 md:inline-flex"
            >
              Call Now
            </a>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <Container className="pt-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm uppercase tracking-[0.16em] text-zinc-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
