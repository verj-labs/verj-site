
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            🔧 Built for Founders, by Founders
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Verj Labs, we help ideas become reality. Whether you're starting from scratch or need help scaling, 
              our services are designed to get you moving — fast, affordably, and founder-first.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom App Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom App Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From concept to code, we build sleek, scalable web and mobile apps.
              </p>
            </div>

            {/* MVP Prototyping */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">MVP Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Want to test an idea before going all in? We'll help you build just enough to launch smart.
              </p>
            </div>

            {/* Automation Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automation Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Save time and money with smart workflows and RPA — powered by years of automation expertise.
              </p>
            </div>

            {/* AI Integration */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From chatbots to intelligent workflows, we integrate AI where it matters.
              </p>
            </div>

            {/* Project & Product Management */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Project & Product Management</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We'll help you plan, prioritize, and deliver — without the bloat of big agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Work With</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We're open to all, but we especially love working with solo founders, small businesses, 
            and creative individuals looking to break into the tech world.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold">💬 Pricing: Contact us for a custom quote.</p>
            <p className="text-gray-600 dark:text-gray-300">We keep things lean, transparent, and founder-friendly.</p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">🧪 Our Products</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're not just building for clients — we're also building for the world. 
              Verj Labs creates in-house products we believe in.
            </p>
          </div>

          {/* Halal Compass */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">🕌</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">The Halal Compass</h3>
                <p className="text-green-600 font-semibold mb-4">(Coming Soon)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A one-stop app for everything halal — restaurants, grocery stores, mosques, events, and gift shops — all in one place.
                  Find what's near you through maps, curated listings, and local ads that matter to your lifestyle.
                </p>
                <p className="text-sm text-gray-500 mb-6">Launching soon on the App Store.</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your idea into something amazing.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
