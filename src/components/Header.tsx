"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItems from "./NavbarItems";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-verj-violet/20 shadow-lg shadow-verj-violet/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <Image
                src="/verj_logo.svg"
                alt="Verj Labs Logo"
                width={48}
                height={48}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-verj-violet/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <span className="text-2xl font-bold gradient-text font-poppins">
              Labs
            </span>
          </Link>

          {/* Navigation Items */}
          <NavbarItems isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
      
      {/* Background floating shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="floating-shape w-32 h-32 bg-gradient-violet-blue rounded-full top-4 left-1/4 animate-pulse-slow" />
        <div className="floating-shape w-20 h-20 bg-gradient-coral-violet rounded-full top-6 right-1/3 animate-bounce-slow" />
      </div>
    </header>
  );
};

export default Header;
