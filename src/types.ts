import { LucideIcon } from 'lucide-react';

export type ViewType = 'home' | 'portfolio' | 'pricing' | 'faq' | 'service-detail';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProject {
  title: string;
  industry: string;
  image: string;
  features: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  benefits: string[];
  features: ServiceFeature[];
  process: string[];
  portfolio: ServiceProject[];
  faqs: ServiceFAQ[];
  technologies: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  bestFor: string[];
  delivery: string;
  support: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
