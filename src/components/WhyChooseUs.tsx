
import { useState } from 'react';
import { Gamepad2, Briefcase, Trophy, Lightbulb } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animation: string;
}

const FeatureCard = ({ icon, title, description, animation }: FeatureProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="glass-panel p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,119,255,0.3)] hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`flex justify-center mb-4 text-unai-blue ${isHovering ? 'animate-pulse' : ''}`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-center gradient-text">{title}</h3>
          <p className="text-white/70 text-center text-sm">{description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-unai-darkblue/90 backdrop-blur-xl border border-unai-blue/30 text-white p-4">
        <div className="flex flex-col gap-2">
          <div className="text-xs text-white/50 uppercase tracking-wider">Feature Highlight</div>
          <h4 className="text-lg font-bold gradient-text">{title}</h4>
          <p className="text-sm text-white/80">{description}</p>
          <div className="mt-2 pt-2 border-t border-white/10 text-xs text-unai-blue">
            {animation}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
          What Sets Us Apart
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Why Choose <span className="gradient-text">UNAI TECH</span>
        </h3>
        <p className="max-w-2xl mx-auto text-white/70 animate-fade-in">
          We combine cutting-edge AI education with gamification, real-world projects, and a thriving community to create a unique learning experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={<Gamepad2 className="h-10 w-10" />}
          title="Gamified Learning"
          description="Engage with interactive AI-based lessons and earn points as you progress through personalized learning paths."
          animation="Interactive lessons with real-time feedback"
        />
        <FeatureCard 
          icon={<Briefcase className="h-10 w-10" />}
          title="Real-world Projects"
          description="Apply your skills to industry projects and gain valuable experience working with real data and problems."
          animation="Industry-partnered project demonstrations"
        />
        <FeatureCard 
          icon={<Trophy className="h-10 w-10" />}
          title="AI Competitions"
          description="Participate in hackathons and competitions to test your skills, win prizes, and get recognized by top companies."
          animation="Live competition updates and leaderboards"
        />
        <FeatureCard 
          icon={<Lightbulb className="h-10 w-10" />}
          title="Diverse Applications"
          description="Learn how AI transforms various fields including commerce, healthcare, finance, and more - not just coding."
          animation="Cross-industry AI application showcases"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
