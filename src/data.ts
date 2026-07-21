import { Package, Service, PortfolioItem, FAQ, Testimonial } from './types';

export const services: Service[] = [
  { 
    id: 'web-dev', 
    title: 'Website Development', 
    description: 'High-performance, scalable web applications built with React, Next.js and modern frameworks for peak conversion.', 
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'ecommerce', 
    title: 'E-Commerce Solutions', 
    description: 'Powerful online stores with seamless payment integration, inventory management and high-converting checkout flows.', 
    icon: 'ShoppingCart',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'ai-integration', 
    title: 'AI Integration', 
    description: 'Cutting-edge AI features including intelligent chatbots, automated content generation and smart data analysis.', 
    icon: 'Bot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'crm-erp', 
    title: 'Custom CRM / ERP', 
    description: 'Tailored business management software to streamline operations, track leads and manage employee workflows.', 
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'seo', 
    title: 'SEO Optimization', 
    description: 'Data-driven SEO strategies to rank higher on search engines and attract high-quality organic traffic.', 
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'automation', 
    title: 'Business Automation', 
    description: 'Automate repetitive manual tasks with custom API integrations and intelligent workflow pipelines.', 
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'mobile-app', 
    title: 'Mobile App Development', 
    description: 'High-performance native and cross-platform iOS and Android apps designed for speed and engagement.', 
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
];

export const packages: Package[] = [
  {
    id: 'demo',
    name: 'Customised Demo',
    price: 4999,
    bestFor: ['Startup', 'Personal Brand'],
    delivery: '3-5 Days',
    support: '3 Months Free',
    features: [
      'Premium Responsive Website',
      'Mobile Friendly Design',
      'Modern UI',
      'Up to 5 Pages',
      'WhatsApp Button',
      'Click-to-Call',
      'Google Maps',
      'Contact Form',
      'Gallery',
      'Basic SEO',
      'SSL Security',
      'Social Media Integration',
      'YouTube Section',
      'Admin Panel',
      '1 Month Support'
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 9999,
    bestFor: ['Local Business', 'Portfolio'],
    delivery: '7-10 Days',
    support: '6 Months Free',
    features: [
      'Everything from Demo +',
      'Up to 10 Pages',
      'Blog',
      'Testimonials',
      'FAQ',
      'Admission Form',
      'Downloads',
      'Photo Gallery',
      'Video Gallery',
      'Advanced SEO',
      'Google Analytics',
      'Speed Optimization',
      '2 Months Support'
    ]
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 14999,
    bestFor: ['SME', 'Professional Services'],
    delivery: '12-15 Days',
    support: '1 Year Free',
    features: [
      'Everything from Starter +',
      'Student Registration',
      'Teacher Profile',
      'Course Management',
      'Notice Board',
      'Events',
      'Downloads',
      'Password Protected Pages',
      'Advanced Admin',
      'Search Console',
      'Backup System',
      '3 Months Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 24999,
    recommended: true,
    bestFor: ['Established Brands', 'Corporate'],
    delivery: '20-25 Days',
    support: 'Lifetime Support',
    features: [
      'Everything from Basic +',
      'Student Dashboard',
      'Online Admission',
      'Appointment Booking',
      'Email Notification',
      'Live Chat',
      'Premium Animation',
      'Advanced SEO',
      'Analytics Dashboard',
      'Image Optimization',
      '6 Months Support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 39999,
    bestFor: ['Online Shops', 'Retailers'],
    delivery: '30-45 Days',
    support: '1 Year Priority',
    features: [
      'Everything from Premium +',
      'Multi Admin',
      'Role Management',
      'Blog CMS',
      'Dynamic Gallery',
      'Certificate Download',
      'PDF Notes',
      'Attendance',
      'Student Login',
      'Teacher Login',
      'Custom Forms',
      'Performance Dashboard',
      '1 Year Support'
    ]
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    price: 49999,
    bestFor: ['E-commerce Startups', 'Growth Businesses'],
    delivery: '45-60 Days',
    support: '1 Year Priority',
    features: [
      'Everything from Professional +',
      'E-Commerce Ready',
      'Payment Gateway',
      'Product Management',
      'Invoice',
      'Coupons',
      'Booking System',
      'CRM',
      'Lead Management',
      'Email Marketing',
      'Business Reports',
      'Inventory'
    ]
  },
  {
    id: 'business-elite',
    name: 'Business Elite',
    price: 59999,
    bestFor: ['Scaling Enterprises', 'Multi-location'],
    delivery: '60-75 Days',
    support: '2 Years Support',
    features: [
      'Everything from Business Pro +',
      'Multi Branch',
      'Franchise',
      'Staff Dashboard',
      'HR Module',
      'AI Chat Assistant',
      'AI Content Generator',
      'Customer Portal',
      'Notifications',
      'Cloud Backup',
      'Business Analytics'
    ]
  },
  {
    id: 'enterprise-lite',
    name: 'Enterprise Lite',
    price: 74999,
    bestFor: ['Large Organizations', 'B2B Platforms'],
    delivery: '75-90 Days',
    support: '2 Years Priority',
    features: [
      'Everything from Business Elite +',
      'ERP Ready',
      'Advanced CRM',
      'Employee Login',
      'Client Dashboard',
      'API Integration',
      'Payment Reports',
      'Workflow Automation',
      'Audit Logs',
      'Document Management',
      'Multi Language'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 89999,
    bestFor: ['National Brands', 'Large Scale Portals'],
    delivery: '90-120 Days',
    support: 'Lifetime Support',
    features: [
      'Everything from Enterprise Lite +',
      'LMS',
      'Online Classes',
      'Online Exam',
      'Certificate Generator',
      'AI Search',
      'AI Support',
      'Workflow Automation',
      'Advanced Security',
      'Reports',
      'Database Optimization'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ultimate Enterprise',
    price: 99999,
    bestFor: ['Global Corporations', 'Custom Saas'],
    delivery: '120+ Days',
    support: 'Lifetime VIP Support',
    features: [
      'Everything from Enterprise +',
      'Fully Custom Design',
      'Unlimited Pages',
      'Enterprise Admin',
      'Enterprise Security',
      'AI Automation',
      'Premium Dashboard',
      'Multiple User Roles',
      'API Development',
      'Third Party Integration',
      'High Speed Optimization',
      'Documentation',
      'Priority Support',
      'Advanced Backup'
    ]
  }
];

export const portfolio: PortfolioItem[] = [
  { id: 'p1', title: 'Coaching Management System', category: 'LMS / Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', link: '#' },
  { id: 'p2', title: 'Modern Hospital Portal', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', link: '#' },
  { id: 'p3', title: 'Elite E-Commerce Platform', category: 'E-Commerce', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800', link: '#' },
  { id: 'p4', title: 'Corporate Real Estate', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', link: '#' },
];

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Dr. Sameer Ahmed', role: 'Clinic Owner', content: 'PandaTech Digital transformed our clinic with a modern booking system. Highly professional team!', avatar: 'https://i.pravatar.cc/150?u=t1' },
  { id: 't2', name: 'Rajesh Sharma', role: 'School Principal', content: 'The school management system is intuitive and has saved us countless hours of administrative work.', avatar: 'https://i.pravatar.cc/150?u=t2' },
  { id: 't3', name: 'Anjali Gupta', role: 'E-commerce Entrepreneur', content: 'Our sales doubled after the website redesign. The UI is just beautiful.', avatar: 'https://i.pravatar.cc/150?u=t3' },
];

export const faqs: FAQ[] = [
  { question: 'What is PandaTech Digital?', answer: 'PandaTech Digital is a premium web development and digital solutions agency based in West Bengal, specializing in modern, AI-powered websites and software.' },
  { question: 'How long does it take to build a website?', answer: 'It depends on the complexity. A Demo package can take 3-5 days, while Enterprise solutions might take 4-8 weeks.' },
  { question: 'Do you provide lifetime upgrades?', answer: 'Yes, we offer lifetime upgrade options for select premium packages.' },
  { question: 'Is the website mobile-friendly?', answer: 'Absolutely. Every website we build is fully responsive and looks perfect on all devices.' },
  { question: 'Can I upgrade my package later?', answer: 'Yes! If you upgrade, your previous payment is adjusted so you only pay the difference.' },
  // ... more FAQs will be added in component
];
