"use client";

// src/components/HeroSection.js
import React, { Suspense, useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

import { Code, Brush, Monitor, Layers, PenTool, Shield, Settings, Database } from "lucide-react"; // Example icons from Lucide


const CircleGrid = () => {
  // Define icons, with a center item for the logo or any placeholder text
  const gridItems = [
    <Code />,
    <Brush />,
    <Monitor />,
    <Layers />,
    <div className="logo text-white font-bold">Verj Labs</div>,
    <PenTool />,
    <Shield />,
    <Settings />,
    <Database />,
  ];

  // State to manage the index of the hovered item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    float: {
      y: [0, 15, 0], // Up and down floating effect
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-4 relative"
      variants={containerVariants}
      animate="float"
    >
      {gridItems.map((icon, index) => (
        <motion.div
          key={index}
          className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg overflow-hidden group"
          initial={{ scale: 1 }}
          animate={{
            scale:
              hoveredIndex === index
                ? 1.3 // Scale up the hovered item
                : hoveredIndex !== null && (hoveredIndex === index - 1 || hoveredIndex === index + 1)
                ? 1.1 // Scale up neighboring items
                : 1,
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Icons with opacity transition */}
          <motion.div
            className="absolute text-white opacity-0 group-hover:opacity-100 transition duration-300"
            style={{ fontSize: "1.5rem" }}
          >
            {icon}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};




export default function HeroSection() { 

  return (
    <section className="pt-10 px-40 flex items-center min-h-[600px] gap-16">
      {/* Text Content on the Left */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Building Digital Solutions That Work for You</h1>
        <p className="text-lg md:text-xl mb-8">Empowering businesses with cutting-edge technology and a human touch.</p>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>

      {/* Graphics on the Right */}
      <div className="">
        <CircleGrid />
      </div>
    </section>
  );
}
