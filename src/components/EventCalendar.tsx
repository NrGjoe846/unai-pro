
import { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';

// Define Event type
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  location: string;
  category: 'workshop' | 'hackathon' | 'seminar' | 'competition';
  price: number | 'Free';
  imageUrl: string;
}

// Mock events data
const eventsMock: Event[] = [
  {
    id: 'ai-hackathon-2023',
    title: 'AI Hackathon 2023',
    description: 'A 48-hour hackathon focused on building AI solutions for real-world problems.',
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
    description: 'Hands-on workshop on implementing ML algorithms for predictive analytics.',
    date: new Date('2023-12-12T14:00:00'),
    location: 'New York, NY',
    category: 'workshop',
    price: 49.99,
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'ai-ethics-seminar',
    title: 'AI Ethics Seminar',
    description: 'A seminar discussing ethical considerations in AI development and deployment.',
    date: new Date('2023-12-18T15:00:00'),
    location: 'Boston, MA',
    category: 'seminar',
    price: 'Free',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'nlp-competition',
    title: 'NLP Challenge',
    description: 'Compete to build the most accurate natural language processing model.',
    date: new Date('2023-12-22T09:00:00'),
    endDate: new Date('2023-12-23T18:00:00'),
    location: 'Virtual Event',
    category: 'competition',
    price: 25,
    imageUrl: '/placeholder.svg'
  }
];

interface EventCalendarProps {
  onEventSelect: (event: Event) => void;
}

const EventCalendar = ({ onEventSelect }: EventCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory 
    ? eventsMock.filter(event => event.category === selectedCategory)
    : eventsMock;
  
  // Get events for the selected date
  const selectedDateEvents = date 
    ? filteredEvents.filter(event => 
        event.date.toDateString() === date.toDateString() || 
        (event.endDate && 
          date >= new Date(event.date.setHours(0,0,0,0)) && 
          date <= new Date(event.endDate.setHours(23,59,59,999)))
      )
    : [];

  // Function to check if a day has events
  const isDayWithEvent = (day: Date) => {
    return filteredEvents.some(event => {
      const eventStartDay = new Date(event.date).setHours(0,0,0,0);
      const eventEndDay = event.endDate 
        ? new Date(event.endDate).setHours(23,59,59,999)
        : eventStartDay;
      
      return day.setHours(0,0,0,0) >= eventStartDay && 
             day.setHours(0,0,0,0) <= eventEndDay;
    });
  };

  // Function to render calendar day content
  const renderDayContent = (day: Date) => {
    if (isDayWithEvent(day)) {
      return (
        <div className="relative h-full w-full">
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-unai-blue rounded-full"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/80 mb-2">
              Filter by Category
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="All Events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={undefined}>All Events</SelectItem>
                <SelectItem value="workshop">Workshops</SelectItem>
                <SelectItem value="hackathon">Hackathons</SelectItem>
                <SelectItem value="seminar">Seminars</SelectItem>
                <SelectItem value="competition">Competitions</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="bg-white/5 p-4 rounded-xl border border-white/10 text-white"
            components={{
              DayContent: ({ date }) => renderDayContent(date)
            }}
          />
        </div>
        
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4 text-white">
            {date ? (
              <>Events on {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</>
            ) : (
              'Select a date to see events'
            )}
          </h3>
          
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map(event => (
                <div 
                  key={event.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => onEventSelect(event)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <Badge 
                      className={cn(
                        "ml-2", 
                        event.category === 'hackathon' && "bg-red-500/20 text-red-300 hover:bg-red-500/30",
                        event.category === 'workshop' && "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30",
                        event.category === 'seminar' && "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30",
                        event.category === 'competition' && "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                      )}
                    >
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{event.description.substring(0, 120)}...</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">{new Date(event.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    <span className="text-white/60">{event.location}</span>
                    <span className={cn(
                      "font-medium",
                      event.price === 'Free' ? "text-green-400" : "text-white/80"
                    )}>
                      {event.price === 'Free' ? 'Free' : `$${event.price}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-white/50">
              No events scheduled for this date.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
