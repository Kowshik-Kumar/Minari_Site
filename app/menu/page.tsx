import ContactSection from "@/contact/contact-section";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import MenuPreviewSection from "@/menu/menu-preview-section";
import SiteNavbar from "@/navbar/site-navbar";

export default function MenuPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Menu"
          title="Course by course, flavors that feel rich, bold, and memorable"
          description="From signature starters to indulgent desserts, our menu is tuned for comfort, variety, and modern presentation."
          primaryHref="/contact"
          primaryLabel="Reserve a Table"
        />
        <MenuPreviewSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}