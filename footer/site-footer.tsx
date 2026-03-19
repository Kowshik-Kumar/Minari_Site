import Container from "@/components/container";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/event" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] py-14">
      <Container>
        <div className="grid gap-10 text-sm text-zinc-300 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-white">Minari</p>
            <p className="mt-2">मीनारी – रेस्टोरेंट & बैंक्वेट हॉल</p>
            <p className="mt-3">Open daily until 11 PM</p>
          </div>

          <div>
            <p className="mb-3 text-white">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-white">Address</p>
            <p>
              Aman Market, Baliapur Road, near Surya Realcon, Karmatand, Damodarpur, Jharkhand
              826005
            </p>
          </div>

          <div>
            <p className="mb-3 text-white">Social</p>
            <div className="flex flex-col gap-2">
              <Link href="#" className="hover:text-white">
                Instagram
              </Link>
              <Link href="#" className="hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="hover:text-white">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.15em] text-zinc-500">
          © {new Date().getFullYear()} Minari Restaurant & Banquet Hall. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
