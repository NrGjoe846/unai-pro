
export interface EventData {
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
