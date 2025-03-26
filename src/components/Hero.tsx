
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-unai-black via-unai-darkblue to-unai-black z-0" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-unai-blue/20 rounded-full filter blur-[80px] animate-float opacity-60 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-unai-blue/10 rounded-full filter blur-[100px] animate-float opacity-40 z-0" style={{ animationDelay: '1s' }}></div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 border border-white/20 animate-fade-in">
            <span className="text-xs text-white/80">Revolutionizing AI Education</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Revolutionizing AI Learning</span>
            <br />
            <span className="text-white">for the Future</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-white/70 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            UNAI TECH merges education, gamification, and AI-powered tools to create
            an immersive learning experience that prepares you for the AI-driven future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/signup" className="btn-primary flex items-center justify-center gap-2 text-base py-3 px-8">
              Join the AI Revolution
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link to="/courses" className="btn-secondary flex items-center justify-center gap-2 text-base py-3 px-8">
              Explore AI Courses
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-unai-blue to-transparent"></div>
        <span className="text-white/50 text-xs mt-2">Scroll to explore</span>
      </div>
    </div>
  );
};

export default Hero;
