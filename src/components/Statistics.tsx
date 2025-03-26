
import { Users, Calendar, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  endValue: number;
  duration: number;
}

const StatCounter = ({ icon, label, value, endValue, duration }: StatProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
    
    return () => setCount(0);
  }, [endValue, duration]);
  
  return (
    <div className="flex flex-col items-center p-6 glass-panel min-w-[200px]">
      <div className="mb-4 text-unai-blue">
        {icon}
      </div>
      <div className="text-3xl font-bold gradient-text mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-white/70 text-sm text-center">
        {label}
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto px-4">
        <StatCounter 
          icon={<Users className="h-8 w-8" />}
          label="Active Learners"
          value={0}
          endValue={15000}
          duration={2000}
        />
        <StatCounter 
          icon={<Calendar className="h-8 w-8" />}
          label="Events Hosted"
          value={0}
          endValue={250}
          duration={2000}
        />
        <StatCounter 
          icon={<Award className="h-8 w-8" />}
          label="Certifications Issued"
          value={0}
          endValue={8500}
          duration={2000}
        />
      </div>
    </div>
  );
};

export default Statistics;
