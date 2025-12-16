export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  timeline: string;
  features: string[];
  benefits: string[];
  faqs: FAQ[];
  image: string;
  gallery: string[];
}

export interface AreaDetail {
  slug: string;
  name: string;
  county: string;
  description: string;
  fullDescription: string;
  nearbyAreas: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  service: string;
  location: string;
  images: string[];
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
  preferredContact: "phone" | "email";
}
