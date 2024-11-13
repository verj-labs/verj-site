"use client";

import { useTheme } from "@/libs/theme";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const {theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="bg-[#aaa] bg-opacity-30 backdrop-blur-lg p-4 fixed top-0 left-0 w-full h-16 z-40">
        <div className="flex justify-between items-center">
          <h1 className=" m-0">VERJ Labs</h1>

          <nav className="flex gap-4">
            <Link
              href="/"
              className="bg-transparent text-white border-none cursor-pointer text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white border-none cursor-pointer text-lg"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent text-white border-none cursor-pointer text-lg"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-white border-none cursor-pointer text-lg"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border-none cursor-pointer text-lg"
            >
              Contact
            </Link>
          </nav>

          <div onClick={() => toggleTheme()}>{theme}</div>
        </div>
      </header>
      <div className=" h-16"/>
    </>
  );
};

export default Header;
