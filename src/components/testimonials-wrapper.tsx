"use client";

import dynamic from "next/dynamic";

const TestimonialsInner = dynamic(
  () => import("@/components/testimonials").then((m) => m.Testimonials),
  { ssr: false }
);

export function TestimonialsWrapper() {
  return <TestimonialsInner />;
}
