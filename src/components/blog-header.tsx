import Image from "next/image";
import { MobileMenu } from "./mobile-menu";

const BLOG_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "#articles" },
  { label: "Contact", href: "#subscribe" },
] as const;

export function BlogHeader() {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gold/20 shadow-[0_4px_20px_rgba(206,152,97,0.1)] fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center h-24 px-4 md:px-16 max-w-[1440px] mx-auto">
        <a href="/">
          <div className="text-gold font-[family-name:var(--font-noto-serif)]">
            <Image
              alt="JoanRobayo Tattoo Logo"
              src="/images/logo.png"
              width={512}
              height={362}
              className="h-16 w-auto object-contain"
            />
          </div>
        </a>
        <div className="hidden md:flex items-center space-x-12">
          {BLOG_NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 uppercase text-xs font-semibold tracking-widest hover:text-gold transition-all duration-300 ease-in-out font-[family-name:var(--font-noto-serif)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9CB198] text-black px-8 py-3 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest scale-95 active:opacity-80 transition-transform hover:bg-[#acc8a6] inline-block rounded-xl"
          >
            Book Appointment
          </a>
          <MobileMenu links={BLOG_NAV_LINKS} />
        </div>
      </nav>
    </header>
  );
}

