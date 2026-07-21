import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  Code2, 
  Globe, 
  Zap, 
  CreditCard, 
  Clock, 
  FileCheck, 
  Users, 
  Lock, 
  LifeBuoy, 
  AlertCircle, 
  ArrowUp,
  Mail,
  MessageCircle,
  ChevronRight,
  Gavel,
  RefreshCw,
  Eye,
  Handshake,
  Copyright,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface TermsPageProps {
  onBack: () => void;
}

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms', icon: Scale },
  { id: 'services', title: '2. Services We Provide', icon: Code2 },
  { id: 'demo', title: '3. Free Demo Policy', icon: Eye },
  { id: 'confirmation', title: '4. Project Confirmation', icon: FileCheck },
  { id: 'payment', title: '5. Payment Terms', icon: CreditCard },
  { id: 'pricing', title: '6. Pricing Policy', icon: Zap },
  { id: 'revisions', title: '7. Revision Policy', icon: RefreshCw },
  { id: 'responsibilities', title: '8. Client Responsibilities', icon: Users },
  { id: 'delivery', title: '9. Delivery Timeline', icon: Clock },
  { id: 'hosting', title: '10. Domain & Hosting', icon: Globe },
  { id: 'ip-rights', title: '11. Intellectual Property', icon: Copyright },
  { id: 'third-party', title: '12. Third-Party Services', icon: ExternalLink },
  { id: 'maintenance', title: '13. Maintenance & Support', icon: LifeBuoy },
  { id: 'refunds', title: '14. Refund & Cancellation', icon: AlertCircle },
  { id: 'confidentiality', title: '15. Confidentiality', icon: Lock },
  { id: 'liability', title: '16. Limitation of Liability', icon: Gavel },
  { id: 'portfolio', title: '17. Portfolio Rights', icon: Zap },
  { id: 'termination', title: '18. Project Termination', icon: ShieldCheck },
  { id: 'changes', title: '19. Changes to Terms', icon: RefreshCw },
  { id: 'law', title: '20. Governing Law', icon: Gavel },
  { id: 'contact', title: '21. Contact Information', icon: Mail },
];

