"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Our Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative text-verj-muted hover:text-verj-light transition-all duration-300 font-medium font-lato group"
          >
            {link.label}
            {/* Modern underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-violet-blue transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary flex items-center space-x-2 ml-6"
        >
          <Sparkles size={18} />
          <span>Get Started</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-3 text-verj-light hover:text-verj-violet transition-all duration-300 rounded-xl glass"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Semi-transparent overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Slide-out menu */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] glass border-l border-verj-violet/20 shadow-2xl shadow-verj-violet/20 z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Menu header */}
              <div className="flex items-center justify-between p-6 border-b border-verj-violet/20">
                <span className="text-xl font-bold gradient-text font-poppins">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-verj-light hover:text-verj-violet transition-colors duration-300 rounded-lg hover:bg-verj-violet/20"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 px-6 py-8 space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-4 text-verj-muted hover:text-verj-light hover:bg-verj-violet/20 transition-all duration-300 font-medium font-lato rounded-xl group relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInRight 0.5s ease-out forwards'
                    }}
                  >
                    <span className="flex items-center justify-between relative z-10">
                      {link.label}
                      <span className="w-0 h-px bg-gradient-to-r from-verj-violet to-verj-blue transition-all duration-300 group-hover:w-6" />
                    </span>
                    {/* Hover background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-verj-violet/10 to-verj-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
              
              {/* CTA button at bottom */}
              <div className="p-6 border-t border-verj-violet/20">
                <Link
                  href="/contact"
                  className="btn-primary w-full flex items-center justify-center space-x-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles size={20} />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
