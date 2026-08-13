export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  popular?: boolean;
  tag?: string;
  commonItems?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  highlight: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  description: string;
  preferredDate: string;
  photos: File[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

