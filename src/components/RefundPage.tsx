import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ShieldCheck, 
  HelpCircle, 
  Zap, 
  CreditCard, 
  Clock, 
  FileX, 
  AlertCircle, 
  ArrowUp,
  Mail,
  MessageCircle,
  ChevronRight,
  RefreshCw,
  Eye,
  Trash2,
  DollarSign,
  Briefcase,
  LifeBuoy
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface RefundPageProps {
  onBack: () => void;
}

const sections = [
  { id: 'overview', title: '1. Overview', icon: HelpCircle },
  { id: 'demo', title: '2. Free Demo Website', icon: Eye },
  { id: 'advance', title: '3. Advance Payment', icon: DollarSign },
  { id: 'eligibility', title: '4. Refund Eligibility', icon: ShieldCheck },
  { id: 'non-refundable', title: '5. Non-Refundable Items', icon: Trash2 },
  { id: 'cancellation', title: '6. Project Cancellation', icon: FileX },
  { id: 'mind', title: '7. Change of Mind', icon: AlertCircle },
  { id: 'third-party', title: '8. Third-Party Services', icon: Briefcase },
  { id: 'processing', title: '9. Refund Processing', icon: RefreshCw },
  { id: 'contact', title: '10. Contact Us', icon: LifeBuoy },
];

