
import HeroSection from "@/components/landing/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* What We Build Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Build</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the digital products we've created in-house — tools designed to solve real problems and push boundaries.
              From AI-powered solutions to creative consumer apps, we build what we believe in.
            </p>
          </div>
          <div className="text-center">
            <Link 
              href="/portfolio" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Browse Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Services for You</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Need help building your next big thing? We offer:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Custom App & Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">From concept to code, we build sleek, scalable solutions.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">MVP Prototyping & Product Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Test your idea before going all in with smart prototypes.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">AI Integration & Automation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Smart workflows and AI where it matters most.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Strategic Tech Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Expert guidance to turn ideas into reality.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">Let's turn your idea into something tangible.</p>
            <Link 
              href="/services" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Got an Idea Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Got an Idea?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We love new ideas — big, small, or half-baked. If you're looking for a tech partner to help you build, launch, or refine your product, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Share Your Idea
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Why Verj Labs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Verj Labs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold mb-2">Product-first thinking</h3>
                <p className="text-gray-600 dark:text-gray-300">We focus on building products that solve real problems.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold mb-2">Tech + design under one roof</h3>
                <p className="text-gray-600 dark:text-gray-300">Complete solutions from concept to deployment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold mb-2">Flexible, fast, and founder-friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">We work at startup speed with startup understanding.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold mb-2">We build what we believe</h3>
                <p className="text-gray-600 dark:text-gray-300">Passionate about every project we take on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
