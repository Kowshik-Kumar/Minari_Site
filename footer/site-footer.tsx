import Container from "@/components/container";
import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Trust", href: "/#trust" },
  { label: "Testimonials", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="section-shell border-t border-white/10 py-14">
      <Container>
        <div className="grid gap-10 text-sm text-[#d8ceb8] md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold text-white">ANURAG GROUP</p>
            <p className="mt-3">Builders & Developers delivering premium residential and commercial landmarks with trust and quality.</p>
          </div>

          <div>
            <p className="mb-3 text-white">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-white">Contact Info</p>
            <p>
              A-17, Meghmallar Sarani, Bidhannagar, Durgapur, West Bengal 713212
            </p>
            <p className="mt-3">Phone: 093337 94182</p>
            <p className="mt-2">Email: hello@anuraggroup.in</p>
          </div>

          <div>
            <p className="mb-3 text-white">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="tel:09333794182" className="hover:text-white">
                Call Now
              </a>
              <a
                href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=A-17%2C+Meghmallar+Sarani%2C+Bidhannagar%2C+Durgapur%2C+West+Bengal+713212"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Google Maps
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.15em] text-[#b9a886]">
          © {new Date().getFullYear()} ANURAG GROUP. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
