import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter, Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JoanRobayo Tattoo | Tatuajes en Medellín",
  description:
    "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
  keywords: [
    "tatuajes Medellín",
    "tatuador Medellín",
    "realismo Medellín",
    "neotradicional Medellín",
    "fineline Medellín",
    "tattoo studio Medellín",
    "Joan Robayo",
  ],
  openGraph: {
    title: "JoanRobayo Tattoo | Tatuajes en Medellín",
    description:
      "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
    locale: "es_CO",
    type: "website",
    siteName: "JoanRobayo Tattoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "JoanRobayo Tattoo | Tatuajes en Medellín",
    description:
      "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} ${manrope.variable} ${notoSerif.variable} dark`}
    >
      <body className="bg-background text-on-background min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "JoanRobayo Tattoo",
              description:
                "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
              url: "https://joanrobayotattoo.com",
              telephone: "+57 3146148297",
              email: "joansr91@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medellín",
                addressRegion: "Antioquia",
                addressCountry: "CO",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
