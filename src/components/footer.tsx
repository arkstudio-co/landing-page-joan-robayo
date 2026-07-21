import Image from "next/image";
import {
  FOOTER_LINKS,
  FOOTER_CONTACT,
  FOOTER_LOCATION,
  FOOTER_HOURS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 w-full py-20 bg-surface-container-low">
      <div className="max-w-[85%] mx-auto flex flex-col items-center space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full text-center md:text-start">
          <div className="flex justify-center md:justify-start">
            <Image
              alt="JoanRobayo Tattoo"
              src="/images/logo.png"
              width={512}
              height={362}
              className="h-28 w-auto grayscale invert opacity-80"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-gold uppercase text-[10px] tracking-[0.2em] font-[family-name:var(--font-cinzel)] italic">
              Contáctanos
            </h4>
            <div className="space-y-2 text-gray-400 text-xs tracking-[0.1em]">
              <p>
                <a
                  href={`tel:+57${FOOTER_CONTACT.phone}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {FOOTER_CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {FOOTER_CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={FOOTER_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  {FOOTER_CONTACT.instagram}
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gold uppercase text-[10px] tracking-[0.2em] font-[family-name:var(--font-cinzel)] italic">
              Encuéntranos
            </h4>
            <div className="space-y-2 text-gray-400 text-xs tracking-[0.1em]">
              <p>{FOOTER_LOCATION.street}</p>
              <p>{FOOTER_LOCATION.neighborhood}, {FOOTER_LOCATION.city}</p>
              <p>{FOOTER_LOCATION.department}, {FOOTER_LOCATION.country}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gold uppercase text-[10px] tracking-[0.2em] font-[family-name:var(--font-cinzel)] italic">
              Horarios
            </h4>
            <div className="space-y-2 text-gray-400 text-xs tracking-[0.1em]">
              <p>{FOOTER_HOURS.weekdays}</p>
              <p>{FOOTER_HOURS.holidays}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 uppercase text-[10px] tracking-[0.2em] hover:text-white transition-colors duration-300 font-[family-name:var(--font-cinzel)] italic"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-gold/80 font-[family-name:var(--font-cinzel)] text-sm italic subtitle uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Todos los derechos reservados - JoanRobayo Tattoo
        </p>
      </div>
    </footer>
  );
}
