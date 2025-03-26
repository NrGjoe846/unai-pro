
import { Event } from './EventCalendar';
import { Button } from './ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock events data - using the same structure as in EventCalendar
const featuredEvents: Event[] = [
  {
    id: 'ai-summit-2023',
    title: 'AI Summit 2023',
    description: 'Join the largest AI conference dedicated to cutting-edge advancements and practical applications in artificial intelligence. Network with industry leaders, attend workshops, and gain insights into the future of AI.',
    date: new Date('2023-12-15T09:00:00'),
    location: 'San Francisco, CA',
    category: 'seminar',
    price: 199.99,
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'ai-hackathon-2023',
    title: 'AI Hackathon 2023',
    description: 'A 48-hour hackathon focused on building AI solutions for real-world problems. Collaborate with talented developers, data scientists, and designers to create innovative AI applications.',
    date: new Date('2023-12-05T10:00:00'),
    endDate: new Date('2023-12-07T18:00:00'),
    location: 'Virtual Event',
    category: 'hackathon',
    price: 'Free',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'ml-workshop',
    title: 'Machine Learning Workshop',
    description: 'Hands-on workshop on implementing ML algorithms for predictive analytics. Learn from industry experts and get practical experience with real-world datasets and applications.',
    date: new Date('2023-12-12T14:00:00'),
    location: 'New York, NY',
    category: 'workshop',
    price: 49.99,
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'nlp-competition',
    title: 'NLP Challenge',
    description: 'Compete to build the most accurate natural language processing model. Test your skills against other AI enthusiasts and win exciting prizes while advancing the field of NLP.',
    date: new Date('2023-12-22T09:00:00'),
    endDate: new Date('2023-12-23T18:00:00'),
    location: 'Virtual Event',
    category: 'competition',
    price: 25,
    imageUrl: '/placeholder.svg'
  }
];

interface EventCarouselProps {
  onEventSelect: (event: Event) => void;
}

const EventCarousel = ({ onEventSelect }: EventCarouselProps) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featuredEvents.map((event) => (
            <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="glass-panel h-full overflow-hidden flex flex-col card-hover">
                <div className="h-40 bg-gradient-to-r from-unai-blue/30 to-unai-purple/30 flex items-center justify-center">
                  <Badge 
                    className={cn(
                      "absolute top-4 right-4", 
                      event.category === 'hackathon' && "bg-red-500/20 text-red-300 hover:bg-red-500/30",
                      event.category === 'workshop' && "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30",
                      event.category === 'seminar' && "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30",
                      event.category === 'competition' && "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                    )}
                  >
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </Badge>
                  <span className="gradient-text text-xl font-bold">Featured Event</span>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{event.description.substring(0, 100)}...</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Clock size={16} />
                      <span>{new Date(event.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "font-medium",
                      event.price === 'Free' ? "text-green-400" : "text-white/80"
                    )}>
                      {event.price === 'Free' ? 'Free' : `$${event.price}`}
                    </span>
                    <Button 
                      variant="outline" 
                      onClick={() => onEventSelect(event)} 
                      className="border-unai-blue/30 bg-unai-blue/10 hover:bg-unai-blue/20 text-unai-blue"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/10 border-white/20 text-white" />
        <CarouselNext className="right-2 bg-white/10 border-white/20 text-white" />
      </Carousel>
    </div>
  );
};

export default EventCarousel;
