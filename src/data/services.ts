import { 
  Globe, 
  ShoppingCart, 
  Cpu, 
  Database, 
  Search, 
  Smartphone,
  Code,
  Layout,
  Zap,
  Shield,
  Smartphone as MobileIcon,
  BarChart,
  Cloud,
  Headphones,
  Maximize,
  Layers,
  Settings,
  Lock,
  Globe2,
  Terminal,
  Server,
  Zap as FastIcon,
  Bot,
  Users,
  MapPin,
  Mail,
  Clock,
  Tag,
  FileText
} from 'lucide-react';
import { ServiceData } from '../types';

export const servicesData: ServiceData[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDescription: 'High-performance, custom-engineered websites designed to convert visitors into loyal customers.',
    fullDescription: 'We build more than just websites; we create digital experiences. Our development process focuses on performance, scalability, and user-centric design to ensure your brand stands out in the digital landscape.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    benefits: [
      'Increased user engagement through intuitive UI/UX.',
      'Lightning-fast load speeds for better SEO ranking.',
      'Full mobile responsiveness for any device size.',
      'Scalable architecture that grows with your business.'
    ],
    features: [
      { title: 'Custom Architecture', description: 'Built from scratch to meet your specific business requirements.', icon: Code },
      { title: 'Responsive Design', description: 'Perfect viewing experience on mobile, tablet, and desktop.', icon: Smartphone },
      { title: 'SEO Optimized', description: 'Built-in best practices to help you rank higher on Google.', icon: Search },
      { title: 'Fast Loading', description: 'Optimized code and assets for millisecond response times.', icon: Zap },
      { title: 'Secure Coding', description: 'Enterprise-grade security to protect your data.', icon: Shield },
      { title: 'Modern Tech Stack', description: 'Utilizing React, Next.js, and other cutting-edge tools.', icon: Layers },
      { title: 'Admin Dashboard', description: 'Easy-to-use CMS to manage your content effortlessly.', icon: Layout },
      { title: 'Analytics Integration', description: 'Track visitor behavior and conversion rates.', icon: BarChart }
    ],
    process: ['Consultation', 'Planning', 'Design', 'Development', 'Testing', 'Launch', 'Support'],
    portfolio: [
      { title: 'TechNova Corporate', industry: 'Technology', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800', features: ['Custom UI', 'CMS Integration', 'API connectivity'] },
      { title: 'EcoLife Portfolio', industry: 'Lifestyle', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', features: ['High performance', 'Minimalist design', 'SEO focus'] },
      { title: 'FinTrack Dashboard', industry: 'Finance', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', features: ['Data Visualization', 'Secure Login', 'Real-time Updates'] },
      { title: 'HealthHub Portal', industry: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', features: ['Patient Records', 'Appointment Booking', 'Telemedicine'] }
    ],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'A standard corporate website typically takes 4-6 weeks from planning to launch.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Yes, every website we build is 100% responsive and works perfectly on all devices.' },
      { question: 'Do you provide hosting services?', answer: 'Yes, we provide premium cloud hosting and ongoing maintenance support.' },
      { question: 'Can I update the content myself?', answer: 'Absolutely! We provide an easy-to-use CMS so you can manage your site without technical knowledge.' },
      { question: 'What technologies do you use?', answer: 'We primarily use React, Next.js, Tailwind CSS, and Node.js for high-performance results.' },
      { question: 'Do you offer SEO services?', answer: 'Yes, all our sites are built with SEO best practices, and we offer dedicated SEO packages.' },
      { question: 'Is my data secure?', answer: 'We implement the latest security protocols and SSL certificates to keep your data safe.' },
      { question: 'Can I integrate my existing tools?', answer: 'Yes, we can integrate third-party APIs, CRMs, and marketing tools.' },
      { question: 'Do you offer support after launch?', answer: 'Yes, we provide ongoing maintenance and technical support packages.' },
      { question: 'What is the cost of a custom website?', answer: 'Pricing depends on the features and complexity. Contact us for a custom quote.' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    shortDescription: 'Scalable online stores built for high conversion and seamless shopping experiences.',
    fullDescription: 'Empower your retail business with a powerful online store. From product management to secure payments, we provide a complete ecosystem to sell your products globally.',
    heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Streamlined checkout process to reduce cart abandonment.',
      'Secure payment gateway integrations.',
      'Inventory management made simple.',
      'Robust analytics to track sales and customer behavior.'
    ],
    features: [
      { title: 'Product Management', description: 'Easy bulk upload and inventory tracking.', icon: Database },
      { title: 'Secure Checkout', description: 'SSL encrypted and PCI compliant payment processing.', icon: Lock },
      { title: 'Multiple Payments', description: 'Support for Stripe, PayPal, Razorpay, and more.', icon: ShoppingCart },
      { title: 'Order Tracking', description: 'Real-time updates for customers and admins.', icon: Globe2 },
      { title: 'Discount Engine', description: 'Create and manage coupons and promotional offers.', icon: Tag },
      { title: 'Mobile Shopping', description: 'Optimized for the growing mobile commerce market.', icon: MobileIcon },
      { title: 'Customer Reviews', description: 'Build trust with integrated rating systems.', icon: Headphones },
      { title: 'SEO for Products', description: 'Dynamic meta tags for every product page.', icon: Search }
    ],
    process: ['Strategy', 'Wireframing', 'Design', 'Store Setup', 'Payment Integration', 'Testing', 'Launch'],
    portfolio: [
      { title: 'Aura Fashion', industry: 'E-Commerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', features: ['Multi-currency', 'Live Inventory', 'Fast Checkout'] },
      { title: 'Glow Cosmetics', industry: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=800', features: ['Product Bundles', 'Subscription Billing', 'Wishlist'] },
      { title: 'Urban Gadgets', industry: 'Electronics', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800', features: ['Comparison Tool', 'Tech Specs', 'Flash Sales'] },
      { title: 'Peak Fitness', industry: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', features: ['Membership Integration', 'Workout Plans', 'Live Chat'] }
    ],
    faqs: [
      { question: 'Which e-commerce platform do you use?', answer: 'We specialize in custom Shopify, WooCommerce, and custom-built Headless commerce solutions.' },
      { question: 'Can you migrate my existing store?', answer: 'Yes, we handle data migration from your current platform with zero downtime.' },
      { question: 'Do you integrate with local payment gateways?', answer: 'Yes, we support Razorpay, Paytm, Stripe, PayPal and many others.' },
      { question: 'Will my store be SEO optimized?', answer: 'Absolutely! We optimize product pages, categories, and site structure for maximum visibility.' },
      { question: 'Can I manage inventory easily?', answer: 'Yes, our systems include robust inventory management and low-stock alerts.' },
      { question: 'Do you offer mobile app development for the store?', answer: 'Yes, we can build companion iOS and Android apps for your e-commerce platform.' },
      { question: 'How secure is the payment processing?', answer: 'We use industry-standard PCI-DSS compliant gateways and SSL encryption.' },
      { question: 'Can I sell internationally?', answer: 'Yes, we can set up multi-currency and international shipping options.' },
      { question: 'Do you provide marketing tools?', answer: 'We integrate with email marketing, social media, and abandoned cart recovery tools.' },
      { question: 'What is the cost for an e-commerce site?', answer: 'Costs vary based on product count and features. Contact us for a detailed proposal.' }
    ],
    technologies: ['Shopify', 'Next.js', 'Stripe', 'Redis', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    shortDescription: 'Leverage the power of Artificial Intelligence to automate tasks and gain deep business insights.',
    fullDescription: 'Bring your business into the future with intelligent automation. We integrate advanced AI models to optimize workflows and enhance user experiences.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Automate repetitive manual tasks.',
      'Personalize user experiences at scale.',
      'Data-driven decision making.',
      '24/7 customer support via AI chatbots.'
    ],
    features: [
      { title: 'Chatbot Solutions', description: 'Intelligent customer support using GPT models.', icon: Bot },
      { title: 'Predictive Analytics', description: 'Forecast trends and customer behavior.', icon: BarChart },
      { title: 'Process Automation', description: 'AI-driven workflows to save time and resources.', icon: Settings },
      { title: 'Image Recognition', description: 'Advanced visual data processing.', icon: Maximize },
      { title: 'Natural Language', description: 'Process and analyze text data effortlessly.', icon: Terminal },
      { title: 'Smart Search', description: 'AI-powered search for faster discovery.', icon: Search },
      { title: 'Personalization', description: 'Dynamic content recommendations.', icon: Zap },
      { title: 'Custom AI Models', description: 'Models trained on your specific business data.', icon: Cpu }
    ],
    process: ['Data Audit', 'Model Selection', 'Integration', 'Fine-tuning', 'Deployment', 'Monitoring'],
    portfolio: [
      { title: 'EduBot AI', industry: 'Education', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', features: ['Auto-grading', '24/7 Support', 'Curriculum Mapping'] },
      { title: 'SmartReply CRM', industry: 'Sales', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', features: ['Lead Scoring', 'Auto-Response', 'Sentiment Analysis'] },
      { title: 'VisionScan Pro', industry: 'Manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', features: ['Defect Detection', 'Quality Control', 'Edge AI'] },
      { title: 'InsightGenie', industry: 'Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', features: ['Trend Prediction', 'Copy Generation', 'Audience Analytics'] }
    ],
    faqs: [
      { question: 'Will AI replace my employees?', answer: 'No, AI is designed to augment your team by handling repetitive tasks so they can focus on high-value work.' },
      { question: 'Is my business data used to train public models?', answer: 'No, we use private API instances and ensure your data remains confidential and secure.' },
      { question: 'What kind of AI models do you use?', answer: 'We work with OpenAI (GPT-4), Claude, Gemini, and custom Llama models depending on the use case.' },
      { question: 'How long does it take to integrate AI?', answer: 'Basic integrations take 2-4 weeks, while custom model training can take 2-3 months.' },
      { question: 'Can AI help with my customer support?', answer: 'Yes, AI chatbots can handle up to 80% of common queries instantly.' },
      { question: 'Does AI require a lot of computing power?', answer: 'We use cloud-based APIs to ensure your systems remain fast without expensive hardware.' },
      { question: 'Can AI analyze my business documents?', answer: 'Yes, we can build custom RAG systems to query your internal documentation.' },
      { question: 'Is AI integration expensive?', answer: 'We offer various tiers starting from simple API hookups to full custom model training.' },
      { question: 'Do you offer AI consulting?', answer: 'Yes, we help you identify the best areas where AI can provide the most ROI.' },
      { question: 'Can AI help with predictive sales?', answer: 'Yes, we build models that analyze historical data to predict future sales trends.' }
    ],
    technologies: ['OpenAI', 'Python', 'TensorFlow', 'Node.js', 'LangChain', 'Pinecone']
  },
  {
    id: 'crm-erp',
    title: 'Custom CRM / ERP',
    shortDescription: 'Enterprise-grade software solutions to streamline your business operations and management.',
    fullDescription: 'Manage your entire business ecosystem with a custom-built CRM or ERP solution. We design platforms that fit your specific workflows, from lead tracking to resource planning.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Centralized data management for better efficiency.',
      'Improved team collaboration and transparency.',
      'Automated reporting and business intelligence.',
      'Highly secure and scalable infrastructure.'
    ],
    features: [
      { title: 'Lead Management', description: 'Track and nurture leads through the entire sales funnel.', icon: Users },
      { title: 'Resource Planning', description: 'Optimize employee and inventory allocation.', icon: Layers },
      { title: 'Automated Reports', description: 'Generate complex business reports with one click.', icon: BarChart },
      { title: 'User Roles', description: 'Granular access control for different team members.', icon: Lock },
      { title: 'API Integration', description: 'Connect with your favorite third-party tools.', icon: Terminal },
      { title: 'Mobile Access', description: 'Manage your business on the go with mobile support.', icon: Smartphone },
      { title: 'Document Storage', description: 'Securely store and manage company documents.', icon: FileText },
      { title: 'Workflow Automation', description: 'Design custom triggers and actions for your team.', icon: Settings }
    ],
    process: ['Requirement Analysis', 'Architecture Design', 'Development', 'User Testing', 'Training', 'Deployment', 'Support'],
    portfolio: [
      { title: 'EduManage ERP', industry: 'Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', features: ['Student Portal', 'Fee Tracking', 'Attendance'] },
      { title: 'BuildSync ERP', industry: 'Construction', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800', features: ['Project Tracking', 'Vendor Management', 'Costing'] },
      { title: 'Hospira CRM', industry: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', features: ['Patient History', 'Doctor Scheduling', 'Billing'] },
      { title: 'RetailFlow', industry: 'Retail', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', features: ['POS Integration', 'Loyalty Program', 'Supply Chain'] }
    ],
    faqs: [
      { question: 'Is the CRM customizable?', answer: 'Yes, we build everything from scratch to ensure it perfectly fits your business processes.' },
      { question: 'Can we migrate data from our old Excel sheets?', answer: 'Yes, we provide full data migration services with data cleaning and validation.' },
      { question: 'Is the software hosted on our servers or yours?', answer: 'We offer both cloud-hosted (SaaS style) and on-premise installation options.' },
      { question: 'How secure is our business data?', answer: 'We use enterprise-grade encryption and multi-factor authentication for all systems.' },
      { question: 'Do you provide training for our staff?', answer: 'Yes, we include comprehensive training sessions and documentation for your team.' },
      { question: 'Can the ERP integrate with accounting software?', answer: 'Yes, we can integrate with Tally, Zoho Books, QuickBooks, and others.' },
      { question: 'What is the limit on user accounts?', answer: 'There is no hard limit; our systems are designed to scale with your organization.' },
      { question: 'Do you provide mobile apps for the CRM?', answer: 'Yes, we build custom mobile apps so your team can access data from anywhere.' },
      { question: 'How long does development take?', answer: 'Custom ERPs usually take 3-6 months depending on the number of modules.' },
      { question: 'Is there a monthly subscription fee?', answer: 'We offer both one-time license fees and monthly maintenance options.' }
    ],
    technologies: ['Node.js', 'PostgreSQL', 'React', 'Redis', 'AWS']
  },
  {
    id: 'seo',
    title: 'SEO & Marketing',
    shortDescription: 'Dominate search results and drive organic growth with data-backed SEO strategies.',
    fullDescription: 'Getting found online is the first step to success. Our SEO experts use advanced techniques to improve your rankings and attract high-intent traffic.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Higher rankings on Google for targeted keywords.',
      'Increased organic traffic and brand visibility.',
      'Better ROI compared to paid advertising.',
      'Long-term sustainable growth for your brand.'
    ],
    features: [
      { title: 'Keyword Research', description: 'Finding the most profitable terms for your niche.', icon: Search },
      { title: 'On-Page SEO', description: 'Optimizing content, meta tags, and headers.', icon: FileText },
      { title: 'Technical SEO', description: 'Fixing site speed, crawlability, and indexing issues.', icon: Settings },
      { title: 'Link Building', description: 'High-quality backlink strategies to build authority.', icon: Globe },
      { title: 'Content Strategy', description: 'Planning and creating SEO-driven content.', icon: Layout },
      { title: 'Local SEO', description: 'Optimizing for "near me" and local map searches.', icon: MapPin },
      { title: 'Competitor Analysis', description: 'Reverse engineering successful strategies.', icon: BarChart },
      { title: 'Monthly Reporting', description: 'Transparent tracking of your growth and rankings.', icon: BarChart }
    ],
    process: ['Audit', 'Strategy', 'Implementation', 'Content Creation', 'Monitoring', 'Refinement'],
    portfolio: [
      { title: 'HealthPlus Growth', industry: 'Healthcare', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', features: ['Top 3 Rankings', '200% Traffic Increase'] },
      { title: 'RealEstate Domination', industry: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', features: ['Local SEO', 'Map Pack Rankings', 'Lead Gen'] },
      { title: 'EduTech Visibility', industry: 'Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', features: ['Global Reach', 'Content Clusters', 'Backlink Profile'] },
      { title: 'Gourmet Growth', industry: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', features: ['Schema Markup', 'Mobile Speed', 'Review Management'] }
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Typically, significant organic growth is visible within 3-6 months of consistent effort.' },
      { question: 'Do you guarantee #1 rankings?', answer: 'No ethical SEO can guarantee #1 rankings as search algorithms change, but we guarantee improved visibility and traffic.' },
      { question: 'What is the difference between On-page and Technical SEO?', answer: 'On-page is about content and tags; Technical is about site speed, indexing, and architecture.' },
      { question: 'Is SEO a one-time thing?', answer: 'SEO is an ongoing process as competitors also work to outrank you and algorithms evolve.' },
      { question: 'Do you provide content writing?', answer: 'Yes, we have a team of SEO-focused content writers to create blogs and copy.' },
      { question: 'What tools do you use?', answer: 'We use premium tools like Ahrefs, Semrush, Screaming Frog, and Google Search Console.' },
      { question: 'Can you help with local Google Maps rankings?', answer: 'Yes, Local SEO is one of our specialties to help you dominate local searches.' },
      { question: 'How do you measure success?', answer: 'We track keyword rankings, organic traffic volume, and most importantly, conversion rates.' },
      { question: 'Do you fix existing technical issues?', answer: 'Yes, every project starts with a technical audit to fix foundation issues.' },
      { question: 'Will SEO work for my specific industry?', answer: 'Yes, every business needs to be found. We tailor strategies to your specific niche.' }
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    shortDescription: 'Save hundreds of hours by automating repetitive manual workflows and tasks.',
    fullDescription: 'Stop wasting time on manual data entry. We create custom automation pipelines that connect your tools and handle repetitive tasks automatically.',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Significant reduction in manual errors.',
      'Lower operational costs and overhead.',
      'Faster turnaround times for business processes.',
      'Free up your team for creative and strategic work.'
    ],
    features: [
      { title: 'API Integrations', description: 'Connecting your existing software ecosystem.', icon: Zap },
      { title: 'Auto Reporting', description: 'Daily/weekly reports sent to your email automatically.', icon: BarChart },
      { title: 'Email Automation', description: 'Custom sequences for leads and customers.', icon: Mail },
      { title: 'Lead Processing', description: 'Auto-capturing and assigning leads to your team.', icon: Users },
      { title: 'Database Sync', description: 'Keeping multiple data sources in perfect harmony.', icon: Database },
      { title: 'Task Scheduling', description: 'Precise timing for recurring business actions.', icon: Clock },
      { title: 'Cloud Automation', description: 'Leveraging serverless triggers for 24/7 reliability.', icon: Cloud },
      { title: 'Error Monitoring', description: 'Self-healing systems that alert you to issues.', icon: Shield }
    ],
    process: ['Process Discovery', 'Mapping', 'Development', 'Integration', 'Testing', 'Optimization'],
    portfolio: [
      { title: 'Logistics Streamliner', industry: 'Logistics', image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800', features: ['Auto-Labeling', 'Live Tracking'] },
      { title: 'SalesForce Sync', industry: 'Sales', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', features: ['Data Bridge', 'Real-time Sync', 'Conflict Resolution'] },
      { title: 'HR onboarding', industry: 'Human Resources', image: 'https://images.unsplash.com/photo-1521791136064-7986c2959d9c?auto=format&fit=crop&q=80&w=800', features: ['Document Auto-Gen', 'Auto-Email', 'Slack Triggers'] },
      { title: 'FinFlow Auto', industry: 'Finance', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', features: ['Invoice Capture', 'Auto-Approval', 'Ledger Update'] }
    ],
    faqs: [
      { question: 'What tools can you automate?', answer: 'We can automate almost any tool with an API, including Google Workspace, Slack, CRMs, and more.' },
      { question: 'Will I need to pay for automation platforms like Zapier?', answer: 'We try to use custom code or open-source tools like n8n to minimize your monthly costs.' },
      { question: 'How much time can I save with automation?', answer: 'Our clients typically save 10-40 hours of manual work per week.' },
      { question: 'Is automation secure?', answer: 'Yes, we use encrypted webhooks and secure API keys to ensure your data stays safe.' },
      { question: 'Can you automate my old legacy software?', answer: 'If it has an API or database access, yes. If not, we can use RPA (Robotic Process Automation).' },
      { question: 'Do I need to be tech-savvy to manage it?', answer: 'No, we build simple dashboards where you can monitor and control all your automations.' },
      { question: 'What happens if an automation fails?', answer: 'We build self-healing systems and instant alerts to notify us of any issues.' },
      { question: 'Can you automate customer outreach?', answer: 'Yes, we build personalized email and message sequences that trigger based on user behavior.' },
      { question: 'Is it worth it for a small business?', answer: 'Yes, it allows small teams to compete with much larger organizations by doing more with less.' },
      { question: 'Do you offer ongoing support for automations?', answer: 'Yes, we monitor and update automations as your business and tools evolve.' }
    ],
    technologies: ['Python', 'Node.js', 'AWS Lambda', 'Zapier', 'n8n', 'Puppeteer']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    shortDescription: 'Premium iOS and Android applications built for performance, security, and exceptional UX.',
    fullDescription: 'Take your business to the pockets of your customers. We develop high-performance native and cross-platform mobile apps that provide seamless experiences across all devices.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2400',
    benefits: [
      'Reach customers directly via push notifications.',
      'Offline capabilities for better user retention.',
      'High performance and smooth animations.',
      'Seamless integration with mobile hardware (GPS, Camera).'
    ],
    features: [
      { title: 'Cross-Platform', description: 'One codebase for both iOS and Android apps.', icon: Smartphone },
      { title: 'Push Notifications', description: 'Re-engage users with timely updates.', icon: Mail },
      { title: 'App Store SEO', description: 'Optimizing your app to rank high in stores.', icon: Search },
      { title: 'Secure Auth', description: 'Biometric and multi-factor authentication.', icon: Lock },
      { title: 'Cloud Sync', description: 'Real-time data synchronization across devices.', icon: Cloud },
      { title: 'Offline Mode', description: 'Ensure app functionality even without internet.', icon: Globe2 },
      { title: 'In-App Payments', description: 'Seamless checkout via Apple Pay and Google Pay.', icon: ShoppingCart },
      { title: 'Performance Analytics', description: 'Track user behavior and app health.', icon: BarChart }
    ],
    process: ['Strategy', 'Prototyping', 'UI/UX Design', 'Development', 'QA Testing', 'Store Submission', 'Maintenance'],
    portfolio: [
      { title: 'HealthTrack Pro', industry: 'Healthcare', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800', features: ['Watch Sync', 'Diet Tracker', 'Reminders'] },
      { title: 'SwiftCart Mobile', industry: 'Retail', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', features: ['Geo-fencing', 'AR Product View', 'One-click Buy'] },
      { title: 'EduLearn App', industry: 'Education', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', features: ['Video Lessons', 'Quizzes', 'Progress Tracker'] },
      { title: 'SocialHub', industry: 'Social Media', image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800', features: ['Real-time Chat', 'Image Filters', 'Stories'] }
    ],
    faqs: [
      { question: 'Do you build native or cross-platform apps?', answer: 'We specialize in React Native and Flutter for cross-platform apps, which saves time and cost without sacrificing performance.' },
      { question: 'How long does it take to develop an app?', answer: 'A typical MVP (Minimum Viable Product) takes 8-12 weeks to develop.' },
      { question: 'Will you help with App Store submission?', answer: 'Yes, we handle the entire process of submitting your app to the Apple App Store and Google Play Store.' },
      { question: 'Can you integrate existing web APIs?', answer: 'Absolutely! We can connect your mobile app to your existing website backend and database.' },
      { question: 'Do you offer maintenance after launch?', answer: 'Yes, we provide monthly maintenance to ensure the app works on new OS versions.' },
      { question: 'How do push notifications work?', answer: 'We set up cloud messaging services that allow you to send updates to users anytime.' },
      { question: 'Can the app work offline?', answer: 'Yes, we can implement local storage so users can access key features without internet.' },
      { question: 'How do you ensure app security?', answer: 'We use token-based authentication and SSL pinning to protect user data.' },
      { question: 'Do you design the UI/UX as well?', answer: 'Yes, we have specialized mobile designers who focus on touch-friendly and intuitive interfaces.' },
      { question: 'What is the cost of developing a custom mobile app?', answer: 'Costs depend on complexity and platform support. Contact us for a custom quote.' }
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'Swift', 'Kotlin']
  }
];
