"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We build what we believe.
            <br />
            <span className="text-primary">We build what you need.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Welcome to <span className="font-semibold text-primary">Verj Labs</span> — a digital innovation studio where bold ideas become real products.
            <br />
            Whether we're crafting our next breakthrough app or helping you bring your vision to life, we build with purpose and precision.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/portfolio" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            View Our Work
          </Link>
          <Link 
            href="/contact" 
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
