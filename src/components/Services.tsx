import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onExplore?: (id: string) => void;
}

export default function Services({ onExplore }: ServicesProps) {
  return (
    <section id="services" className="pt-6 pb-0 md:pt-12 md:pb-0 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10">
        <div className="mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Our Expertise
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
              Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions</span>
            </h2>
            <p className="text-[#B8C1D9] max-w-2xl text-sm md:text-xl font-medium leading-relaxed">
              We specialize in high-performance web ecosystems, intelligent automation, and bespoke software that defines market leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = (Icons as any)[service.icon] || Icons.Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-[#111827] rounded-xl border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 opacity-80 transition-opacity group-hover:opacity-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
                </div>

                <div className="p-4 md:p-8 flex flex-col h-full relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h4 className="text-sm md:text-2xl font-black text-white mb-2 uppercase italic tracking-tight leading-tight group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[#B8C1D9] text-[10px] md:text-base leading-relaxed font-medium mb-4 flex-grow line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/5">
                    <button 
                      onClick={() => onExplore?.(service.id)}
                      className="flex items-center gap-1.5 text-blue-500 font-bold uppercase tracking-widest text-[8px] md:text-xs group/btn hover:text-white transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
