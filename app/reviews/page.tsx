import ContactSection from "@/contact/contact-section";
import ConversionWidgets from "@/components/conversion-widgets";
import PageHero from "@/components/page-hero";
import SiteFooter from "@/footer/site-footer";
import SiteNavbar from "@/navbar/site-navbar";
import ReviewsSection from "@/sections/reviews-section";

export default function ReviewsPage() {
  return (
    <div className="bg-[#09090b]">
      <SiteNavbar />
      <main className="pb-24">
        <PageHero
          eyebrow="Reviews"
          title="What homebuyers say about ANURAG GROUP"
          description="Read trusted feedback from customers in Durgapur."
          primaryHref="/contact"
          primaryLabel="Book Site Visit"
        />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ConversionWidgets />
    </div>
  );
}
