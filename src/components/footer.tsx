import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 w-full py-20 bg-surface-container-low">
      <div className="flex flex-col items-center justify-center text-center px-16 space-y-12">
        <div>
          <Image
            alt="JoanRobayo Tattoo"
            src="/images/logo.png"
            width={512}
            height={362}
            className="h-28 w-auto grayscale invert opacity-80"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 uppercase text-[10px] tracking-[0.2em] hover:text-white transition-colors duration-500 font-[family-name:var(--font-noto-serif)] italic"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-gold font-[family-name:var(--font-noto-serif)] text-sm italic subtitle uppercase tracking-widest opacity-60">
          &copy; 2021 Todos los derechos reservados - JoanRobayo Tattoo
        </p>
      </div>
    </footer>
  );
}
