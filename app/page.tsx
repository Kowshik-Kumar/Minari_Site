import Link from "next/link";
import ConversionWidgets from "@/components/conversion-widgets";
import Container from "@/components/container";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import HeroSection from "@/sections/hero-section";

const pages = [
  { title: "Gallery", description: "Project exterior, interior, and surroundings", href: "/gallery" },
  { title: "Property Details", description: "Location, type, rating, and contact details", href: "/details" },
  { title: "Location", description: "Address, map, and area highlight", href: "/location" },
  { title: "Reviews", description: "4.6 rating and customer testimonials", href: "/reviews" },
  { title: "Why Choose Us", description: "Prime location, quality, and value proposition", href: "/why-us" },
  { title: "Book Visit", description: "Lead form, call, and WhatsApp actions", href: "/contact" },
];

export default function Home() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <HeroSection />
        <section className="bg-[#0d0d10] py-20 sm:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-300">
                Explore Sections
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Browse every section on dedicated pages
              </h2>
              <p className="mt-4 text-zinc-300 md:text-lg">
                Navigate directly to the page you need for a cleaner and faster experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => (
                <Link
                  key={page.title}
                  href={page.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-300/60 hover:bg-white/[0.08]"
                >
                  <p className="font-display text-2xl text-white">{page.title}</p>
                  <p className="mt-3 text-zinc-300">{page.description}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.14em] text-amber-300 transition group-hover:text-amber-200">
                    Open Page
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
