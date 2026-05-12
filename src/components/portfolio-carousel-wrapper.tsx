"use client";

import dynamic from "next/dynamic";

const PortfolioCarouselInner = dynamic(
  () => import("@/components/portfolio-carousel").then((m) => m.PortfolioCarousel),
  { ssr: false }
);

export function PortfolioCarouselWrapper() {
  return <PortfolioCarouselInner />;
}
