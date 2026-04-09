"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/container";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Trust", href: "/#trust" },
  { label: "Testimonials", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="glass-surface rounded-2xl px-5 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-display text-xl font-semibold tracking-wide text-white sm:text-2xl">
              ANURAG GROUP
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium uppercase tracking-[0.14em] text-zinc-200/90 transition before:absolute before:-bottom-1.5 before:left-0 before:h-px before:w-0 before:bg-[#e6bd75] before:transition-all hover:text-white hover:before:w-full"
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

            <Link
              href="/#contact"
              className="hidden rounded-full border border-[#edc678]/65 bg-[#edc678]/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#edc678]/26 md:inline-flex"
            >
              Get Quote
            </Link>
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
              <div className="glass-surface rounded-2xl p-4">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm uppercase tracking-[0.16em] text-zinc-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-full border border-[#edc678]/65 bg-[#edc678]/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                  >
                    Get Quote
                  </Link>
                </nav>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
