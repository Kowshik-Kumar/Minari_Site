import ConversionWidgets from "@/components/conversion-widgets";
import ContactSection from "@/contact/contact-section";
import SiteFooter from "@/footer/site-footer";
import GallerySection from "@/gallery/gallery-section";
import SiteNavbar from "@/navbar/site-navbar";
import AboutSection from "@/sections/about-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import ReviewsSection from "@/sections/reviews-section";
import ServicesSection from "@/sections/services-section";
import TrustSection from "@/sections/trust-section";

export default function Home() {
  return (
    <div>
      <SiteNavbar />
      <main className="pb-28">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TrustSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
