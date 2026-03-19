import ContactSection from "@/contact/contact-section";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import GallerySection from "@/gallery/gallery-section";
import SiteNavbar from "@/navbar/site-navbar";

export default function GalleryPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="A visual walk through Minari's food, interiors, and celebrations"
          description="Explore signature dishes, refined dining corners, and the event moments that define the Minari experience."
          primaryHref="/contact"
          primaryLabel="Plan a Photoshoot Event"
        />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}