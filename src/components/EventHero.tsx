
import { Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const EventHero = () => {
  // Mock data for featured event
  const featuredEvent = {
    id: 'ai-summit-2023',
    title: 'AI Summit 2023',
    description: 'Join the largest AI conference dedicated to cutting-edge advancements and practical applications in artificial intelligence.',
    date: new Date('2023-12-15T09:00:00'),
    location: 'San Francisco, CA',
    imageUrl: '/placeholder.svg',
  };

  // Calculate time remaining until the event
  const currentDate = new Date();
  const eventDate = new Date(featuredEvent.date);
  const timeRemaining = eventDate.getTime() - currentDate.getTime();
  
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-unai-black via-unai-darkblue to-unai-black z-0"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-unai-blue/20 rounded-full filter blur-[80px] animate-pulse opacity-60 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-unai-blue/10 rounded-full filter blur-[100px] animate-pulse opacity-40 z-0"></div>
      
      <div className="relative container mx-auto px-6 z-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{featuredEvent.title}</h1>
            <p className="text-white/80 mb-6 text-lg">{featuredEvent.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}, {eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{featuredEvent.location}</span>
              </div>
            </div>
            
            <Button className="btn-primary flex items-center space-x-2 rounded-full">
              <span>Register Now</span>
            </Button>
          </div>
          
          <div className="md:w-1/3 glass-panel p-6 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Event Countdown</h3>
            <div className="flex gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold gradient-text mb-1">{days}</div>
                <div className="text-xs text-white/60">Days</div>
              </div>
              <div className="text-2xl text-white/30">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold gradient-text mb-1">{hours}</div>
                <div className="text-xs text-white/60">Hours</div>
              </div>
              <div className="text-2xl text-white/30">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold gradient-text mb-1">{minutes}</div>
                <div className="text-xs text-white/60">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
