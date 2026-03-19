import ContactSection from "@/contact/contact-section";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import EventsSection from "@/sections/events-section";

export default function EventPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Events"
          title="Host birthdays, kitty nights, and milestone gatherings in style"
          description="Our flexible banquet setup is built for elegant celebrations with coordinated service and premium ambience."
          primaryHref="/contact"
          primaryLabel="Book Your Event"
        />
        <EventsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}