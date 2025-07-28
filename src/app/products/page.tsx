import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Clock, 
  ArrowRight,
  Sparkles,
  Users,
  Star,
  Bell,
  Download,
  Mail
} from "lucide-react";

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="spacing-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-verj-purple/50 border border-verj-violet/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="text-verj-violet icon-medium" />
              <span className="text-verj-light font-medium">Built by Verj Labs</span>
            </div>
            
            <h1 className="text-scale-1 font-bold mb-8 gradient-text font-poppins">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-verj-muted max-w-3xl mx-auto leading-relaxed font-lato">
              We're not just building for clients — we're also building for the world. 
              Explore the digital products we've created in-house, tools designed to solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product: The Halal Compass */}
      <section className="spacing-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Info */}
            <div className="animate-slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-verj-green/20 rounded-2xl">
                  <Compass className="text-verj-green icon-large" />
                </div>
                <div>
                  <h2 className="text-scale-2 font-bold text-white font-poppins">The Halal Compass</h2>
                  <div className="inline-flex items-center space-x-2 bg-verj-coral/20 border border-verj-coral/30 rounded-full px-4 py-1 mt-2">
                    <Clock className="text-verj-coral" size={16} />
                    <span className="text-verj-coral font-medium text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-verj-muted mb-8 font-lato leading-relaxed">
                A one-stop app for everything halal — restaurants, grocery stores, mosques, events, and gift shops — all in one place. 
                Find what's near you through maps, curated listings, and local ads that matter to your lifestyle.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-verj-blue icon-medium" />
                  <span className="text-verj-light">Location-based discovery with maps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-verj-green icon-medium" />
                  <span className="text-verj-light">Curated listings and reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-verj-coral icon-medium" />
                  <span className="text-verj-light">Community-driven recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="text-verj-violet icon-medium" />
                  <span className="text-verj-light">Event notifications and updates</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact?subject=Halal Compass Waitlist" 
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <Mail className="group-hover:scale-110 transition-transform icon-medium" />
                  <span>Join the Waitlist</span>
                </Link>
                <Link 
                  href="/contact?subject=Halal Compass Early Access" 
                  className="border-2 border-verj-green text-verj-green px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-verj-green hover:text-white transition-all duration-300 inline-flex items-center space-x-2 group"
                >
                  <Download className="group-hover:scale-110 transition-transform icon-medium" />
                  <span>Get Early Access</span>
                </Link>
              </div>
            </div>
            
            {/* Product Visual */}
            <div className="relative animate-slide-left">
              <div className="bento-card bento-card-large">
                <div className="space-y-6">
                  {/* App preview mockup */}
                  <div className="bg-verj-navy/80 shape-rounded-lg p-6 border border-verj-green/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Compass className="text-verj-green" size={24} />
                        <span className="text-verj-light font-semibold">Halal Compass</span>
                      </div>
                      <div className="w-2 h-2 bg-verj-green shape-circle animate-pulse-slow"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-verj-green/10 shape-rounded">
                        <div className="flex items-center space-x-3">
                          <MapPin className="text-verj-green" size={16} />
                          <span className="text-verj-light text-sm">Nearby Restaurants</span>
                        </div>
                        <span className="text-verj-green text-xs">12 found</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-verj-blue/10 shape-rounded">
                        <div className="flex items-center space-x-3">
                          <Star className="text-verj-blue" size={16} />
                          <span className="text-verj-light text-sm">Halal Grocery Stores</span>
                        </div>
                        <span className="text-verj-blue text-xs">8 found</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-verj-violet/10 shape-rounded">
                        <div className="flex items-center space-x-3">
                          <Users className="text-verj-violet" size={16} />
                          <span className="text-verj-light text-sm">Community Events</span>
                        </div>
                        <span className="text-verj-violet text-xs">3 upcoming</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-verj-green/20 rounded-full px-4 py-2">
                      <Download className="text-verj-green" size={16} />
                      <span className="text-verj-green text-sm font-medium">Launching on App Store</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy Section */}
      <section className="spacing-section relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bento-card bento-card-gradient-1 animate-fade-in">
            <div className="relative z-10">
              <h2 className="text-scale-2 font-bold text-white font-poppins mb-6">
                We Build What We Believe In
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-lato">
                From AI-powered solutions to creative consumer apps, every product we create 
                starts with a real problem and a vision for a better solution.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1</div>
                  <div className="text-gray-300 text-sm">Product Live</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">2+</div>
                  <div className="text-gray-300 text-sm">In Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">∞</div>
                  <div className="text-gray-300 text-sm">Ideas Brewing</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/services" 
                  className="bg-white text-verj-navy px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 group"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-verj-navy transition-all duration-300"
                >
                  Share Your Idea
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="spacing-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-scale-2 font-bold mb-6 gradient-text font-poppins">More Products Coming Soon</h2>
            <p className="text-xl text-verj-muted max-w-2xl mx-auto">
              We're always building. Stay tuned for more innovative solutions from the Verj Labs workshop.
            </p>
          </div>
          
          <div className="bento-grid">
            <div className="bento-card bento-card-medium">
              <div className="p-4 bg-verj-violet/20 rounded-2xl mb-4 w-fit">
                <Sparkles className="text-verj-violet icon-large" />
              </div>
              <h3 className="content-primary mb-3">AI-Powered Tools</h3>
              <p className="content-secondary">Smart automation solutions for everyday workflows and business processes.</p>
            </div>
            
            <div className="bento-card bento-card-medium">
              <div className="p-4 bg-verj-blue/20 rounded-2xl mb-4 w-fit">
                <Users className="text-verj-blue icon-large" />
              </div>
              <h3 className="content-primary mb-3">Community Platforms</h3>
              <p className="content-secondary">Connecting people through shared interests and meaningful interactions.</p>
            </div>
            
            <div className="bento-card bento-card-medium">
              <div className="p-4 bg-verj-coral/20 rounded-2xl mb-4 w-fit">
                <Star className="text-verj-coral icon-large" />
              </div>
              <h3 className="content-primary mb-3">Creative Apps</h3>
              <p className="content-secondary">Tools that empower creativity and help people express themselves digitally.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
