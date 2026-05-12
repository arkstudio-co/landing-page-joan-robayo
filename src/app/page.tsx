import { Hero } from "@/components/hero";
import { CategoryNav } from "@/components/category-nav";
import { StylesSection } from "@/components/styles-section";
import { TattooCulture } from "@/components/tattoo-culture";
import { Testimonials } from "@/components/testimonials";
import { PortfolioCarouselWrapper } from "@/components/portfolio-carousel-wrapper";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryNav />
      <StylesSection />
      <TattooCulture />
      <Testimonials />
      <PortfolioCarouselWrapper />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
