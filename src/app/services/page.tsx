import Link from "next/link";
import { 
  Code, 
  Rocket, 
  Zap, 
  Brain, 
  Target, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Users,
  Clock,
  DollarSign
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="spacing-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-verj-purple/50 border border-verj-violet/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="text-verj-violet icon-medium" />
              <span className="text-verj-light font-medium">Built for Founders, by Founders</span>
            </div>
            
            <h1 className="text-scale-1 font-bold mb-8 gradient-text font-poppins">
              Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-verj-muted max-w-3xl mx-auto leading-relaxed font-lato">
              From MVP to scale — we help transform your ideas into breakthrough products with speed, precision, and founder-friendly approach.
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape w-64 h-64 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full top-20 right-20 opacity-5 animate-pulse-slow" />
          <div className="floating-shape w-48 h-48 bg-gradient-to-r from-verj-coral to-verj-green rounded-full bottom-20 left-20 opacity-5 animate-float" />
        </div>
      </section>

      {/* Services Grid - Two Column Layout */}
      <section className="spacing-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            
            {/* Service 1: Custom App Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-verj-violet/20 rounded-2xl">
                    <Code className="text-verj-violet icon-large" />
                  </div>
                  <h2 className="text-scale-2 font-bold text-white font-poppins">Custom App Development</h2>
                </div>
                
                <p className="text-xl text-verj-muted mb-8 font-lato leading-relaxed">
                  From concept to code, we build sleek, scalable web and mobile applications that users love. 
                  Modern tech stack, clean design, and performance-focused architecture.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">React, Next.js, TypeScript Frontend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Node.js, Python, or Go Backend</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Cloud Deployment & CI/CD</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Mobile-first Responsive Design</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform icon-medium" />
                </Link>
              </div>
              
              {/* Visual Element */}
              <div className="relative animate-slide-left">
                <div className="bento-card bento-card-large">
                  <div className="space-y-6">
                    {/* Code representation */}
                    <div className="bg-verj-navy/80 shape-rounded-lg p-6 border border-verj-violet/20">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-verj-coral shape-circle"></div>
                        <div className="w-3 h-3 bg-yellow-400 shape-circle"></div>
                        <div className="w-3 h-3 bg-verj-green shape-circle"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-verj-violet to-verj-blue rounded w-3/4"></div>
                        <div className="h-2 bg-gradient-to-r from-verj-blue to-verj-green rounded w-1/2"></div>
                        <div className="h-2 bg-gradient-to-r from-verj-coral to-verj-violet rounded w-2/3"></div>
                        <div className="h-2 bg-gradient-to-r from-verj-green to-verj-blue rounded w-4/5"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 bg-verj-violet/20 shape-rounded text-center">
                        <Code className="text-verj-violet mx-auto mb-2" size={24} />
                        <div className="text-xs text-verj-light">Frontend</div>
                      </div>
                      <div className="p-3 bg-verj-blue/20 shape-rounded text-center">
                        <Zap className="text-verj-blue mx-auto mb-2" size={24} />
                        <div className="text-xs text-verj-light">Backend</div>
                      </div>
                      <div className="p-3 bg-verj-coral/20 shape-rounded text-center">
                        <Target className="text-verj-coral mx-auto mb-2" size={24} />
                        <div className="text-xs text-verj-light">Deploy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: MVP Development - Reversed Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual Element - Left Side */}
              <div className="relative animate-slide-right lg:order-first order-last">
                <div className="bento-card bento-card-gradient-1">
                  <div className="relative z-10 text-center">
                    <Rocket className="text-white mx-auto mb-4 animate-gentle-bounce" size={64} />
                    <h3 className="text-white font-semibold mb-4">MVP in 4-8 Weeks</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">2-4</div>
                        <div className="text-gray-300 text-sm">Weeks Design</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">4-6</div>
                        <div className="text-gray-300 text-sm">Weeks Dev</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-up lg:order-last order-first">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-verj-coral/20 rounded-2xl">
                    <Rocket className="text-verj-coral icon-large" />
                  </div>
                  <h2 className="text-scale-2 font-bold text-white font-poppins">MVP Development</h2>
                </div>
                
                <p className="text-xl text-verj-muted mb-8 font-lato leading-relaxed">
                  Test your idea fast with a lean, focused MVP. Get to market quickly, validate with real users, 
                  and iterate based on actual feedback — not assumptions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-verj-blue icon-medium" />
                    <span className="text-verj-light">4-8 week delivery timeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="text-verj-coral icon-medium" />
                    <span className="text-verj-light">Core features only — no bloat</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-verj-green icon-medium" />
                    <span className="text-verj-light">User testing & feedback loops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-verj-violet icon-medium" />
                    <span className="text-verj-light">Fixed pricing, no surprises</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="border-2 border-verj-coral text-verj-coral px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-verj-coral hover:text-white transition-all duration-300 inline-flex items-center space-x-2 group"
                >
                  <span>Launch Your MVP</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform icon-medium" />
                </Link>
              </div>
            </div>

            {/* Service 3: AI Integration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-verj-blue/20 rounded-2xl">
                    <Brain className="text-verj-blue icon-large" />
                  </div>
                  <h2 className="text-scale-2 font-bold text-white font-poppins">AI Integration</h2>
                </div>
                
                <p className="text-xl text-verj-muted mb-8 font-lato leading-relaxed">
                  Add intelligence to your applications with modern AI capabilities. From chatbots to automated workflows, 
                  we integrate AI that actually improves your user experience.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">GPT-4, Claude, and custom models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Smart chatbots & assistants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Automated content generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-verj-green icon-medium" />
                    <span className="text-verj-light">Data analysis & insights</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <span>Add AI to Your App</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform icon-medium" />
                </Link>
              </div>
              
              {/* AI Visual */}
              <div className="relative animate-slide-left">
                <div className="bento-card">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <Brain className="text-verj-blue mx-auto animate-scale-pulse" size={80} />
                      <div className="absolute inset-0 bg-verj-blue/20 blur-xl rounded-full"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-verj-navy/50 shape-rounded">
                        <span className="text-verj-light text-sm">Natural Language</span>
                        <div className="w-2 h-2 bg-verj-green shape-circle animate-pulse-slow"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-verj-navy/50 shape-rounded">
                        <span className="text-verj-light text-sm">Data Processing</span>
                        <div className="w-2 h-2 bg-verj-blue shape-circle animate-pulse-slow"></div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-verj-navy/50 shape-rounded">
                        <span className="text-verj-light text-sm">Smart Automation</span>
                        <div className="w-2 h-2 bg-verj-violet shape-circle animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="spacing-section relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bento-card bento-card-gradient-1 animate-fade-in">
            <div className="relative z-10">
              <h2 className="text-scale-2 font-bold text-white font-poppins mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-lato">
                Let's discuss your project and create a solution that perfectly fits your needs and timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-verj-navy px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link 
                  href="/products" 
                  className="border-2 border-white text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-verj-navy transition-all duration-300"
                >
                  View Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape w-96 h-96 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full top-10 right-20 opacity-5" />
          <div className="floating-shape w-64 h-64 bg-gradient-to-r from-verj-coral to-verj-green rounded-full bottom-20 left-20 opacity-5" />
        </div>
      </section>
    </div>
  );
}
