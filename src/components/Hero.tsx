
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [greeting, setGreeting] = useState("Welcome to UNAI TECH");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate a user login experience
  useEffect(() => {
    setTimeout(() => {
      // This simulates a returning user - in a real app, you'd use auth
      const usernames = ["Sarah", "Alex", "Jordan", "Taylor", "Morgan"];
      const randomName = usernames[Math.floor(Math.random() * usernames.length)];
      setGreeting(`Welcome back, ${randomName}!`);
      setIsLoaded(true);
    }, 2000);
  }, []);

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
      
      {/* Glowing orbs - enhanced */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-unai-blue/20 rounded-full filter blur-[80px] animate-float opacity-60 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-unai-blue/10 rounded-full filter blur-[100px] animate-float opacity-40 z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#9b87f5]/20 rounded-full filter blur-[70px] animate-float opacity-50 z-0" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-[#7E69AB]/15 rounded-full filter blur-[90px] animate-float opacity-40 z-0" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating elements - adds futuristic feel */}
      <div className="absolute opacity-20 z-0">
        <div className="absolute top-1/4 left-20 h-16 w-16 border border-unai-blue/30 rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-32 h-20 w-20 border border-unai-blue/30 rotate-12 animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/4 left-40 h-12 w-12 border border-[#9b87f5]/30 rotate-30 animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-2/3 right-1/4 h-14 w-14 border border-white/20 rotate-45 animate-float" style={{ animationDelay: '1.7s' }}></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 border border-white/20 animate-fade-in">
            <span className={`text-xs text-white/80 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {greeting}
            </span>
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
            <Link to="/courses" className="btn-primary flex items-center justify-center gap-2 text-base py-3 px-8">
              Start Learning AI
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link to="/events" className="btn-secondary flex items-center justify-center gap-2 text-base py-3 px-8">
              Join an Event
            </Link>
          </div>
          
          {/* 3D Animation Placeholder - In a real implementation, this would be a three.js component */}
          <div className="mt-12 w-full max-w-2xl h-40 relative glass-panel overflow-hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm text-white/50">3D Holographic Animation</div>
            </div>
            <div className="absolute h-20 w-20 bg-unai-blue/20 rounded-full top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 filter blur-md animate-pulse"></div>
            <div className="absolute h-16 w-16 bg-[#9b87f5]/20 rounded-full top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 filter blur-md animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute h-14 w-14 bg-white/10 rounded-full top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 filter blur-md animate-pulse" style={{ animationDelay: '0.6s' }}></div>
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
