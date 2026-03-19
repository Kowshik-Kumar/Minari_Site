import ContactSection from "@/contact/contact-section";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import PageHero from "@/components/page-hero";
import ServicesSection from "@/sections/services-section";

export default function ServicesPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Spaces and services crafted for intimate meals and big celebrations"
          description="Minari blends polished dining with event-ready hospitality so every visit feels elevated and effortless."
          primaryHref="/contact"
          primaryLabel="Plan Your Visit"
        />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}