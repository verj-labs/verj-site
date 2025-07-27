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
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
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
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-verj-violet/20 shadow-2xl shadow-verj-violet/20">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-verj-muted hover:text-verj-light hover:bg-verj-violet/20 transition-all duration-300 font-medium font-lato rounded-xl group"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center justify-between">
                  {link.label}
                  <span className="w-0 h-px bg-gradient-violet-blue transition-all duration-300 group-hover:w-6" />
                </span>
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary w-full flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles size={18} />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
