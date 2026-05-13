import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { CategoryNav } from "@/components/category-nav";
import { StylesSection } from "@/components/styles-section";
import { HowItWorks } from "@/components/how-it-works";
import { TattooCulture } from "@/components/tattoo-culture";
import { Testimonials } from "@/components/testimonials";
import { PortfolioCarouselWrapper } from "@/components/portfolio-carousel-wrapper";
import { PricingFAQ } from "@/components/pricing-faq";
import { CTASection } from "@/components/cta-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <CategoryNav />
        <StylesSection />
        <HowItWorks />
        <TattooCulture />
        <Testimonials />
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
