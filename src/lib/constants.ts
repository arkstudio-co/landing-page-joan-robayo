export const NAV_LINKS = [
  { label: "Portfolio", href: "#" },
  { label: "Aftercare", href: "#" },
  { label: "Contact", href: "#" },
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
  role: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mateo Garcés",
    role: "Coleccionista de Arte",
    text: "\"La atención al detalle en Oscuro no tiene comparación. Mi pieza neotradicional sanó perfectamente y es una verdadera obra de arte.\"",
    rating: 5,
  },
  {
    name: "Valeria Duque",
    role: "Diseñadora de Joyas",
    text: "\"Increíble estudio en Medellín. Todo el proceso fue profesional, higiénico y sobre todo, muy artístico. Definitivamente volveré.\"",
    rating: 5,
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
