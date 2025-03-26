
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleRing from '../components/landing/ParticleRing';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      navigate('/home');
    }, 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Particle animation background */}
      <div className="absolute inset-0 z-0">
        <ParticleRing />
      </div>
      
      {/* Content overlay */}
      <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center px-4 transition-opacity duration-500 ${isEntering ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">UNAI TECH</h1>
          <p className="text-white/70 text-xl md:text-2xl max-w-xl mx-auto">
            The future of AI education starts here
          </p>
        </div>
        
        <Button 
          onClick={handleEnter}
          className="btn-primary text-lg px-8 py-6 rounded-full group flex items-center gap-2"
        >
          Enter the AI Universe
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Landing;
