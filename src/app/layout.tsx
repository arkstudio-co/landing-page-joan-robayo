import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

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
    "medellin tattoo",
    "tattoo near me",
    "tattoo medellín",
    "neotraditional tattoo medellin",
    "tattoo nearby",
    "tattoo cerca de mi",
    "tatuajes en medellin",
    "tattoo neotradicional medellin",
  ],
  metadataBase: new URL("https://www.neotraditionaltattoo.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo2.jpg",
  },
  openGraph: {
    title: "JoanRobayo Tattoo | Tatuajes en Medellín",
    description:
      "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
    locale: "es_CO",
    type: "website",
    siteName: "JoanRobayo Tattoo",
    images: [
      {
        url: "/images/tattoo-medellin-carrusel-2.png",
        width: 1200,
        height: 630,
        alt: "Neotraditional Tattoo Medellin - Tattoo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JoanRobayo Tattoo | Tatuajes en Medellín",
    description:
      "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
    images: ["/images/tattoo-medellin-carrusel-2.png"],
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
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} dark`}
    >
      <body className="bg-background text-on-background min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-btn-bg focus:text-btn-text focus:px-6 focus:py-3 focus:rounded-xl focus:text-sm focus:uppercase focus:tracking-widest focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "JoanRobayo Tattoo",
              description:
                "Especialistas en Realismo, Neotradicional y Fineline. Tatuajes sólidos y duraderos en Medellín, Colombia.",
              url: "https://www.neotraditionaltattoo.com",
              image: "https://www.neotraditionaltattoo.com/images/tattoo-medellin-carrusel-2.png",
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
              sameAs: ["https://www.instagram.com/joanrobayo/"],
            }),
          }}
        />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
