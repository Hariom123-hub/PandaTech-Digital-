import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  PlayCircle, 
  FileText,
  ChevronDown,
  ChevronUp,
  Star,
  Layout,
  Smartphone as MobileIcon,
  Search,
  Zap,
  Shield,
  Cpu,
  Maximize,
  Headphones
} from 'lucide-react';
import { useState } from 'react';
import { servicesData } from '../data/services';
import { cn } from '../lib/utils';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onNavigateToPackage: () => void;
  onNavigateToContact: () => void;
  onDemoRequest?: () => void;
}

export default function ServiceDetail({ serviceId, onBack, onNavigateToPackage, onNavigateToContact, onDemoRequest }: ServiceDetailProps) {
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappLink = `https://wa.me/919678377275?text=${encodeURIComponent(`Hello PandaTech Digital! 👋\n\nI'm interested in learning more about your ${service.title} services.`)}`;

  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            className="w-full h-full object-cover opacity-20"
            alt={service.title}
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-[10px] mb-8 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-blue-500" : ""}>{word} </span>
                ))}
              </h1>
              <p className="text-[#B8C1D9] text-lg md:text-2xl font-medium mb-10 max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={onDemoRequest}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all"
              >
                <PlayCircle className="w-5 h-5" />
                Get Free Demo
              </button>
              <button 
                onClick={onDemoRequest}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 transition-all"
              >
                <FileText className="w-5 h-5" />
                Get a Quote
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-xl shadow-green-500/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-24 bg-[#0D1224]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Deep Dive</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase leading-tight">
                Understanding our <span className="text-blue-400">Approach</span>
              </h3>
              <p className="text-[#B8C1D9] text-lg font-medium leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-blue-600/10 border border-white/5"
            >
              <img 
                src={service.heroImage} 
                className="w-full h-full object-cover mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"
                alt="Overview"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Features</h2>
          <h3 className="text-3xl md:text-6xl font-black italic uppercase">Premium Capabilities</h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-blue-600/5 hover:border-blue-500/20 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-[#B8C1D9] text-sm font-medium leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-[#0D1224]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Why Us</h2>
            <h3 className="text-3xl md:text-6xl font-black italic uppercase">The PandaTech <span className="text-blue-500">Advantage</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: 'Modern UI/UX', icon: Layout },
              { title: 'Mobile Responsive', icon: MobileIcon },
              { title: 'SEO Friendly', icon: Search },
              { title: 'Fast Loading', icon: Zap },
              { title: 'Secure', icon: Shield },
              { title: 'AI Powered', icon: Cpu },
              { title: 'Scalable', icon: Maximize },
              { title: 'Premium Support', icon: Headphones }
            ].map((adv, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-[#111827] border border-white/5 flex flex-col items-center text-center gap-4 hover:bg-blue-600/5 transition-all"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <adv.icon className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h5 className="text-xs md:text-lg font-black uppercase tracking-tight">{adv.title}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Development Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Workflow</h2>
            <h3 className="text-3xl md:text-6xl font-black italic uppercase">The Road to <span className="text-blue-500">Launch</span></h3>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-[#050816] flex items-center justify-center text-xl font-black shadow-xl shadow-blue-600/20">
                    {i + 1}
                  </div>
                  <h6 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-center">{step}</h6>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Section */}
      <section className="py-24 bg-[#0D1224]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Portfolio</h2>
              <h3 className="text-3xl md:text-6xl font-black italic uppercase leading-none">Featured <span className="text-blue-500">Work</span></h3>
            </div>
            <button className="text-xs font-black uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-400 transition-colors">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.portfolio.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/5"
              >
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale-[50%] group-hover:grayscale-0"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">{project.industry}</span>
                  <h4 className="text-2xl md:text-4xl font-black uppercase italic mb-4">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((f, fi) => (
                      <span key={fi} className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest">{f}</span>
                    ))}
                  </div>
                  <button className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                    View Demo <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Packages (Simplified for Detail Page) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-20">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Investment</h2>
          <h3 className="text-3xl md:text-6xl font-black italic uppercase">Choose Your <span className="text-blue-500">Plan</span></h3>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="p-8 md:p-12 rounded-[3rem] bg-[#111827] border-2 border-blue-600 shadow-2xl shadow-blue-600/20 text-center relative overflow-hidden">
            <div className="absolute top-8 right-8 bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">
              Recommended Plan
            </div>
            <h4 className="text-4xl font-black uppercase italic mb-4">Premium Business</h4>
            <div className="text-5xl font-black text-blue-500 mb-8 italic">₹24,999</div>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
              {[
                'Unlimited Pages', 'Premium UI Design', 'Full AI Integration', 'Advanced SEO Suite',
                'E-Commerce Ready', 'Custom Dashboard', '24/7 Priority Support', 'Free Cloud Hosting'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-[#B8C1D9]">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={onDemoRequest}
              className="bg-blue-600 hover:bg-blue-500 text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all"
            >
              Get Free Demo <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-[#0D1224]/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Help Center</h2>
            <h3 className="text-3xl md:text-6xl font-black italic uppercase leading-none">Common <span className="text-blue-500">Queries</span></h3>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-2xl border transition-all duration-300",
                  openFaq === i ? "bg-[#111827] border-blue-600/30" : "bg-white/5 border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm md:text-lg font-black uppercase tracking-tight italic">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-[#B8C1D9]" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#B8C1D9] text-sm md:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Success Stories</h2>
            <h3 className="text-3xl md:text-6xl font-black italic uppercase">What Our <span className="text-blue-500">Clients Say</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah J.', role: 'CEO, TechFlow', text: 'PandaTech transformed our online presence. Our sales increased by 200% within 3 months of launch.', rating: 5 },
              { name: 'Michael R.', role: 'Founder, EcoGrow', text: 'The AI integration they built for us saved over 40 hours of manual work per week. Highly recommended.', rating: 5 },
              { name: 'David L.', role: 'Marketing Dir, Nexa', text: 'Professional, fast, and the quality of their code is outstanding. Best agency we have worked with.', rating: 5 }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-[#111827] border border-white/5 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />)}
                </div>
                <p className="text-[#B8C1D9] italic font-medium leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center font-black text-blue-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-black uppercase tracking-tight text-sm">{t.name}</h5>
                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Tech Stack */}
      <section className="py-24 bg-[#0D1224]/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-10">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {service.technologies.map((tech, i) => (
              <span key={i} className="text-2xl md:text-5xl font-black uppercase tracking-tighter italic">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-24 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-center relative overflow-hidden group shadow-2xl shadow-blue-500/20"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black italic uppercase leading-tight mb-10 tracking-tighter">
              Ready to Grow <br /> Your <span className="text-black">Business?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={onDemoRequest}
                className="bg-white text-black hover:bg-black hover:text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl"
              >
                Get Free Demo Website
              </button>
              <button 
                onClick={onDemoRequest}
                className="bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/40 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all"
              >
                Talk to an Expert
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 transition-all shadow-xl shadow-green-500/20"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Add AnimatePresence import fix
import { AnimatePresence } from 'motion/react';
