import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EventData } from '@/types/event';

// Mock events data
const eventsData: EventData[] = [
  {
    id: 'bizcanvas-2025',
    title: 'BIZCANVAS 2025',
    description: 'Join us for BIZCANVAS 2025, where innovation meets entrepreneurship. This premier business planning competition brings together visionary minds to showcase groundbreaking ideas and compete for substantial funding opportunities.',
    date: new Date('2025-04-05T10:00:00'),
    location: 'Silicon Valley Convention Center',
    category: 'competition',
    price: 'Free',
    imageUrl: '/placeholder.svg',
    attendees: 500,
    organizer: 'UNAI TECH Business Innovation Hub',
    highlights: [
      'Expert Panel of Judges',
      '$50,000 in Prize Money',
      'Networking with Industry Leaders',
      'Pitch Workshop Sessions'
    ]
  },
  {
    id: 'ai-summit-2025',
    title: 'AI Summit 2025',
    description: 'Experience the future of AI at our annual summit featuring keynote speakers, workshops, and networking opportunities.',
    date: new Date('2025-03-15T09:00:00'),
    location: 'Tech Hub Conference Center',
    category: 'seminar',
    price: 199.99,
    imageUrl: '/placeholder.svg',
    attendees: 1000,
    organizer: 'UNAI TECH Research Division',
    highlights: [
      'Industry Expert Keynotes',
      'Hands-on AI Workshops',
      'Research Presentations',
      'Career Fair'
    ]
  }
];

interface EventCalendarProps {
  onEventSelect: (event: EventData) => void;
}

const EventCalendar = ({ onEventSelect }: EventCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  // Filter events based on selected category
  const filteredEvents = selectedCategory 
    ? eventsData.filter(event => event.category === selectedCategory)
    : eventsData;
  
  // Get events for the selected date
  const selectedDateEvents = selectedDate 
    ? filteredEvents.filter(event => 
        event.date.toDateString() === selectedDate.toDateString()
      )
    : [];

  // Function to check if a day has events
  const isDayWithEvent = (day: Date) => {
    return filteredEvents.some(event => 
      event.date.toDateString() === day.toDateString()
    );
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
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="bg-white/5 rounded-lg border border-white/10 p-4 text-white"
            modifiers={{
              hasEvent: (date) => isDayWithEvent(date)
            }}
            modifiersClassNames={{
              hasEvent: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-unai-blue after:rounded-full"
            }}
          />
        </div>
        
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4 text-white">
            {selectedDate ? (
              <>Events on {selectedDate.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</>
            ) : (
              'Select a date to see events'
            )}
          </h3>
          
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedDateEvents.map(event => (
                <div 
                  key={event.id}
                  className="glass-panel p-6 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => onEventSelect(event)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white">{event.title}</h4>
                    <Badge 
                      className={cn(
                        "ml-2", 
                        event.category === 'hackathon' && "bg-red-500/20 text-red-300",
                        event.category === 'workshop' && "bg-blue-500/20 text-blue-300",
                        event.category === 'seminar' && "bg-purple-500/20 text-purple-300",
                        event.category === 'competition' && "bg-green-500/20 text-green-300"
                      )}
                    >
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Badge>
                  </div>
                  
                  <p className="text-white/70 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-unai-blue" />
                      <span>{event.date.toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-unai-blue" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-unai-blue" />
                      <span>{event.attendees} Attendees Expected</span>
                    </div>
                  </div>
                  
                  {event.highlights && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h5 className="text-sm font-medium text-white mb-2">Event Highlights</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-white/70 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-unai-blue"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
