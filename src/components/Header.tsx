"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItems from "./NavbarItems";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/verj_logo.svg"
                alt="Verj Labs Logo"
                width={64}
                height={32}
                // className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
              Labs
            </span>
          </Link>

          {/* Navigation Items */}
          <NavbarItems isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
