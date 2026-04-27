import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Leistungen", id: "services" },
    { name: "Über uns", id: "about" },
    { name: "Kontakt", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 apple-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <button onClick={() => onNavigate("home")} className="hover:opacity-80 transition-opacity">
          <Logo />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-[13px] font-medium uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="tel:+491737178468"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center space-x-2"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Anrufen</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-white border-b border-gray-100 md:hidden py-8 px-6 shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-lg font-medium text-gray-600 text-left hover:text-blue-600"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
