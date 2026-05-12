import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gold/20 shadow-[0_4px_20px_rgba(206,152,97,0.1)] fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center h-24 px-16 max-w-[1440px] mx-auto">
        <div className="text-gold font-[family-name:var(--font-noto-serif)]">
          <img
            alt="JoanRobayo Tattoo Logo"
            className="h-16 w-auto object-contain"
            src="/images/logo.png"
          />
        </div>
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 uppercase text-xs font-semibold tracking-widest hover:text-gold transition-all duration-300 ease-in-out font-[family-name:var(--font-noto-serif)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/573146148297?text=Hola!%20quiero%20cotizar%20mi%20proximo%20tattoo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-black px-8 py-3 font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest scale-95 active:opacity-80 transition-transform hover:bg-[#e0ab75] inline-block"
        >
          Book Appointment
        </a>
      </nav>
    </header>
  );
}
