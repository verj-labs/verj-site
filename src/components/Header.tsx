"use client";

import { useTheme } from "@/libs/theme";
import React from "react";

const Header: React.FC = () => {
  const {theme, toggleTheme } = useTheme()

  return (
    <header className="bg-blue-700 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white m-0">My Website</h1>

        <nav className="flex gap-4">
          <a
            href="/"
            className="bg-transparent text-white border-none cursor-pointer text-lg"
          >
            Home
          </a>
          <a
            href="/about"
            className="bg-transparent text-white border-none cursor-pointer text-lg"
          >
            About
          </a>
          <a
            href="/about"
            className="bg-transparent text-white border-none cursor-pointer text-lg"
          >
            Portfolio
          </a>
          <a
            href="/services"
            className="bg-transparent text-white border-none cursor-pointer text-lg"
          >
            Services
          </a>
          <a
            href="/contact"
            className="bg-transparent text-white border-none cursor-pointer text-lg"
          >
            Contact
          </a>
        </nav>
        
        <div onClick={() => toggleTheme()}>
          {theme}

        </div>
      </div>
    </header>
  );
};

export default Header;
