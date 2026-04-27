import React from "react";
import { Logo } from "./Logo";
import { MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate("home");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 space-y-12 md:space-y-0">
          <button 
            onClick={() => onNavigate("home")} 
            className="hover:opacity-80 transition-opacity"
            aria-label="Zur Startseite"
            type="button"
          >
            <Logo />
          </button>
          
          <nav aria-label="Footer Navigation">
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <button 
                onClick={() => handleLinkClick("services")} 
                className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
                type="button"
              >
                Leistungen
              </button>
              <button 
                onClick={() => handleLinkClick("about")} 
                className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
                type="button"
              >
                Über uns
              </button>
              <button 
                onClick={() => onNavigate("impressum")} 
                className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
                type="button"
              >
                Impressum
              </button>
              <button 
                onClick={() => onNavigate("datenschutz")} 
                className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
                type="button"
              >
                Datenschutz
              </button>
            </div>
          </nav>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between text-[11px] font-medium text-gray-400 tracking-wide">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Berliner+Str.+33,+21493+Schwarzenbek" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center space-x-2"
          >
            <MapPin size={12} />
            <span>Berliner Str. 33, 21493 Schwarzenbek</span>
          </a>
          <p className="mt-4 md:mt-0">&copy; {currentYear} CAN Gebäudereinigung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
