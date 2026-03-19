import ContactSection from "@/contact/contact-section";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";

export default function ContactPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Find Minari in Dhanbad and connect for bookings"
          description="Reach out for dining reservations, banquet inquiries, and celebration planning with our team."
          primaryHref="tel:+919022173925"
          primaryLabel="Call Now"
        />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}