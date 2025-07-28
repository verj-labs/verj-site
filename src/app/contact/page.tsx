import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Calendar
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text font-poppins">
              Let's Build Together
            </h1>
            <p className="text-xl md:text-2xl text-verj-muted max-w-3xl mx-auto leading-relaxed font-lato mb-12">
              Ready to turn your vision into reality? We'd love to hear about your project and explore how we can help bring it to life.
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape w-64 h-64 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full top-20 right-20 opacity-5" />
          <div className="floating-shape w-48 h-48 bg-gradient-to-r from-verj-coral to-verj-green rounded-full bottom-20 left-20 opacity-5" />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form - Dark Card */}
            <div className="bento-card bento-card-large animate-slide-up">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-verj-light font-poppins">Send Us a Message</h2>
                <p className="text-verj-muted">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-verj-light mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 bg-verj-navy/50 border border-verj-violet/30 rounded-xl text-verj-light placeholder-verj-muted focus:border-verj-violet focus:ring-2 focus:ring-verj-violet/20 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-verj-light mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 bg-verj-navy/50 border border-verj-violet/30 rounded-xl text-verj-light placeholder-verj-muted focus:border-verj-violet focus:ring-2 focus:ring-verj-violet/20 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
                
                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-verj-light mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-4 bg-verj-navy/50 border border-verj-violet/30 rounded-xl text-verj-light placeholder-verj-muted focus:border-verj-violet focus:ring-2 focus:ring-verj-violet/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                
                {/* Project Type */}
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-verj-light mb-2">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full px-4 py-4 bg-verj-navy/50 border border-verj-violet/30 rounded-xl text-verj-light focus:border-verj-violet focus:ring-2 focus:ring-verj-violet/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="mvp">MVP Development</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-verj-light mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="w-full px-4 py-4 bg-verj-navy/50 border border-verj-violet/30 rounded-xl text-verj-light placeholder-verj-muted focus:border-verj-violet focus:ring-2 focus:ring-verj-violet/20 transition-all duration-300 backdrop-blur-sm resize-none"
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-4 group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information & Map */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
              
              {/* Contact Details Card */}
              <div className="bento-card">
                <h3 className="content-primary mb-6 flex items-center">
                  <MessageCircle className="text-verj-violet mr-3" size={24} />
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-verj-violet/20 rounded-xl flex-shrink-0">
                      <Mail className="text-verj-violet" size={20} />
                    </div>
                    <div>
                      <h4 className="content-primary text-sm mb-1">Email</h4>
                      <p className="content-secondary">hello@verj-labs.com</p>
                      <p className="content-secondary text-xs mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-verj-blue/20 rounded-xl flex-shrink-0">
                      <Phone className="text-verj-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="content-primary text-sm mb-1">Phone</h4>
                      <p className="content-secondary">+1 (555) 123-4567</p>
                      <p className="content-secondary text-xs mt-1">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-verj-coral/20 rounded-xl flex-shrink-0">
                      <MapPin className="text-verj-coral" size={20} />
                    </div>
                    <div>
                      <h4 className="content-primary text-sm mb-1">Location</h4>
                      <p className="content-secondary">Toronto, Canada</p>
                      <p className="content-secondary text-xs mt-1">Remote-first, global reach</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-verj-green/20 rounded-xl flex-shrink-0">
                      <Clock className="text-verj-green" size={20} />
                    </div>
                    <div>
                      <h4 className="content-primary text-sm mb-1">Response Time</h4>
                      <p className="content-secondary">Usually within 2-4 hours</p>
                      <p className="content-secondary text-xs mt-1">Same-day for urgent inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map Card */}
              <div className="bento-card bento-card-gradient-1 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Globe className="mr-3" size={24} />
                    Global Reach, Local Touch
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Based in Toronto, serving clients worldwide. Our remote-first approach means we can work with you wherever you are.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">15+</div>
                      <div className="text-gray-300 text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">50+</div>
                      <div className="text-gray-300 text-sm">Cities</div>
                    </div>
                  </div>
                </div>
                {/* Map overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-verj-violet/20 to-verj-blue/20" />
              </div>
              
              {/* Quick Actions */}
              <div className="bento-card">
                <h3 className="content-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    href="/calendar" 
                    className="flex items-center justify-between p-3 hover:bg-verj-violet/10 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-verj-violet" size={20} />
                      <span className="content-secondary">Book a Free Discovery Call</span>
                    </div>
                    <ArrowRight className="text-verj-muted group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                  
                  <Link 
                    href="/products" 
                    className="flex items-center justify-between p-3 hover:bg-verj-violet/10 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-verj-blue" size={20} />
                      <span className="content-secondary">View Our Products</span>
                    </div>
                    <ArrowRight className="text-verj-muted group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                  
                  <Link 
                    href="/pricing" 
                    className="flex items-center justify-between p-3 hover:bg-verj-violet/10 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Globe className="text-verj-coral" size={20} />
                      <span className="content-secondary">See Pricing & Packages</span>
                    </div>
                    <ArrowRight className="text-verj-muted group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">Frequently Asked Questions</h2>
            <p className="text-xl text-verj-muted">Get quick answers to common questions about working with us.</p>
          </div>
          
          <div className="bento-grid">
            <div className="bento-card bento-card-medium">
              <h3 className="content-primary mb-3">How long does a typical project take?</h3>
              <p className="content-secondary">Most projects range from 4-16 weeks depending on complexity. We'll provide a detailed timeline during our discovery phase.</p>
            </div>
            
            <div className="bento-card bento-card-medium">
              <h3 className="content-primary mb-3">What's included in your pricing?</h3>
              <p className="content-secondary">All our packages include design, development, testing, deployment, and 30 days of post-launch support.</p>
            </div>
            
            <div className="bento-card bento-card-medium">
              <h3 className="content-primary mb-3">Do you work with startups?</h3>
              <p className="content-secondary">Absolutely! We love working with startups and offer founder-friendly packages with flexible payment terms.</p>
            </div>
            
            <div className="bento-card bento-card-medium">
              <h3 className="content-primary mb-3">Can you help with existing projects?</h3>
              <p className="content-secondary">Yes, we can audit, optimize, or add new features to existing applications. We're here to help at any stage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
