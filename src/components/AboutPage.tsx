import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle2, 
  Code2, 
  Globe, 
  Cpu, 
  Layout, 
  Wrench, 
  BarChart3, 
  Search,
  MessageSquare,
  PenTool,
  Terminal,
  MousePointer2,
  RocketIcon,
  MessageCircle,
  Mail,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface AboutPageProps {
  onBack: () => void;
  onDemoRequest: () => void;
}

const services = [
  { icon: Layout, title: 'Business Websites', desc: 'Custom-built websites designed to convert visitors into customers.' },
  { icon: Globe, title: 'E-commerce Solutions', desc: 'Powerful online stores with seamless payment and inventory management.' },
  { icon: Terminal, title: 'Web Applications', desc: 'Complex, scalable web apps tailored to your specific business logic.' },
  { icon: Cpu, title: 'AI Integration', desc: 'Smart features like chatbots and automation to future-proof your business.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'User-centric designs that are both visually stunning and highly functional.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Continuous support and updates to keep your digital assets running smoothly.' },
  { icon: Zap, title: 'Speed Optimization', desc: 'High-performance tuning for lightning-fast loading across all devices.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Built-in search engine optimization to help your brand rank higher.' },
];

const features = [
  'Modern Responsive Design',
  'Mobile-First Development',
  'Fast Loading Performance',
  'SEO Optimized',
  'Secure Development',
  'Clean UI/UX',
  'Transparent Pricing',
  'Reliable Support',
  'On-Time Delivery'
];

const steps = [
  { icon: MessageSquare, title: 'Requirement Discussion', desc: 'We dive deep into your goals and project needs.' },
  { icon: PenTool, title: 'Planning & Design', desc: 'Crafting the blueprint and visual identity of your project.' },
  { icon: Code2, title: 'Development', desc: 'Bringing designs to life with clean, high-performance code.' },
  { icon: Shield, title: 'Testing & Optimization', desc: 'Rigorous quality checks and performance fine-tuning.' },
  { icon: RocketIcon, title: 'Launch & Support', desc: 'Successful deployment and ongoing professional assistance.' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Always pushing boundaries with the latest technologies.' },
  { icon: CheckCircle2, title: 'Quality', desc: 'Uncompromising standards in every line of code.' },
  { icon: MousePointer2, title: 'Transparency', desc: 'Clear communication and honest project management.' },
  { icon: Users, title: 'Customer Success', desc: 'Your growth is the ultimate measure of our success.' },
  { icon: Shield, title: 'Reliability', desc: 'Dependable solutions you can trust for years to come.' },
  { icon: Zap, title: 'Continuous Improvement', desc: 'Constantly evolving our skills and methodologies.' },
];

export default function AboutPage({ onBack, onDemoRequest }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-blue-600/30 selection:text-blue-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Rocket className="w-3 h-3" />
            About PandaTech Digital
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8"
          >
            Building Modern <span className="text-blue-500">Digital</span> Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8C1D9] max-w-3xl mx-auto text-sm md:text-xl font-medium leading-relaxed mb-12"
          >
            We help businesses grow online with premium websites, web applications, 
            AI-powered solutions, and innovative digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onDemoRequest}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
            >
              Get Free Demo
              <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('triggerDemoForm'))}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-[#111827] border border-white/5 relative overflow-hidden group shadow-2xl shadow-blue-900/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.05),transparent)]" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-8">
                  Who We <span className="text-blue-500">Are</span>
                </h2>
                <div className="space-y-6 text-[#B8C1D9] text-sm md:text-lg font-medium leading-relaxed">
                  <p>
                    PandaTech Digital is a modern web development agency focused on building high-quality 
                    digital products that help businesses establish a powerful online presence.
                  </p>
                  <p>
                    Our mission is to make premium websites and digital solutions affordable, 
                    professional, and accessible for businesses of all sizes. We believe technology 
                    should empower, not complicate.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-96 aspect-square rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/file_000000005df88208ab0fff3177238b2e.png" 
                  alt="Our Team" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 animate-pulse bg-blue-500/5" />
                <Users className="w-32 h-32 text-blue-500 relative z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-5 md:px-8 bg-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
              Our <span className="text-blue-500">Services</span>
            </h2>
            <p className="text-[#B8C1D9] max-w-2xl mx-auto text-sm md:text-lg font-medium">
              We provide a comprehensive suite of digital solutions to help your business thrive in the modern era.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[#111827] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-sm text-[#B8C1D9] leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-8">
                Why <span className="text-blue-500">Choose Us</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="p-8 rounded-3xl bg-blue-600 text-white text-center">
                  <p className="text-4xl font-black italic mb-1">99%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Success Rate</p>
                </div>
                <div className="p-8 rounded-3xl bg-[#111827] border border-white/5 text-center">
                  <p className="text-4xl font-black italic text-white mb-1">24/7</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#B8C1D9]">Support</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-[#111827] border border-white/5 text-center">
                  <p className="text-4xl font-black italic text-white mb-1">100+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#B8C1D9]">Projects</p>
                </div>
                <div className="p-8 rounded-3xl bg-blue-600/20 border border-blue-500/20 text-center">
                  <p className="text-4xl font-black italic text-blue-500 mb-1">FAST</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-500/80">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-5 md:px-8 bg-[#0a0a0a]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
              Our <span className="text-blue-500">Process</span>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-3xl bg-[#111827] border-2 border-white/5 flex items-center justify-center text-blue-500 mb-8 group-hover:border-blue-500/50 transition-all relative z-10">
                      <step.icon className="w-10 h-10" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-[10px] font-black">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight mb-3">{step.title}</h3>
                    <p className="text-xs text-[#B8C1D9] leading-relaxed px-4">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-[#111827] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
            <Target className="w-12 h-12 text-blue-500 mb-8" />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-6">Our <span className="text-blue-500">Vision</span></h2>
            <p className="text-sm md:text-lg text-[#B8C1D9] font-medium leading-relaxed">
              "To become a trusted digital partner by delivering innovative, reliable, and high-quality 
              digital solutions that help businesses grow in the digital world."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[3rem] bg-blue-600 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.2),transparent)]" />
            <Rocket className="w-12 h-12 text-white mb-8" />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-6">Our <span className="text-black">Mission</span></h2>
            <p className="text-sm md:text-lg text-blue-50 font-medium leading-relaxed">
              "We believe every business deserves a powerful online presence. Our mission is to create 
              modern, scalable, and user-friendly digital solutions that deliver real business value."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-5 md:px-8 bg-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
              Our <span className="text-blue-500">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-[#111827] border border-white/5 hover:border-blue-500/20 transition-all flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-sm text-[#B8C1D9] leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[4rem] bg-blue-600 overflow-hidden text-center shadow-[0_0_50px_rgba(37,99,235,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-8">
                Let's Build Something <span className="text-black">Amazing</span> Together
              </h2>
              <p className="text-blue-50/90 max-w-2xl mx-auto text-sm md:text-xl font-medium mb-12">
                Ready to grow your business with a premium website? 
                Join our roster of successful digital partners.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={onDemoRequest}
                  className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all shadow-2xl"
                >
                  Get Free Demo
                  <Zap className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('triggerDemoForm'))}
                  className="w-full sm:w-auto px-12 py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-2xl"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </button>
                <a 
                  href="https://wa.me/919678377275"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-12 py-6 bg-green-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-green-500 transition-all shadow-2xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-[110] px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        Back to Site
      </button>
    </div>
  );
}
