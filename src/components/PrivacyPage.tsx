import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ShieldCheck, 
  Database, 
  Zap, 
  Cookie, 
  Lock, 
  Share2, 
  ExternalLink, 
  UserCheck, 
  Baby, 
  RefreshCw, 
  Mail,
  MessageCircle,
  ChevronRight,
  ArrowUp,
  Eye,
  FileText,
  LifeBuoy
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface PrivacyPageProps {
  onBack: () => void;
}

const sections = [
  { id: 'introduction', title: '1. Introduction', icon: FileText },
  { id: 'collection', title: '2. Information We Collect', icon: Database },
  { id: 'usage', title: '3. How We Use Information', icon: Zap },
  { id: 'cookies', title: '4. Cookies & Tracking', icon: Cookie },
  { id: 'security', title: '5. Data Security', icon: Lock },
  { id: 'sharing', title: '6. Information Sharing', icon: Share2 },
  { id: 'third-party', title: '7. Third-Party Services', icon: ExternalLink },
  { id: 'rights', title: '8. User Rights', icon: UserCheck },
  { id: 'children', title: '9. Children\'s Privacy', icon: Baby },
  { id: 'updates', title: '10. Policy Updates', icon: RefreshCw },
  { id: 'contact', title: '11. Contact Us', icon: LifeBuoy },
];

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  const [activeSection, setActiveSection] = useState('introduction');
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
            Privacy Policy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6"
          >
            Your Privacy <span className="text-blue-500">Matters</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#B8C1D9] max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed"
          >
            We are committed to protecting your personal information and maintaining complete transparency 
            about how we collect, use, and safeguard your data.
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
            <PrivacySection id="introduction" title="1. Introduction" icon={FileText}>
              <p>At PandaTech Digital, we respect your privacy and are committed to protecting any personal information collected through our website and digital services.</p>
              <p>This Privacy Policy explains how we gather, use, disclose, and safeguard your information when you visit our website or use our services, including our AI-powered solutions and web development platforms.</p>
            </PrivacySection>

            <PrivacySection id="collection" title="2. Information We Collect" icon={Database}>
              <p>We may collect several types of information from and about users of our services, including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  'Full Name & Business Name',
                  'Email Address',
                  'Phone & WhatsApp Number',
                  'Business Address',
                  'Current Website Information',
                  'Specific Project Requirements',
                  'Voluntary Form Submissions',
                  'Direct Email/WhatsApp Inquiries'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </PrivacySection>

            <PrivacySection id="usage" title="3. How We Use Information" icon={Zap}>
              <p>Your information is used strategically to deliver the best possible experience and service quality:</p>
              <ul className="space-y-4 mt-4">
                {[
                  'Respond to your inquiries and provide support.',
                  'Create and customize free demo websites.',
                  'Deliver and implement requested digital services.',
                  'Process payments and handle financial transactions.',
                  'Send critical project updates and notifications.',
                  'Improve our website functionality and user experience.',
                  'Communicate important business information or changes.'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#B8C1D9]">
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">
                      <Zap className="w-3 h-3" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </PrivacySection>

            <PrivacySection id="cookies" title="4. Cookies & Tracking" icon={Cookie}>
              <p>Our website uses cookies and similar tracking technologies to enhance performance and analyze traffic.</p>
              <div className="grid gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-[#111827] border border-white/5">
                  <span className="text-blue-500 font-bold block mb-2 text-xs uppercase tracking-widest">Why we use cookies:</span>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#B8C1D9]">
                    <li>To improve general user experience and navigation.</li>
                    <li>To remember your preferences for future visits.</li>
                    <li>To analyze website traffic and user behavior patterns.</li>
                    <li>To enhance overall website speed and security.</li>
                  </ul>
                </div>
                <p className="text-xs text-white/40 italic">Note: You can choose to disable cookies through your individual browser settings, although this may affect certain website features.</p>
              </div>
            </PrivacySection>

            <PrivacySection id="security" title="5. Data Security" icon={Lock}>
              <p>PandaTech Digital implements a variety of administrative, technical, and physical security measures to protect your personal information.</p>
              <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20 mt-4">
                <p className="text-sm font-medium text-white italic">
                  "While we use industry-standard encryption and security protocols to safeguard your data from unauthorized access or misuse, please be aware that no method of transmission over the internet is 100% secure."
                </p>
              </div>
            </PrivacySection>

            <PrivacySection id="sharing" title="6. Information Sharing" icon={Share2}>
              <p>Your trust is our priority. <span className="text-white font-bold">We never sell, rent, or trade your personal information to third parties.</span></p>
              <p className="mt-4">Information is only shared under these specific conditions:</p>
              <ul className="list-disc list-inside space-y-2 text-[#B8C1D9]">
                <li>When required by law or to respond to legal processes.</li>
                <li>With trusted third-party providers necessary for service delivery (Hosting, Payments, Analytics).</li>
                <li>To protect the rights, property, or safety of PandaTech Digital and our users.</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="third-party" title="7. Third-Party Services" icon={ExternalLink}>
              <p>Our website and services may integrate third-party tools to provide a comprehensive experience:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                {[
                  'Google Maps',
                  'WhatsApp',
                  'Google Analytics',
                  'Payment Gateways'
                ].map((item, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-center flex items-center justify-center gap-2">
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/40 italic">Each of these third-party services maintains its own independent privacy policy, which we encourage you to review.</p>
            </PrivacySection>

            <PrivacySection id="rights" title="8. User Rights" icon={UserCheck}>
              <p>You have the right to maintain control over your personal data. You may request to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[
                  { title: 'Access', text: 'Request a copy of the data we hold about you.' },
                  { title: 'Correct', text: 'Update or fix any inaccurate information.' },
                  { title: 'Delete', text: 'Request the removal of your personal data.' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-blue-500 font-bold block mb-1 text-[10px] uppercase tracking-widest">{item.title}</span>
                    <p className="text-xs text-[#B8C1D9]">{item.text}</p>
                  </div>
                ))}
              </ul>
            </PrivacySection>

            <PrivacySection id="children" title="9. Children's Privacy" icon={Baby}>
              <p>Our services are designed for businesses and professional use. We do not knowingly collect or solicit personal information from children under the age of 13.</p>
            </PrivacySection>

            <PrivacySection id="updates" title="10. Policy Updates" icon={RefreshCw}>
              <p>PandaTech Digital reserves the right to update this Privacy Policy at any time to reflect changes in our practices or for legal/regulatory reasons.</p>
              <p className="mt-4">The most current version will always be posted on this page with the effective revision date.</p>
            </PrivacySection>

            <PrivacySection id="contact" title="11. Contact Us" icon={LifeBuoy}>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
                <p className="mb-6">If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out:</p>
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
            </PrivacySection>

            {/* CTA Section */}
            <div className="pt-20">
              <div className="relative p-10 md:p-16 rounded-[3rem] bg-blue-600 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6 relative z-10">
                  Need <span className="text-black">Assistance?</span>
                </h2>
                <p className="text-blue-50/80 max-w-xl mx-auto text-sm md:text-lg font-medium mb-10 relative z-10">
                  Have questions about how we handle your data? Our dedicated privacy team is here to provide full transparency.
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

function PrivacySection({ id, title, icon: Icon, children }: { 
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
