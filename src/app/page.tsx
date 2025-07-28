
import HeroSection from "@/components/landing/HeroSection";
import Link from "next/link";
import { ArrowRight, Zap, Palette, Rocket, Heart, Code, Users, Lightbulb, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Bento Grid Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              What We Create
            </h2>
            <p className="text-xl text-verj-muted max-w-3xl mx-auto leading-relaxed">
              Explore our digital ecosystem — products born from passion, tools that solve real problems, 
              and innovations that push boundaries.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="bento-grid">
            {/* Featured Product - Large Card */}
            <div className="bento-card bento-card-hero bento-card-gradient-1 animate-fade-in">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="text-yellow-400" size={32} />
                    <span className="text-sm font-semibold text-verj-muted uppercase tracking-wide">Featured Product</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Halal Compass</h3>
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    AI-powered halal product verification app helping millions make informed choices. 
                    Featured in major tech publications and trusted by communities worldwide.
                  </p>
                </div>
                <Link href="/products" className="btn-secondary inline-flex items-center space-x-2 w-fit">
                  <span>Explore Our Products</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Service Cards */}
            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-verj-violet/20 rounded-xl">
                  <Code className="text-verj-violet" size={24} />
                </div>
                <div>
                  <h4 className="content-primary">Custom Development</h4>
                  <p className="content-secondary">From concept to code, we build sleek, scalable solutions that grow with your business.</p>
                </div>
              </div>
            </div>

            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.4s"}}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-verj-blue/20 rounded-xl">
                  <Palette className="text-verj-blue" size={24} />
                </div>
                <div>
                  <h4 className="content-primary">MVP & Prototyping</h4>
                  <p className="content-secondary">Test your ideas before going all-in with smart prototypes and rapid validation.</p>
                </div>
              </div>
            </div>

            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.6s"}}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-verj-coral/20 rounded-xl">
                  <Zap className="text-verj-coral" size={24} />
                </div>
                <div>
                  <h4 className="content-primary">AI Integration</h4>
                  <p className="content-secondary">Smart workflows and AI implementation where it matters most for your product.</p>
                </div>
              </div>
            </div>

            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.8s"}}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-verj-green/20 rounded-xl">
                  <Lightbulb className="text-verj-green" size={24} />
                </div>
                <div>
                  <h4 className="content-primary">Strategic Consulting</h4>
                  <p className="content-secondary">Expert guidance to transform ideas into market-ready digital products.</p>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bento-card bento-card-large bento-card-gradient-2 animate-fade-in" style={{animationDelay: "1s"}}>
              <div className="text-center h-full flex flex-col justify-center">
                <Rocket className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-white">Got an Idea?</h3>
                <p className="text-gray-200 mb-6">
                  We love new ideas — big, small, or half-baked. Let's turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Share Your Idea
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Book Discovery Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Why Choose Us Cards */}
            <div className="bento-card bento-card-small animate-slide-up" style={{animationDelay: "1.2s"}}>
              <div className="text-center">
                <Heart className="text-verj-coral mx-auto mb-3" size={32} />
                <h4 className="content-primary text-center">Product-First</h4>
                <p className="content-secondary text-center">We build products that solve real problems and create value.</p>
              </div>
            </div>

            <div className="bento-card bento-card-small animate-slide-up" style={{animationDelay: "1.4s"}}>
              <div className="text-center">
                <Users className="text-verj-blue mx-auto mb-3" size={32} />
                <h4 className="content-primary text-center">Full-Stack Team</h4>
                <p className="content-secondary text-center">Complete solutions from design to deployment under one roof.</p>
              </div>
            </div>

            <div className="bento-card bento-card-small animate-slide-up" style={{animationDelay: "1.6s"}}>
              <div className="text-center">
                <Zap className="text-verj-violet mx-auto mb-3" size={32} />
                <h4 className="content-primary text-center">Startup Speed</h4>
                <p className="content-secondary text-center">Fast, flexible, and founder-friendly approach to development.</p>
              </div>
            </div>

            <div className="bento-card bento-card-small animate-slide-up" style={{animationDelay: "1.8s"}}>
              <div className="text-center">
                <Star className="text-verj-green mx-auto mb-3" size={32} />
                <h4 className="content-primary text-center">Quality Focus</h4>
                <p className="content-secondary text-center">Passionate about every project, committed to excellence.</p>
              </div>
            </div>

            {/* Services CTA */}
            <div className="bento-card bento-card-large bento-card-gradient-3 animate-fade-in" style={{animationDelay: "2s"}}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h3>
                  <p className="text-gray-200 mb-6">
                    Join the founders and teams who trust us to bring their digital visions to life. 
                    Let's create something that matters.
                  </p>
                </div>
                <Link href="/services" className="btn-secondary inline-flex items-center space-x-2 w-fit">
                  <span>Explore Our Services</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape w-64 h-64 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full top-20 right-10 opacity-5" />
          <div className="floating-shape w-48 h-48 bg-gradient-to-r from-verj-coral to-verj-violet rounded-full bottom-20 left-10 opacity-5" />
          <div className="floating-shape w-32 h-32 bg-gradient-to-r from-verj-blue to-verj-green rounded-full top-1/2 left-1/3 opacity-5" />
        </div>
      </section>
    </div>
  );
}
