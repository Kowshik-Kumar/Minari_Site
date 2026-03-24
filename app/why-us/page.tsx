import ContactSection from "@/contact/contact-section";
import ConversionWidgets from "@/components/conversion-widgets";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import ServicesSection from "@/sections/services-section";

export default function WhyUsPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <PageHero
          eyebrow="Why Choose Us"
          title="Why homebuyers trust ANURAG GROUP"
          description="Discover the core strengths that make this project a strong choice in Durgapur."
          primaryHref="/contact"
          primaryLabel="Get Property Details"
        />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
