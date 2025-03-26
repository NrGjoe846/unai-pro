
import { ArrowRight, Code, Trophy, Brain, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EvePlatform = () => {
  return (
    <div className="section-container">
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
          AI-Powered Learning
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">Eve</span> <span className="text-white">- Gamified AI Learning Platform</span>
        </h3>
        <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A revolutionary approach to learning AI through interactive challenges, 
          personalized pathways, and real-time performance analytics.
        </p>
      </div>

      {/* Eve platform preview */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left side - Platform preview */}
        <div className="w-full lg:w-1/2 relative animate-slide-in-left">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-unai-darkblue/70 to-unai-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="glass-panel px-6 py-3 rounded-full mb-4">
                  <span className="text-xs text-white/90">Eve AI Platform</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">Personalized AI Learning Journey</h4>
                <p className="text-white/70 mb-6">Experience hands-on AI training with adaptive learning paths tailored to your skill level.</p>
                <div className="flex justify-center">
                  <Link to="/eve-platform" className="btn-primary text-sm py-2 px-4">
                    Preview Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating stats card */}
          <div className="glass-panel p-4 absolute -bottom-6 -right-6 md:right-6 animate-float">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-unai-blue/20 rounded-full flex items-center justify-center">
                <Trophy className="h-5 w-5 text-unai-blue" />
              </div>
              <div>
                <p className="text-xs text-white/70">Global Rank</p>
                <p className="text-base font-semibold text-white">#42 of 12,568</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="w-full lg:w-1/2 space-y-8 animate-slide-in-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-unai-blue/20 flex items-center justify-center">
                <Brain className="h-5 w-5 text-unai-blue" />
              </div>
              <h4 className="text-xl font-semibold">AI Personalized Learning</h4>
            </div>
            <p className="text-white/70 pl-14">
              AI algorithms analyze your progress and create custom learning paths 
              that adapt to your strengths and areas for improvement.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-unai-blue/20 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-unai-blue" />
              </div>
              <h4 className="text-xl font-semibold">Achievements & Leaderboards</h4>
            </div>
            <p className="text-white/70 pl-14">
              Track your progress with badges, certificates, and compete with 
              peers on global leaderboards to showcase your expertise.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-unai-blue/20 flex items-center justify-center">
                <Code className="h-5 w-5 text-unai-blue" />
              </div>
              <h4 className="text-xl font-semibold">AI Coding Lab</h4>
            </div>
            <p className="text-white/70 pl-14">
              Experiment with real-time AI code execution and get intelligent 
              feedback on your solutions from our advanced AI system.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-unai-blue/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-unai-blue" />
              </div>
              <h4 className="text-xl font-semibold">Performance Analytics</h4>
            </div>
            <p className="text-white/70 pl-14">
              Gain insights into your learning patterns with detailed analytics
              that measure progress and identify optimization opportunities.
            </p>
          </div>
          
          <div className="pl-14 pt-4">
            <Link to="/eve-platform" className="flex items-center text-unai-blue hover:text-unai-lightblue transition-colors group">
              <span>Explore Eve Platform</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvePlatform;
