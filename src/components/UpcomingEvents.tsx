
import { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';

const eventsData = [
  {
    id: 'ai-summit-2023',
    title: 'AI Summit 2023',
    date: new Date('2023-12-15T09:00:00'),
    location: 'San Francisco, CA',
    category: 'conference',
    attendees: 1200,
    image: '/placeholder.svg'
  },
  {
    id: 'machine-learning-hackathon',
    title: 'Machine Learning Hackathon',
    date: new Date('2023-11-10T10:00:00'),
    location: 'Online',
    category: 'hackathon',
    attendees: 500,
    image: '/placeholder.svg'
  },
  {
    id: 'ai-in-healthcare-workshop',
    title: 'AI in Healthcare Workshop',
    date: new Date('2023-10-25T13:00:00'),
    location: 'Boston, MA',
    category: 'workshop',
    attendees: 150,
    image: '/placeholder.svg'
  },
  {
    id: 'nlp-masterclass',
    title: 'NLP Masterclass Series',
    date: new Date('2023-11-05T09:00:00'),
    location: 'Online',
    category: 'workshop',
    attendees: 300,
    image: '/placeholder.svg'
  }
];

const EventCard = ({ event }: { event: typeof eventsData[0] }) => {
  return (
    <div className="glass-panel h-full overflow-hidden group">
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-unai-darkblue to-transparent z-10"></div>
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-3 z-20 bg-unai-blue/80 text-white text-xs py-1 px-2 rounded-full">
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-unai-blue transition-colors">
          {event.title}
        </h3>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Calendar className="h-4 w-4 text-unai-blue" />
            <span>{event.date.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="h-4 w-4 text-unai-blue" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Users className="h-4 w-4 text-unai-blue" />
            <span>{event.attendees.toLocaleString()} Attendees</span>
          </div>
        </div>
        
        <Link 
          to={`/events?id=${event.id}`} 
          className="text-unai-blue text-sm flex items-center gap-1 hover:underline"
        >
          Register Now
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [activeEvent] = useState(eventsData[0]);
  
  // Calculate time remaining for the first event
  const currentDate = new Date();
  const eventDate = new Date(activeEvent.date);
  const timeRemaining = eventDate.getTime() - currentDate.getTime();
  
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  
  return (
    <div className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
          Mark Your Calendar
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Upcoming <span className="gradient-text">Events & Hackathons</span>
        </h3>
        <p className="max-w-2xl mx-auto text-white/70 animate-fade-in mb-8">
          Join our global community at these exciting AI events designed to enhance your skills, expand your network, and showcase your talents.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="glass-panel p-6 h-full">
            <h3 className="text-xl font-bold mb-6 gradient-text">Event Countdown</h3>
            
            <div className="mb-6">
              <div className="text-2xl font-bold text-white mb-2">{activeEvent.title}</div>
              <div className="text-white/70 mb-4">{activeEvent.location}</div>
              
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
            
            <div className="border-t border-white/10 pt-6 mb-4">
              <h4 className="text-white font-medium mb-3">Hackathon Leaderboard</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-unai-blue/20 flex items-center justify-center text-xs">1</div>
                    <span className="text-white">Team Alpha</span>
                  </div>
                  <span className="text-unai-blue">98 pts</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-unai-blue/20 flex items-center justify-center text-xs">2</div>
                    <span className="text-white">Neural Nexus</span>
                  </div>
                  <span className="text-unai-blue">92 pts</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-unai-blue/20 flex items-center justify-center text-xs">3</div>
                    <span className="text-white">DeepMinds</span>
                  </div>
                  <span className="text-unai-blue">87 pts</span>
                </div>
              </div>
            </div>
            
            <Link to="/events" className="btn-primary w-full flex items-center justify-center gap-2">
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {eventsData.map((event) => (
                <CarouselItem key={event.id} className="basis-full sm:basis-1/2 lg:basis-1/2">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
