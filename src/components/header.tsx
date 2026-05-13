import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./mobile-menu";

export function Header({ contactHref = "#contact" }: { contactHref?: string }) {
  const links = NAV_LINKS.map((link) =>
    link.label === "Contact" ? { ...link, href: contactHref } : link
  );
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gold/20 shadow-[0_4px_20px_rgba(206,152,97,0.1)] fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center h-24 px-4 md:px-16 max-w-[1440px] mx-auto">
        <div className="text-gold font-[family-name:var(--font-noto-serif)]">
          <Image
            alt="JoanRobayo Tattoo Logo"
            src="/images/logo.png"
            width={512}
            height={362}
            className="h-16 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
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
            className="bg-gold text-black px-8 py-3 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest scale-95 active:opacity-80 transition-transform hover:bg-[#e0ab75] inline-block"
          >
            Book Appointment
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
