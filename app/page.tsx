import ContactSection from "@/contact/contact-section";
import SiteFooter from "@/footer/site-footer";
import GallerySection from "@/gallery/gallery-section";
import MenuPreviewSection from "@/menu/menu-preview-section";
import SiteNavbar from "@/navbar/site-navbar";
import EventsSection from "@/sections/events-section";
import HeroSection from "@/sections/hero-section";
import ReviewsSection from "@/sections/reviews-section";
import ServicesSection from "@/sections/services-section";

export default function Home() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MenuPreviewSection />
        <EventsSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
