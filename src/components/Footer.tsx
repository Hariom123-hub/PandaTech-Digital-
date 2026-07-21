import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Youtube, Facebook, ArrowUp, Send, Linkedin, MessageCircle } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  setView: (view: ViewType) => void;
}

export default function Footer({ setView }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: ViewType) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] text-[#B8C1D9] pt-12 md:pt-16 pb-8 md:pb-10 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* TOP SECTION: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="max-w-md">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-2 md:gap-3 mb-4 group">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 bg-white/5 p-1">
                <img 
                  src="/logo.png?v=2" 
                  alt="PandaTech Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-base md:text-lg font-bold tracking-tight text-white font-display">
                PandaTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital</span>
              </span>
            </button>
            <p className="text-[11px] md:text-xs leading-relaxed font-medium text-[#B8C1D9]/60">
              PandaTech Digital is a premium agency specializing in modern, AI-powered web solutions. We help businesses grow through innovative technology and exceptional design.
            </p>
          </div>

          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1DM5Fg5qYa/" target="_blank" rel="noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#1877F2]/20">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/pandatech-digital-a300ba344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#0077B5]/20">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@PandaTechDigital-01" target="_blank" rel="noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#FF0000]/20">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919678377275" target="_blank" rel="noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#25D366]/20">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-10" />

        {/* MIDDLE SECTION: Links in 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h4 className="text-white font-black mb-5 uppercase tracking-[0.2em] text-[10px]">Quick Links</h4>
            <ul className="space-y-2.5 text-[9px] font-black uppercase tracking-widest">
              <li><button onClick={() => navigateTo('home')} className="hover:text-blue-500 transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-blue-500 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-blue-500 transition-colors">Services</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-blue-500 transition-colors">Packages</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('triggerDemoForm'))} className="text-blue-500 hover:text-blue-400 transition-colors">Get Free Demo</button></li>
              <li><button onClick={() => navigateTo('faq')} className="hover:text-blue-500 transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-black mb-5 uppercase tracking-[0.2em] text-[10px]">Legal</h4>
            <ul className="space-y-2.5 text-[9px] font-black uppercase tracking-widest">
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-blue-500 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-blue-500 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => navigateTo('refund')} className="hover:text-blue-500 transition-colors">Refund Policy</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-blue-500 transition-colors">Sitemap</button></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-black mb-5 uppercase tracking-[0.2em] text-[10px]">Newsletter</h4>
            <p className="text-[11px] mb-4 font-medium text-[#B8C1D9]/60">Subscribe for the latest tech updates.</p>
            <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 transition-all text-[9px] font-black uppercase tracking-widest placeholder:text-white/20 text-white"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />

        {/* BOTTOM SECTION: Copyright & Attribution */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] font-bold text-[#B8C1D9]/40 uppercase tracking-widest">
            © {new Date().getFullYear()} <span className="text-white">PandaTech <span className="text-blue-500">Digital</span></span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-bold text-[#B8C1D9]/40 uppercase tracking-widest">
              Made with <span className="text-rose-500">❤️</span> by PandaTech Digital
            </p>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group shadow-xl"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
