
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventHero from '@/components/EventHero';
import EventCalendar from '@/components/EventCalendar';
import EventCarousel from '@/components/EventCarousel';
import RegistrationForm from '@/components/RegistrationForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from '@/components/ui/use-toast';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    toast({
      title: "Event Selected",
      description: `You've selected ${event.title}. Fill out the form below to register.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-unai-black">
      <Navbar />
      
      <main className="flex-grow">
        <EventHero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Upcoming Events</h2>
          <p className="text-white/70 mb-10 max-w-2xl">
            Join UNAI TECH's cutting-edge events, from intense AI hackathons to in-depth workshops, all designed to supercharge your AI journey.
          </p>
          
          <Tabs defaultValue="calendar" className="mb-16">
            <TabsList className="mb-8 bg-white/5">
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="carousel">Featured Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar">
              <EventCalendar onEventSelect={handleEventSelect} />
            </TabsContent>
            
            <TabsContent value="carousel">
              <EventCarousel onEventSelect={handleEventSelect} />
            </TabsContent>
          </Tabs>
          
          <div className="glass-panel p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Register for an Event</h2>
            <RegistrationForm selectedEvent={selectedEvent} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
