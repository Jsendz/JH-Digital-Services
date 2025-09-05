export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web-design' | 'branding' | 'strategy';
  industry: string;
  metrics: {
    label: string;
    value: string;
  }[];
  caseStudyUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'web-design' | 'branding' | 'strategy' | 'culture';
  readTime: string;
  publishedAt: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export type Language = 'en' | 'es';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}