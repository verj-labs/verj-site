
import Link from "next/link";
import { 
  Target, 
  Rocket, 
  Heart, 
  Code,
  Lightbulb,
  ArrowRight,
  Mail,
  Coffee,
  Zap,
  Building,
  Flag
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text font-poppins">
              About Verj Labs
            </h1>
            <p className="text-xl md:text-2xl text-verj-muted max-w-4xl mx-auto leading-relaxed font-lato mb-12">
              Where bold ideas become real products. We're a small, focused team with big ambitions, 
              building digital solutions that are actually useful — for people, for businesses, for the world.
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape w-64 h-64 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full top-20 right-20 opacity-5" />
          <div className="floating-shape w-48 h-48 bg-gradient-to-r from-verj-coral to-verj-green rounded-full bottom-20 left-20 opacity-5" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">Our Story</h2>
            <p className="text-xl text-verj-muted max-w-3xl mx-auto">
              It all started with a problem we wanted to solve — and the belief that our combined expertise could build something better.
            </p>
          </div>
          
          {/* Story Bento Grid */}
          <div className="bento-grid">
            {/* The Beginning */}
            <div className="bento-card bento-card-large animate-slide-up">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-verj-violet/20 rounded-xl">
                  <Lightbulb className="text-verj-violet" size={48} />
                </div>
                <div className="flex-1">
                  <h3 className="content-primary mb-4">The Beginning</h3>
                  <p className="content-secondary text-lg leading-relaxed">
                    At Verj Labs, it all started with a problem we wanted to solve — and the belief that our combined expertise could build something better.
                    We're a small, focused team with big ambitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Composition */}
            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.1s"}}>
              <div className="text-center">
                <div className="p-4 bg-verj-blue/20 rounded-xl inline-block mb-4">
                  <Code className="text-verj-blue" size={40} />
                </div>
                <h3 className="content-primary mb-3">Automation Specialist</h3>
                <p className="content-secondary">
                  Deep experience in RPA, agentic workflows, and AI-powered systems.
                </p>
              </div>
            </div>

            <div className="bento-card bento-card-medium animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="text-center">
                <div className="p-4 bg-verj-coral/20 rounded-xl inline-block mb-4">
                  <Building className="text-verj-coral" size={40} />
                </div>
                <h3 className="content-primary mb-3">Software Developer</h3>
                <p className="content-secondary">
                  A seasoned engineer who can build just about anything from scratch.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bento-card bento-card-large animate-slide-up" style={{animationDelay: "0.3s"}}>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-verj-green/20 rounded-xl">
                  <Target className="text-verj-green" size={48} />
                </div>
                <div className="flex-1">
                  <h3 className="content-primary mb-4">Our Mission</h3>
                  <p className="content-secondary text-lg leading-relaxed">
                    Our mission is simple: to build digital products that are actually useful — for people, for businesses, for the world. 
                    Whether it's an app we believe in or a tool you need built from the ground up, we bring our skills, vision, and curiosity to every line of code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Pride Section - Special Highlight */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bento-card bento-card-xl bento-card-gradient-1 text-center relative overflow-hidden">
            {/* Canadian Flag Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 border-2 border-white/50 relative">
                  {/* Simplified flag design */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-red-500/30"></div>
                  <div className="absolute right-0 top-0 w-2 h-full bg-red-500/30"></div>
                  <div className="absolute left-2 right-2 top-1/2 transform -translate-y-1/2">
                    <div className="w-1 h-1 bg-red-500/50 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <Flag className="text-white mx-auto mb-6" size={64} />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-poppins">
                We're proudly Canadian.
                <br />
                <span className="text-3xl md:text-4xl">And proudly different.</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our working style is casual, creative, and deeply collaborative — just two friends using tech to make good things happen. 
                If you're looking for flashy jargon and bloated agencies, we're probably not your fit. 
                But if you want thoughtful builders who care about what they ship — welcome to Verj Labs.
              </p>
            </div>

            {/* Background Canadian-themed elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="floating-shape w-32 h-32 bg-red-500/10 rounded-full top-10 left-10 animate-float" />
              <div className="floating-shape w-24 h-24 bg-white/5 rounded-full bottom-10 right-20 animate-gentle-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">What Drives Us</h2>
            <p className="text-xl text-verj-muted max-w-3xl mx-auto">
              Together, we decided to stop waiting for the right opportunity and start creating it.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bento-card bento-card-small text-center animate-fade-in">
              <Heart className="text-verj-coral mx-auto mb-4" size={48} />
              <h3 className="content-primary mb-4">Purpose-Driven</h3>
              <p className="content-secondary">
                We build what we believe in. Every project starts with purpose and ends with impact.
              </p>
            </div>
            
            <div className="bento-card bento-card-small text-center animate-fade-in" style={{animationDelay: "0.1s"}}>
              <Coffee className="text-verj-blue mx-auto mb-4" size={48} />
              <h3 className="content-primary mb-4">Collaborative</h3>
              <p className="content-secondary">
                Casual, creative, and deeply collaborative — we're just friends making good things happen.
              </p>
            </div>
            
            <div className="bento-card bento-card-small text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Zap className="text-verj-violet mx-auto mb-4" size={48} />
              <h3 className="content-primary mb-4">Thoughtful Builders</h3>
              <p className="content-secondary">
                No flashy jargon or bloated processes. Just thoughtful builders who care about what they ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bento-card bento-card-large bento-card-gradient-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-poppins">Ready to Build Something Great?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you have an idea that needs building or want to explore what we're creating, let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary group">
                <Mail className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Get in Touch
              </Link>
              <Link href="/products" className="btn-primary group">
                <Rocket className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                See Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
