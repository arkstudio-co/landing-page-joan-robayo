import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StylesSection } from "@/components/styles-section";
import { TattooCulture } from "@/components/tattoo-culture";
import { Testimonials } from "@/components/testimonials";
import { PortfolioCarouselWrapper } from "@/components/portfolio-carousel-wrapper";
import { HowItWorks } from "@/components/how-it-works";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <StylesSection />
        <TattooCulture />
        <Testimonials />
        <PortfolioCarouselWrapper />
        <HowItWorks />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
