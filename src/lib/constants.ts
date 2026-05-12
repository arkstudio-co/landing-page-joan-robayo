export const NAV_LINKS = [
  { label: "Home", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const STYLES = [
  { title: "Realismo", image: "/images/realismo.jpg.png" },
  { title: "Neotradicional", image: "/images/neotradicional.jpg.png" },
  { title: "Línea Fina", image: "/images/lineafina.jpg.png" },
] as const;

export const CATEGORIES = [
  { title: "ARTIST", image: "/images/artist.jpg.jpg" },
  { title: "CONTACT", image: "/images/contact.jpg.jpg" },
  { title: "PAINTS", image: "/images/paints.jpg.jpg" },
] as const;

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  photoUri?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "María clara Montoya Builes",
    text: "Conozco el trabajo de Joan desde muchos años atrás y siempre, siempre voy a considerarlo de los mejores tatuadores de la ciudad de Medellín. Su arte es de admirar. Es delicado y presta atención al detalle.",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a/ACg8ocIDDJeQgoCTC6KYtv5Da7872yDKZXGpQ9EZh-TZLcbpvxd4ew=w64-h64-c-rp-mo-br100",
  },
  {
    name: "Johan Franco",
    text: "Sin duda la mejor experiencia. Todo el profesionalismo, confianza y talento en Joan con su capacidad artistica y sumado a los años desarrollando su técnica",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjVqDeY11OdducHcIAckf3daIDVU-Ii6BOvJw4CieZOvhh-PI-3z=w64-h64-c-rp-mo-br100",
  },
  {
    name: "Jose Manuel Arias",
    text: "Mos mejores piezas en NeoTradi las tengo gracias a Joan siempre impecable su trabajo",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjXgx_P4Xa-vwQ50Sl3ehQdWZjePrKmCaDQ9QEHcvZ374m3x_V8=w64-h64-c-rp-mo-br100",
  },
  {
    name: "Sergio Escobar",
    text: "The best in Colombia! 100% happy with the results of my tattoo!!",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjXmOeOZxuZg4vRzuUNZtFTlSRPM5pTIogcKoYY1W6Yya3Ez9vY=w64-h64-c-rp-mo-br100",
  },
  {
    name: "BANY SOSA",
    text: "Para mí es el mejor artista neotradicional de Medellín, recomendadisimo",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjVAhhTL8xN8oya33chJRfD4zNREy6ySxbdIQv8WsFEsogvm9fwJ=w64-h64-c-rp-mo-br100",
  },
  {
    name: "yuleimy grisales",
    text: "Lo mejor del mundo, mi tatuador de confianza. 100% recomendado",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjV0v2iMxR3LnmXSfpfIkJR4sieWJPapbcUiKvIBzo4JYoVgn9UH=w64-h64-c-rp-mo-br100",
  },
];

function carouselPath(i: number): string {
  const ext = i === 12 || i === 15 ? "jpg" : "png";
  return `/images/tattoo-medellin-carrusel-${i}.${ext}`;
}

export const PORTFOLIO_IMAGES = Array.from({ length: 16 }, (_, i) =>
  carouselPath(i + 1)
);

export const BLOG_POSTS = [
  {
    title: "Bases para un comportamiento adecuado en el estudio",
    image: "/images/blog-1.jpg.png",
  },
  {
    title: "Consejos antes de hacerte un tattoo",
    image: "/images/blog-2.jpg.png",
  },
  {
    title: "Como cuidar tu tatuaje de una manera correcta",
    image: "/images/blog-3.jpg.png",
  },
] as const;

export const CONTACT_INFO = {
  address: "Poblado, Medellín, Colombia",
  hours: "Lunes a Sábado: 10:00 am - 8:00 pm\nDomingos y festivos, bajo cita previa",
  email: "joansr91@gmail.com",
  phone: "+57 3146148297",
} as const;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/meennjyn";

export const FOOTER_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Studio Guidelines", href: "#" },
] as const;
