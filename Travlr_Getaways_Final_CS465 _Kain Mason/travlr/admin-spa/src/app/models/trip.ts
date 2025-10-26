export interface Trip {
  slug: string;
  name: string;
  location: string;
  duration: number;
  price: number;
  image?: string;
  summary?: string;
  description?: string;
  includes?: string[];
  itinerary?: string[];
}
