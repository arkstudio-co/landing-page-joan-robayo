import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoryNav } from "@/components/category-nav";
import { StylesSection } from "@/components/styles-section";
import { HowItWorks } from "@/components/how-it-works";
import { TattooCulture } from "@/components/tattoo-culture";
import { TestimonialsWrapper } from "@/components/testimonials-wrapper";
import { PortfolioCarouselWrapper } from "@/components/portfolio-carousel-wrapper";
import { PricingFAQ } from "@/components/pricing-faq";
import { CTASection } from "@/components/cta-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <CategoryNav />
        <StylesSection />
        <HowItWorks />
        <TattooCulture />
        <TestimonialsWrapper />
        <PortfolioCarouselWrapper />
        <PricingFAQ />
        <CTASection
          title="¿Listo para tu próximo tatuaje?"
          description="Agenda una consulta gratis y sin compromiso. Transformemos tu idea en una obra de arte sobre tu piel."
          buttonText="Agenda tu cita gratis"
        />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