export default function TermsPage({ onBack }: TermsPageProps) {
  const [activeSection, setActiveSection] = useState('acceptance');
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
            Legal Information
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6"
          >
            Terms & <span className="text-blue-500">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8C1D9] max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed"
          >
            Please read these Terms & Conditions carefully before using PandaTech Digital services. 
            By purchasing or using our services, you agree to these legally binding terms.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-32 space-y-1 bg-[#111827]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4 ml-4">Contents</h3>
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
            <TermSection id="acceptance" title="1. Acceptance of Terms" icon={Scale}>
              <p>By accessing the website at PandaTech Digital and purchasing our services, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              <p>If you do not agree with any of these terms, you are prohibited from using or accessing our services. The materials contained in this website are protected by applicable copyright and trademark law.</p>
            </TermSection>

            <TermSection id="services" title="2. Services We Provide" icon={Code2}>
              <p>PandaTech Digital offers a wide range of digital solutions tailored for modern businesses:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  'Professional Website Development',
                  'Advanced E-Commerce Solutions',
                  'Native & Cross-Platform Mobile Apps',
                  'AI Integration & Implementation',
                  'Custom CRM / ERP Systems',
                  'Modern UI/UX Design',
                  'SEO & Digital Growth',
                  'Maintenance & DevOps Support'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#B8C1D9]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </TermSection>

            <TermSection id="demo" title="3. Free Demo Policy" icon={Eye}>
              <p>We provide "Free Demos" to help potential clients visualize the potential of their project. Please note:</p>
              <ul className="space-y-4 mt-4">
                <li className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm">
                  <span className="text-blue-500 font-bold block mb-1">Evaluation Only</span>
                  Demo websites are created strictly for evaluation and visualization purposes only.
                </li>
                <li className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm">
                  <span className="text-blue-500 font-bold block mb-1">Ownership</span>
                  Full intellectual property and source code ownership of the demo remains with PandaTech Digital until a formal purchase is completed.
                </li>
              </ul>
            </TermSection>

            <TermSection id="confirmation" title="4. Project Confirmation" icon={FileCheck}>
              <p>A project is considered "Confirmed" once the following conditions are met:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-[#B8C1D9]">
                <li>Detailed requirements are documented and approved.</li>
                <li>Timeline and deliverables are agreed upon.</li>
                <li>Initial deposit/advance payment is successfully received.</li>
              </ul>
            </TermSection>

            <TermSection id="payment" title="5. Payment Terms" icon={CreditCard}>
              <p>Our standard payment structure typically follows a milestone-based approach:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'Booking', value: '40% Advance' },
                  { label: 'Development', value: '30% Mid-way' },
                  { label: 'Deployment', value: '30% Final' }
                ].map((milestone, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#111827] border border-white/5 text-center">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{milestone.label}</p>
                    <p className="text-xl font-bold text-white italic">{milestone.value}</p>
                  </div>
                ))}
              </div>
            </TermSection>

            <TermSection id="pricing" title="6. Pricing Policy" icon={Zap}>
              <p>All prices quoted are project-specific. We reserve the right to modify pricing for any additional features or changes requested after the initial project scope is finalized.</p>
              <p className="text-blue-500/80 italic font-medium mt-4">Note: Promotional prices are valid only for the duration specified in the offer.</p>
            </TermSection>

            <TermSection id="revisions" title="7. Revision Policy" icon={RefreshCw}>
              <p>Client satisfaction is our priority. Our standard packages include a set number of revisions (typically 3 rounds). Major changes to the core architecture after approval may incur additional costs.</p>
            </TermSection>

            <TermSection id="responsibilities" title="8. Client Responsibilities" icon={Users}>
              <p>To ensure timely delivery, the client agrees to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-[#B8C1D9]">
                <li>Provide necessary brand assets (Logos, Content, Images).</li>
                <li>Provide feedback within the agreed-upon timeframe (usually 48-72 hours).</li>
                <li>Ensure access to necessary accounts (Domain, Hosting, APIs) if applicable.</li>
              </ul>
            </TermSection>

            <TermSection id="delivery" title="9. Delivery Timeline" icon={Clock}>
              <p>Estimated timelines are provided at the start of the project. While we strive for precision, delivery dates are subject to change based on client feedback speed and any unforeseen technical complexities.</p>
            </TermSection>

            <TermSection id="hosting" title="10. Domain & Hosting Policy" icon={Globe}>
              <p>Unless specified in the package, Domain and Hosting costs are to be borne by the client. We provide assistance in setup, but the client is responsible for timely renewals to prevent service interruption.</p>
            </TermSection>

            <TermSection id="ip-rights" title="11. Intellectual Property" icon={Copyright}>
              <p>Upon final payment, the client receives full ownership of the final project assets and code. PandaTech Digital retains the right to use the project in its portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
            </TermSection>

            <TermSection id="third-party" title="12. Third-Party Services" icon={ExternalLink}>
              <p>We are not liable for the uptime or performance of third-party services (e.g., Google Maps, Payment Gateways, Hosting Providers, AI APIs) integrated into your project.</p>
            </TermSection>

            <TermSection id="maintenance" title="13. Maintenance & Support" icon={LifeBuoy}>
              <p>Post-launch support is provided for a period of 30 days for bug fixes. Long-term maintenance packages are available and recommended for critical business applications.</p>
            </TermSection>

            <TermSection id="refunds" title="14. Refund & Cancellation" icon={AlertCircle}>
              <p>Due to the digital nature of our services and the manual labor involved, payments are generally non-refundable once work has commenced. Cancellations requested before work starts may be eligible for a partial refund minus administrative fees.</p>
            </TermSection>

            <TermSection id="confidentiality" title="15. Confidentiality" icon={Lock}>
              <p>Both parties agree to protect and maintain the confidentiality of any proprietary information shared during the course of the project.</p>
            </TermSection>

            <TermSection id="liability" title="16. Limitation of Liability" icon={Gavel}>
              <p>PandaTech Digital shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services or the final deliverables.</p>
            </TermSection>

            <TermSection id="portfolio" title="17. Portfolio Rights" icon={Zap}>
              <p>We reserve the right to display the completed work on our website, social media, and other marketing materials as part of our professional portfolio.</p>
            </TermSection>

            <TermSection id="termination" title="18. Project Termination" icon={ShieldCheck}>
              <p>Either party may terminate the agreement if the other party fails to fulfill their obligations. Work done up to the point of termination must be paid for in full.</p>
            </TermSection>

            <TermSection id="changes" title="19. Changes to Terms" icon={RefreshCw}>
              <p>We reserve the right to update these Terms & Conditions at any time. Significant changes will be communicated to active clients via email or website notification.</p>
            </TermSection>

            <TermSection id="law" title="20. Governing Law" icon={Gavel}>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </TermSection>

            <TermSection id="contact" title="21. Contact Information" icon={Mail}>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                <p className="mb-6">For any questions regarding these Terms & Conditions, please contact us:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-bold">pandatechdigital253@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
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
            </TermSection>

            {/* CTA Section */}
            <div className="pt-20">
              <div className="relative p-10 md:p-16 rounded-[3rem] bg-blue-600 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6 relative z-10">
                  Need <span className="text-black">Help?</span>
                </h2>
                <p className="text-blue-50/80 max-w-xl mx-auto text-sm md:text-lg font-medium mb-10 relative z-10">
                  Have questions regarding our legal structure or terms? 
                  Our team is here to provide full transparency.
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

function TermSection({ id, title, icon: Icon, children }: { 
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
