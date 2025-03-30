import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Brain, Code, Trophy, BarChart3 } from 'lucide-react';

const EvePlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-unai-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-unai-darkblue/30 to-unai-black"></div>
        
        <div className="relative section-container pt-12">
          <div className="text-center">
            <h1 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
              AI Learning Platform
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">Eve</span> <span className="text-white">Platform</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience the future of AI education through our innovative learning platform
              powered by advanced artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
              <Brain className="h-6 w-6 text-unai-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Adaptive Learning</h3>
            <p className="text-white/70">
              Our AI-powered system adapts to your learning style and pace, creating
              personalized learning paths that optimize your progress.
            </p>
          </div>

          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-unai-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Interactive Coding</h3>
            <p className="text-white/70">
              Practice AI concepts with our interactive coding environment, featuring
              real-time feedback and intelligent code suggestions.
            </p>
          </div>

          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
              <Trophy className="h-6 w-6 text-unai-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Gamification</h3>
            <p className="text-white/70">
              Stay motivated with our gamified learning system featuring achievements,
              rewards, and competitive challenges.
            </p>
          </div>

          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-unai-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Progress Analytics</h3>
            <p className="text-white/70">
              Track your learning journey with detailed analytics and insights that
              help you understand your strengths and areas for improvement.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EvePlatform;
