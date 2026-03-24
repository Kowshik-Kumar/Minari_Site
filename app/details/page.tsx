import ContactSection from "@/contact/contact-section";
import ConversionWidgets from "@/components/conversion-widgets";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import MenuPreviewSection from "@/menu/menu-preview-section";
import SiteNavbar from "@/navbar/site-navbar";

export default function DetailsPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <PageHero
          eyebrow="Property Details"
          title="Project overview and key information"
          description="Check essential details before scheduling your site visit."
          primaryHref="/contact"
          primaryLabel="Get Property Details"
        />
        <MenuPreviewSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
