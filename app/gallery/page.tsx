import ContactSection from "@/contact/contact-section";
import ConversionWidgets from "@/components/conversion-widgets";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import GallerySection from "@/gallery/gallery-section";
import SiteNavbar from "@/navbar/site-navbar";

export default function GalleryPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <PageHero
          eyebrow="Gallery"
          title="Property visuals of ANURAG GROUP"
          description="Explore project exterior, interior spaces, and the surrounding neighborhood."
          primaryHref="/contact"
          primaryLabel="Book Site Visit"
        />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}