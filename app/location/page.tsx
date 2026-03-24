import ContactSection from "@/contact/contact-section";
import ConversionWidgets from "@/components/conversion-widgets";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import EventsSection from "@/sections/events-section";

export default function LocationPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <PageHero
          eyebrow="Location"
          title="Project location and connectivity"
          description="Explore ANURAG GROUP's prime address in Bidhannagar, Durgapur."
          primaryHref="/contact"
          primaryLabel="Book Site Visit"
        />
        <EventsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
