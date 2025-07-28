"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles, Code, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Bottom-to-top glow effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-verj-violet/20 via-verj-blue/10 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-verj-coral/15 via-verj-violet/8 to-transparent opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-verj-green/10 to-transparent opacity-30 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-verj-purple/50 border border-verj-violet/30 rounded-full px-6 py-3 mb-8 animate-slide-up">
              <Sparkles className="text-verj-violet" size={20} />
              <span className="text-verj-light font-medium">Digital Innovation Studio</span>
            </div>
            
            {/* Large Bold Headline - Poppins 64-80px */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight font-poppins mb-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
              <span className="text-white">We build what</span>
              <br />
              <span className="text-white">we </span>
              <span className="gradient-text">believe.</span>
              <br />
              <span className="text-verj-violet">We build what</span>
              <br />
              <span className="text-verj-violet">you </span>
              <span className="text-white">need.</span>
            </h1>
            
            {/* Subheading - Lato */}
            <p className="text-xl md:text-2xl text-verj-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-lato mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
              Welcome to <span className="font-semibold gradient-text font-poppins">Verj Labs</span> — where bold ideas become breakthrough products. 
              We craft digital experiences that matter.
            </p>
            
            {/* CTA Buttons Side-by-Side */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-slide-up" style={{animationDelay: "0.6s"}}>
              {/* Primary Button - Electric Violet */}
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-10 py-5 group bg-verj-violet hover:bg-verj-violet/90"
              >
                <span>Try for Free</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              {/* Secondary Button - Outlined with Aqua Blue */}
              <Link 
                href="/portfolio" 
                className="border-2 border-verj-blue text-verj-blue px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-verj-blue hover:text-white transition-all duration-300 flex items-center space-x-2 group"
              >
                <Play className="group-hover:scale-110 transition-transform" size={18} />
                <span>View Demo</span>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: "0.8s"}}>
            {/* 3D Abstract Innovation Representation */}
            <div className="relative w-full max-w-lg">
              {/* Main 3D-style card representing innovation */}
              <div className="glass rounded-3xl p-8 transform rotate-3 hover:rotate-6 transition-all duration-500 backdrop-blur-xl border border-verj-violet/30">
                <div className="space-y-6">
                  {/* Code window representation */}
                  <div className="bg-verj-navy/80 rounded-2xl p-6 border border-verj-violet/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-verj-coral rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-verj-green rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-verj-violet to-verj-blue rounded w-3/4"></div>
                      <div className="h-2 bg-gradient-to-r from-verj-blue to-verj-green rounded w-1/2"></div>
                      <div className="h-2 bg-gradient-to-r from-verj-coral to-verj-violet rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Innovation icons */}
                  <div className="flex justify-between items-center">
                    <div className="p-4 bg-verj-violet/20 rounded-2xl">
                      <Code className="text-verj-violet" size={32} />
                    </div>
                    <div className="p-4 bg-verj-blue/20 rounded-2xl">
                      <Zap className="text-verj-blue" size={32} />
                    </div>
                    <div className="p-4 bg-verj-coral/20 rounded-2xl">
                      <Sparkles className="text-verj-coral" size={32} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating gradient shapes */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-verj-violet to-verj-blue rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-verj-coral to-verj-green rounded-full opacity-20 animate-float"></div>
              
              {/* Swirling gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-verj-violet/10 via-transparent to-verj-blue/10 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: "1s"}}>
          <div className="glass rounded-2xl p-6 hover:bg-verj-violet/10 transition-all duration-300 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-verj-muted">Projects Delivered</div>
          </div>
          <div className="glass rounded-2xl p-6 hover:bg-verj-violet/10 transition-all duration-300 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">10M+</div>
            <div className="text-verj-muted">Users Reached</div>
          </div>
          <div className="glass rounded-2xl p-6 hover:bg-verj-violet/10 transition-all duration-300 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-verj-muted">Years of Innovation</div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-verj-navy/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
