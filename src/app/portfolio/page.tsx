

import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Digital products we've created — tools designed to solve real problems and push boundaries
          </p>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl">🕌</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">The Halal Compass</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Coming Soon</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A comprehensive app for the Muslim community — discover halal restaurants, grocery stores, mosques, events, and gift shops all in one place. 
                  Features include interactive maps, curated listings, community reviews, and location-based recommendations.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Interactive map with halal businesses</li>
                    <li>Community-driven reviews and ratings</li>
                    <li>Event listings and mosque prayer times</li>
                    <li>Smart recommendations based on location</li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Join the Waitlist
                  </Link>
                  <Link 
                    href="/contact" 
                    className="border border-green-500 text-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Get Early Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">More Projects in Development</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Jewelry App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Jewelry App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern e-commerce platform for jewelry businesses with AR try-on features and custom design tools.
              </p>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">In Development</span>
            </div>

            {/* Virtual TA */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual TA</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered teaching assistant to help educators manage coursework, grade assignments, and provide student support.
              </p>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">In Development</span>
            </div>

            {/* TraKart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">TraKart</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Smart shopping cart tracking and inventory management system for retail businesses.
              </p>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Teaser */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Client Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We've also helped numerous founders and businesses bring their ideas to life. 
            From MVP prototypes to full-scale applications, we've built solutions across various industries.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Want to see specific case studies?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We'd love to share detailed examples of our client work and discuss how we can help with your project.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
