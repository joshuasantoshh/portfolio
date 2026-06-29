"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Projects", href: "#projects", index: "05" },
  { label: "Credentials", href: "#credentials", index: "06" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      sections.push("contact");
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* HUD Logo */}
        <a href="#home" className="text-xl font-bold flex items-center gap-1 group font-mono tracking-wider">
          <span className="text-primary font-bold animate-pulse">//</span>
          <span className="text-white hover:text-primary transition-colors duration-200">JOSHUA.SEC</span>
        </a>

        {/* Desktop Nav links (HUD Monospace Style) */}
        <nav className="hidden md:flex items-center gap-8 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs tracking-widest transition-colors hover:text-primary relative py-1 flex items-center gap-1.5 ${
                activeSection === link.href.substring(1) ? "text-white" : "text-gray-500"
              }`}
            >
              <span className="text-[9px] text-primary/50">{link.index}</span>
              <span>{link.label.toUpperCase()}</span>
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button (HUD Cut corner style) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-[10px] uppercase tracking-wider font-bold font-mono border transition-all duration-200 ${
              activeSection === "contact"
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                : "border-primary/30 text-gray-300 hover:border-primary hover:text-white hover:shadow-[0_0_10px_rgba(255,0,60,0.15)]"
            }`}
            style={{
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
            }}
          >
            <span>ESTABLISH.CON</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-primary hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full glass-nav border-b border-primary/20 px-6 py-6 md:hidden flex flex-col gap-4 shadow-2xl text-left font-mono"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest py-2 flex items-center gap-2 border-b border-white/5 transition-colors ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="text-[10px] text-primary/40">{link.index}</span>
                <span>{link.label.toUpperCase()}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-3 bg-primary text-white font-bold text-xs tracking-widest rounded-lg"
            >
              <span>ESTABLISH.CON</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
