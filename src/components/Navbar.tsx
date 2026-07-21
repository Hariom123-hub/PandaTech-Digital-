import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Home, Users, Briefcase, Tag, Image as ImageIcon, Phone, HelpCircle, Shield, FileText, RotateCcw, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { ViewType } from '../App';

interface NavbarProps {
  setView: (view: ViewType) => void;
  currentView: ViewType;
  onDemoRequest?: () => void;
}

export default function Navbar({ setView, currentView, onDemoRequest }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, view: 'home' as ViewType, color: 'text-blue-400' },
    { name: 'About Us', icon: Users, view: 'about' as ViewType, color: 'text-purple-400' },
    { name: 'Services', href: '#services', icon: Briefcase, view: 'home' as ViewType, color: 'text-amber-400' },
    { name: 'Pricing', href: '#pricing', icon: Tag, view: 'home' as ViewType, color: 'text-emerald-400' },
    { name: 'Portfolio', href: '#portfolio', icon: ImageIcon, view: 'home' as ViewType, color: 'text-rose-400' },
    { name: 'FAQ', icon: HelpCircle, view: 'faq' as ViewType, color: 'text-indigo-400' },
    { name: 'Privacy Policy', icon: Shield, view: 'privacy' as ViewType, color: 'text-cyan-400' },
    { name: 'Terms & Conditions', icon: FileText, view: 'terms' as ViewType, color: 'text-slate-400' },
    { name: 'Refund Policy', icon: RotateCcw, view: 'refund' as ViewType, color: 'text-red-400' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.view === 'home' && link.href) {
      if (currentView !== 'home') {
        setView('home');
        // Wait for re-render then scroll
        setTimeout(() => {
          const el = document.querySelector(link.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setView(link.view);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b',
          isScrolled || isOpen || currentView !== 'home'
            ? 'bg-[#050816]/95 backdrop-blur-xl border-white/5 shadow-2xl flex items-center py-2' 
            : 'bg-[#050816]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-white/5 md:border-transparent flex items-center py-2'
        )}
      >
        <div className="w-full px-5 md:px-10 lg:px-12 flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1">
            <button 
              onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="flex items-center gap-3 md:gap-4 flex-shrink-0 group relative z-10"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 bg-[#0a0f25]">
                <img 
                  src="/logo.png" 
                  alt="PandaTech Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center">
                  PandaTech
                  <span className="ml-1 text-blue-600">Digital</span>
                </span>
              </div>
            </button>

            {/* Social Links (Under Branding) - Now Colorful and Visible Everywhere */}
            <div className="flex items-center gap-2 ml-[52px] md:ml-[64px]">
              <a href="https://www.facebook.com/share/1DM5Fg5qYa/" target="_blank" rel="noreferrer" className="w-5 h-5 rounded-md bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://www.linkedin.com/in/pandatech-digital-a300ba344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-5 h-5 rounded-md bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm">
                <Linkedin className="w-3 h-3" />
              </a>
              <a href="https://www.youtube.com/@PandaTechDigital-01" target="_blank" rel="noreferrer" className="w-5 h-5 rounded-md bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm">
                <Youtube className="w-3 h-3" />
              </a>
              <a href="https://wa.me/919678377275" target="_blank" rel="noreferrer" className="w-5 h-5 rounded-md bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm">
                <MessageCircle className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.slice(0, 6).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105",
                    isScrolled || currentView !== 'home' ? "text-[#B8C1D9] hover:text-white" : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={onDemoRequest}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2 group"
            >
              Get Free Demo
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile/Tablet Toggle */}
          <button
            className={cn(
              "p-2 rounded-xl transition-all",
              isScrolled || isOpen || currentView !== 'home' ? "text-white bg-white/5" : "text-white bg-white/10 backdrop-blur-md"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-[#050816] pt-20 md:pt-24 pb-10 md:pb-12 px-4 md:px-6 flex flex-col h-full overflow-y-auto"
          >
            <div className="max-w-xl mx-auto w-full flex-1 flex flex-col justify-center py-6 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleLinkClick(link)}
                    className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/30 transition-all group text-left"
                  >
                    <div className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all",
                      link.color
                    )}>
                      <link.icon className="w-4.5 h-4.5 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[9px] font-black text-[#B8C1D9]/40 uppercase tracking-widest mb-0.5 leading-none">Navigation</p>
                      <h3 className="text-[15px] md:text-lg font-black text-white uppercase tracking-tight leading-none group-hover:text-blue-500 transition-colors">{link.name}</h3>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-[10px] font-black text-[#B8C1D9]/40 uppercase tracking-[0.3em] mb-6">Connect With Us</p>
                <div className="flex justify-center gap-4 mb-10">
                  <a href="https://www.facebook.com/share/1DM5Fg5qYa/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#1877F2]/20">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/pandatech-digital-a300ba344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#0077B5]/20">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@PandaTechDigital-01" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#FF0000]/20">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/919678377275" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-[10px] font-black text-[#B8C1D9]/40 uppercase tracking-[0.3em] mb-6">Need Immediate Help?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+919678377275" className="flex items-center gap-2 text-sm font-black text-white bg-white/5 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest border border-white/5">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a href="https://wa.me/919678377275" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-black text-white bg-green-600 px-6 py-4 rounded-2xl hover:bg-green-700 transition-all uppercase tracking-widest">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-10 border-t border-white/5 text-center">
              <p className="text-[10px] font-bold text-[#B8C1D9]/30 uppercase tracking-widest">
                © {new Date().getFullYear()} PandaTech Digital • All Rights Reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
