export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
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
    name: "María Clara Montoya Builes",
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
    name: "José Manuel Arias",
    text: "Mis mejores piezas en NeoTradi las tengo gracias a Joan, siempre impecable su trabajo",
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
    name: "Bany Sosa",
    text: "Para mí es el mejor artista neotradicional de Medellín, recomendadísimo",
    rating: 5,
    photoUri: "https://lh3.googleusercontent.com/a-/ALV-UjVAhhTL8xN8oya33chJRfD4zNREy6ySxbdIQv8WsFEsogvm9fwJ=w64-h64-c-rp-mo-br100",
  },
  {
    name: "Yuleimy Grisales",
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
    slug: "bases-comportamiento-adecuado-estudio",
    title: "Bases para un comportamiento adecuado en el estudio",
    image: "/images/blog-1.jpg.png",
  },
  {
    slug: "consejos-antes-de-hacerte-tattoo",
    title: "Consejos antes de hacerte un tatuaje",
    image: "/images/blog-2.jpg.png",
  },
  {
    slug: "cuidar-tatuaje-manera-correcta",
    title: "Cómo cuidar tu tatuaje de una manera correcta",
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
  { label: "Instagram", href: "https://www.instagram.com/joanrobayo/" },
  { label: "WhatsApp", href: "https://wa.me/573146148297?text=Hola!%20Quiero%20cotizar%20un%20tattoo" },
  { label: "Privacy Policy", href: "#" },
  { label: "Studio Guidelines", href: "#" },
] as const;

export const SOCIAL_PROOF_STATS = [
  { number: "14+", label: "Años de experiencia" },
  { number: "1.000+", label: "Tatuajes realizados" },
  { number: "5.0", label: "Estrellas en Google" },
  { number: "100%", label: "Clientes felices" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Cuéntanos tu idea",
    description:
      "Agenda una consulta gratis y cuéntanos lo que tienes en mente. Sin compromiso, solo conversamos sobre tu proyecto.",
  },
  {
    step: 2,
    title: "Diseñamos juntos",
    description:
      "Creamos un diseño único y personalizado para ti. Ajustamos cada detalle hasta que sea exactamente lo que quieres.",
  },
  {
    step: 3,
    title: "Tatuaje profesional",
    description:
      "Ejecutamos tu tatuaje con los más altos estándares de higiene y calidad en nuestro estudio en El Poblado, Medellín.",
  },
  
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Duele hacerse un tatuaje?",
    answer:
      "La sensación varía según la zona del cuerpo y tu umbral de dolor. La mayoría lo describe como una molestia soportable. Usamos técnicas y equipos modernos para minimizar las molestias. Además, zonas con más carne duelen menos que áreas óseas.",
  },
  {
    question: "¿Cómo sé qué estilo de tatuaje me queda mejor?",
    answer:
      "Durante tu consulta gratis analizamos tu idea, la zona del cuerpo y el resultado que buscas. Te recomendamos el estilo que mejor se adapte: realismo, neotradicional o línea fina. También podemos combinar estilos.",
  },
  {
    question: "¿Cuánto tiempo dura una sesión?",
    answer:
      "Depende del tamaño y complejidad del diseño. Una sesión típica dura entre 2 y 4 horas. Los trabajos grandes pueden requerir múltiples sesiones con intervalos de 2 a 4 semanas para permitir la cicatrización.",
  },
  {
    question: "¿Cómo cuido mi tatuaje después?",
    answer:
      "Te daremos instrucciones detalladas por escrito. Lo básico: mantenerlo limpio, hidratado con crema especial, evitar el sol, no rascar, no sumergir en agua (piscina, mar, tina) durante las primeras 2-3 semanas.",
  },
  {
    question: "¿Aceptan pagos con tarjeta?",
    answer:
      "Sí, aceptamos efectivo y transferencias bancarias. Consulta los métodos de pago disponibles al momento de agendar tu cita.",
  },
] as const;

export interface PricingTier {
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    title: "minimal",
    description: "Tatuajes pequeños y minimalistas. Ideal para tu primer diseño o detalles sutiles.",
    price: "Desde $200.000 COP",
    features: ["Diseño personalizado", "1 sesión", "Línea fina", "Revisión gratuita"],
  },
] as const;
