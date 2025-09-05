import { Project, BlogPost, Testimonial, Service, PricingTier } from "../../types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'TechFlow SaaS Platform',
    description: 'Complete brand identity and web platform for a B2B SaaS startup',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web-design',
    industry: 'Technology',
    metrics: [
      { label: 'Conversion Rate', value: '+127%' },
      { label: 'User Engagement', value: '+89%' },
      { label: 'Brand Recognition', value: '+156%' }
    ]
  },
  {
    id: '2',
    title: 'Artisan Coffee Co.',
    description: 'Brand identity and e-commerce platform for premium coffee roasters',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'branding',
    industry: 'Food & Beverage',
    metrics: [
      { label: 'Online Sales', value: '+203%' },
      { label: 'Brand Awareness', value: '+145%' },
      { label: 'Customer Retention', value: '+78%' }
    ]
  },
  {
    id: '3',
    title: 'FinanceFirst Advisory',
    description: 'Professional website and brand strategy for financial consulting firm',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'strategy',
    industry: 'Finance',
    metrics: [
      { label: 'Lead Generation', value: '+167%' },
      { label: 'Client Acquisition', value: '+92%' },
      { label: 'Market Positioning', value: '+134%' }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Psychology of Color in Web Design',
    excerpt: 'How strategic color choices can dramatically impact user behavior and conversion rates.',
    image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web-design',
    readTime: '5 min read',
    publishedAt: '2024-01-15',
    slug: 'psychology-of-color-web-design'
  },
  {
    id: '2',
    title: 'Building a Brand That Resonates',
    excerpt: 'Essential strategies for creating authentic brand connections with your target audience.',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'branding',
    readTime: '7 min read',
    publishedAt: '2024-01-10',
    slug: 'building-brand-that-resonates'
  },
  {
    id: '3',
    title: 'UX Strategy for SaaS Success',
    excerpt: 'Key principles for designing user experiences that drive subscription growth.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'strategy',
    readTime: '6 min read',
    publishedAt: '2024-01-05',
    slug: 'ux-strategy-saas-success'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    company: 'TechFlow',
    role: 'CEO & Founder',
    content: 'The team transformed our vision into a stunning digital experience. Our conversion rates increased by 127% within the first quarter.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    company: 'Artisan Coffee Co.',
    role: 'Brand Director',
    content: 'Exceptional work on our rebrand. They captured the essence of our craft and translated it into a cohesive brand identity that resonates with our customers.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Emily Watson',
    company: 'FinanceFirst',
    role: 'Managing Partner',
    content: 'Professional, strategic, and results-driven. Our new website has generated 167% more qualified leads. Highly recommend their services.',
    avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Custom websites that convert visitors into customers through strategic UX/UI design.',
    features: [
      'UX/UI Design & Research',
      'Responsive Development',
      'Webflow & WordPress',
      'SEO Optimization',
      'Performance Analytics',
      'Conversion Optimization'
    ],
    ctaText: 'Let\'s Build Your Site'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive brand identity that connects with your audience and drives business growth.',
    features: [
      'Logo Design & Identity',
      'Brand Strategy & Positioning',
      'Visual Guidelines',
      'Brand Voice & Messaging',
      'Marketing Collateral',
      'Brand Implementation'
    ],
    ctaText: 'Build Your Brand'
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Data-driven digital strategies that align with your business objectives and market opportunities.',
    features: [
      'Digital Strategy Planning',
      'Competitive Analysis',
      'User Journey Mapping',
      'Content Strategy',
      'Growth Marketing',
      'Performance Measurement'
    ],
    ctaText: 'Plan Your Strategy'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,500',
    features: [
      '5-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '30 days support',
      'Analytics setup'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$5,500',
    popular: true,
    features: [
      '10-page website',
      'Custom design & animations',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce functionality',
      '90 days support',
      'Performance optimization',
      'Social media integration'
    ],
    ctaText: 'Choose Growth'
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'Custom',
    features: [
      'Unlimited pages',
      'Advanced custom features',
      'Multi-language support',
      'Advanced integrations',
      'Custom development',
      '6 months support',
      'Training & documentation',
      'Priority support'
    ],
    ctaText: 'Request Quote'
  }
];