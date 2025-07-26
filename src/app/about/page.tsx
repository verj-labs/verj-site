
export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            👋 Two friends using tech to make good things happen
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed mb-6">
              At Verj Labs, it all started with a problem we wanted to solve — and the belief that our combined expertise could build something better.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              We're a small, focused team with big ambitions. One of us is an automation specialist with deep experience in RPA, agentic workflows, and AI-powered systems. The other is a seasoned software developer — the kind of engineer who can build just about anything from scratch. Together, we decided to stop waiting for the right opportunity and start creating it.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Our mission is simple: <strong>to build digital products that are actually useful</strong> — for people, for businesses, for the world. Whether it's an app we believe in or a tool you need built from the ground up, we bring our skills, vision, and curiosity to every line of code.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">We're proudly Canadian. And proudly different.</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <p className="text-lg leading-relaxed mb-6">
              Our working style is casual, creative, and deeply collaborative — just two friends using tech to make good things happen.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              If you're looking for flashy jargon and bloated agencies, we're probably not your fit. But if you want thoughtful builders who care about what they ship — <strong>welcome to Verj Labs</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Product-first thinking</h3>
              <p className="text-gray-600 dark:text-gray-300">We don't just write code — we solve problems and create value.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tech + design under one roof</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete solutions from initial concept to final deployment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible, fast, and founder-friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">We work at startup speed with startup understanding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
