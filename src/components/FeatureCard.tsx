
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="glass-panel p-6 card-hover animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 w-12 h-12 rounded-full bg-unai-blue/20 flex items-center justify-center text-unai-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
