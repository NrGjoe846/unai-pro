import { Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Globe } from './ui/globe';
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
    <div className="min-h-screen w-full relative flex items-center overflow-hidden">
      {/* Fixed background with overlay that covers the entire viewport */}
      <div className="fixed inset-0 bg-gradient-to-br from-unai-black via-unai-darkblue to-unai-black z-0"></div>
      
      {/* Grid lines that extend full page */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      {/* Glowing orbs positioned relative to viewport */}
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-unai-blue/20 rounded-full filter blur-[100px] animate-pulse opacity-60 z-0"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[40vw] h-[40vw] bg-unai-blue/10 rounded-full filter blur-[120px] animate-pulse opacity-40 z-0" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/3 left-1/4 w-[30vw] h-[30vw] bg-[#9b87f5]/20 rounded-full filter blur-[150px] animate-pulse opacity-30 z-0" style={{ animationDelay: '2s' }}></div>
      
      {/* Content section */}
      <div className="relative container mx-auto px-6 z-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
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
          
          <div className="lg:w-1/2 relative h-[500px] w-full">
            <Globe className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
