
import { useState } from 'react';
import { Event } from './EventCalendar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Mock events data for the dropdown
const eventsMock: Event[] = [
  {
    id: 'ai-summit-2023',
    title: 'AI Summit 2023',
    description: 'Join the largest AI conference dedicated to cutting-edge advancements and practical applications in artificial intelligence.',
    date: new Date('2023-12-15T09:00:00'),
    location: 'San Francisco, CA',
    category: 'seminar',
    price: 199.99,
    imageUrl: '/placeholder.svg'
  },
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

// Form schema
const formSchema = z.object({
  eventId: z.string({
    required_error: "Please select an event.",
  }),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  organization: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  experienceLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select your experience level.",
  }),
  referralSource: z.enum(["social_media", "website", "friend", "other"], {
    required_error: "Please select how you heard about us.",
  }),
  specialRequirements: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

interface RegistrationFormProps {
  selectedEvent: Event | null;
}

const RegistrationForm = ({ selectedEvent }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form configuration
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventId: selectedEvent?.id || "",
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      experienceLevel: "beginner",
      referralSource: "website",
      specialRequirements: "",
      termsAccepted: false,
    },
  });
  
  // Update form values when selected event changes
  useState(() => {
    if (selectedEvent) {
      form.setValue('eventId', selectedEvent.id);
    }
  });
  
  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form values:", values);
      
      // Show success toast
      toast({
        title: "Registration Successful!",
        description: "You have successfully registered for the event. Check your email for confirmation.",
      });
      
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Selection */}
          <FormField
            control={form.control}
            name="eventId"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Event</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventsMock.map(event => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.title} - {new Date(event.date).toLocaleDateString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Personal Details */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="you@example.com" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+1 (555) 123-4567" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">College / Company</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Organization name" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Additional Information */}
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Experience Level</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="referralSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">How did you hear about this event?</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="social_media">Social Media</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="specialRequirements"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Any Special Requirements?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about any special requirements or questions you may have." 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Terms & Conditions */}
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 md:col-span-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-white">
                    I agree to the <a href="/terms" className="text-unai-blue">terms & conditions</a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="btn-primary w-full sm:w-auto" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register for Event"}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
