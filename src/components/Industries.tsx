import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { industries } from '../data/industries';

const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, nextSlide]);

  const handleGetDemo = (industryName: string) => {
    const phoneNumber = "919678377275";
    const message = `Hello PandaTech Digital! 👋\n\nI'm interested in a FREE Demo Website for my ${industryName}.\n\nPlease share more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="industries" className="py-24 bg-[#050816] overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            WE BUILD WEBSITES FOR <span className="text-blue-600">EVERY INDUSTRY</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            No matter what business you run, we build modern, high-performance websites that help you grow faster.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="relative h-[450px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full rounded-[20px] overflow-hidden group shadow-2xl shadow-blue-900/20">
                  <img 
                    src={industries[activeIndex].image} 
                    alt={industries[activeIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/40">
                      {React.createElement(industries[activeIndex].icon, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{industries[activeIndex].name}</h3>
                    <p className="text-slate-300 text-sm mb-6 font-medium line-clamp-2">
                      {industries[activeIndex].description}
                    </p>
                    <button 
                      onClick={() => handleGetDemo(industries[activeIndex].name)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-sm uppercase tracking-widest"
                    >
                      Get FREE Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-1.5 mt-8 overflow-x-auto py-2 no-scrollbar">
            {industries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-[380px] rounded-[20px] overflow-hidden bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              <img 
                src={industry.image} 
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  <industry.icon size={20} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{industry.name}</h3>
                <p className="text-slate-300 text-xs mb-6 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {industry.description}
                </p>
                <button 
                  onClick={() => handleGetDemo(industry.name)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-blue-600 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 transition-all group-hover:scale-105 opacity-0 group-hover:opacity-100 delay-100 text-[10px] uppercase tracking-widest"
                >
                  Get FREE Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