export default function RefundPage({ onBack }: RefundPageProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-blue-600/30 selection:text-blue-500">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            Refund Policy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6"
          >
            Refund & <span className="text-blue-500">Cancellation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8C1D9] max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed"
          >
            Our goal is to provide transparent and fair policies regarding refunds and project cancellations.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-32 space-y-1 bg-[#111827]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4 ml-4">Policy Contents</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all group",
                    activeSection === section.id 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                      : "text-white/40 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <section.icon className={cn(
                    "w-4 h-4",
                    activeSection === section.id ? "text-white" : "text-blue-500/50 group-hover:text-blue-500"
                  )} />
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-1 space-y-12">
            <RefundSection id="overview" title="1. Overview" icon={HelpCircle}>
              <p>PandaTech Digital provides customized digital services including website development, AI integration, and software solutions. Because our services are highly tailored to individual client needs and involve significant manual labor and resource allocation, refunds are subject to the specific terms outlined in this policy.</p>
              <p>We believe in full transparency and strive to ensure every client is satisfied with the value we deliver.</p>
            </RefundSection>

            <RefundSection id="demo" title="2. Free Demo Website" icon={Eye}>
              <div className="grid gap-4 mt-4">
                {[
                  { title: 'Zero Cost', text: 'Free Demo Websites are completely free of charge. We provide these to showcase our capabilities and your project\'s potential.' },
                  { title: 'No Commitment', text: 'Viewing a demo does not require any payment or financial commitment.' },
                  { title: 'No Obligation', text: 'Clients are under no obligation to purchase or proceed with the project after viewing the demo.' }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-all">
                    <span className="text-blue-500 font-bold block mb-1 uppercase tracking-wider text-xs">{item.title}</span>
                    <p className="text-sm text-[#B8C1D9]">{item.text}</p>
                  </div>
                ))}
              </div>
            </RefundSection>

            <RefundSection id="advance" title="3. Advance Payment" icon={DollarSign}>
              <p>To secure resources and initiate the professional development process, an advance payment is required for all projects.</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-[#B8C1D9]">
                <li>Projects begin only after the advance payment is successfully processed.</li>
                <li>Advance payment covers initial strategy, planning, UI/UX design, and development resource allocation.</li>
                <li><span className="text-white font-bold">Advance payments are generally non-refundable</span> once work on the project has officially commenced.</li>
              </ul>
            </RefundSection>

            <RefundSection id="eligibility" title="4. Refund Eligibility" icon={ShieldCheck}>
              <p>Refunds may only be considered in exceptional circumstances:</p>
              <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 mt-4">
                <p className="text-sm font-medium text-white">
                  A refund request may be evaluated if PandaTech Digital fails to deliver the agreed-upon project deliverables due to reasons solely under our direct control and after all efforts to rectify the situation have been exhausted.
                </p>
              </div>
            </RefundSection>

            <RefundSection id="non-refundable" title="5. Non-Refundable Items" icon={Trash2}>
              <p>The following items and services are strictly non-refundable:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  'Completed Development',
                  'Custom Designs',
                  'Domain Registration',
                  'Hosting Services',
                  'Premium Plugins',
                  'API Usage Fees',
                  'Third-Party Software',
                  'Software Licenses',
                  'Digital Products'
                ].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[11px] md:text-xs font-bold text-center">
                    {item}
                  </div>
                ))}
              </div>
            </RefundSection>

            <RefundSection id="cancellation" title="6. Project Cancellation" icon={FileX}>
              <p>Clients may request to cancel a project at any time. However, the following rules apply:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-[#B8C1D9]">
                <li>If the client cancels after work has started, any payments made for completed work or allocated resources will not be refunded.</li>
                <li>The client will be responsible for any outstanding balances for work completed up to the date of cancellation.</li>
              </ul>
            </RefundSection>

            <RefundSection id="mind" title="7. Change of Mind" icon={AlertCircle}>
              <p>Refunds are not available for any of the following reasons:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  'Change of heart or mind',
                  'Internal budget changes',
                  'Business pivot or closure',
                  'Requirement changes mid-way',
                  'Delayed client response',
                  'External market factors'
                ].map((reason, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#B8C1D9]">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    {reason}
                  </li>
                ))}
              </ul>
            </RefundSection>

            <RefundSection id="third-party" title="8. Third-Party Services" icon={Briefcase}>
              <p>PandaTech Digital often integrates third-party services (e.g., payment gateways, cloud servers, AI models). Please note:</p>
              <div className="p-6 rounded-2xl bg-[#111827] border border-white/5 mt-4">
                <p className="text-sm italic">
                  "Payments made to third-party providers (hosting, domains, API providers) are governed by their own policies and cannot be refunded by PandaTech Digital."
                </p>
              </div>
            </RefundSection>

            <RefundSection id="processing" title="9. Refund Processing" icon={RefreshCw}>
              <p>In the event that a refund is approved by our management team:</p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Timeline</p>
                    <p className="text-xs text-[#B8C1D9]">Approved refunds will be processed within 7–14 business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CreditCard className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">Method</p>
                    <p className="text-xs text-[#B8C1D9]">Refunds will be issued using the original payment method whenever technically possible.</p>
                  </div>
                </div>
              </div>
            </RefundSection>

            <RefundSection id="contact" title="10. Contact Us" icon={LifeBuoy}>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                <p className="mb-6">If you have any questions or concerns regarding our Refund & Cancellation Policy, please reach out to us:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#050816] border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-bold">pandatechdigital253@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#050816] border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">WhatsApp</p>
                      <p className="text-sm font-bold">+91 9678377275</p>
                    </div>
                  </div>
                </div>
              </div>
            </RefundSection>

            {/* CTA Section */}
            <div className="pt-20">
              <div className="relative p-10 md:p-16 rounded-[3rem] bg-blue-600 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6 relative z-10">
                  Need <span className="text-black">Help?</span>
                </h2>
                <p className="text-blue-50/80 max-w-xl mx-auto text-sm md:text-lg font-medium mb-10 relative z-10">
                  Questions about our refund policy? Our support team is available 24/7 to provide clarity and assistance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('triggerDemoForm'))}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all shadow-xl"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </button>
                  <a 
                    href="https://wa.me/919678377275"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all shadow-xl"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[100] p-4 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-600/40 hover:bg-blue-500 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

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

function RefundSection({ id, title, icon: Icon, children }: { 
  id: string; 
  title: string; 
  icon: any; 
  children: React.ReactNode 
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-8 md:p-12 rounded-[2.5rem] bg-[#111827] border border-white/5 shadow-2xl shadow-blue-900/5"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/10">
          <Icon className="w-7 h-7" />
        </div>
        <h2 className="text-xl md:text-3xl font-black uppercase italic tracking-tight text-white">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[#B8C1D9] text-sm md:text-base leading-relaxed font-medium">
        {children}
      </div>
    </motion.section>
  );
}
