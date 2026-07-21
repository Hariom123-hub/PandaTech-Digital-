import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="pt-24 pb-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Image Overlay - Using user-provided image */}
      <div 
        className="absolute inset-0 z-0 opacity-80 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.1), rgba(10, 10, 10, 0.7)), url('/file_00000000ebfc820bba92db8de2d9c3d5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.95] mb-48">
            What Our <span className="text-blue-500">Partners</span> Say
          </h2>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm mb-4">
            Client Reviews
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex animate-marquee space-x-6 w-fit hover:[animation-play-state:paused] py-4">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            className="w-[240px] md:w-[350px] flex-shrink-0 p-5 md:p-8 rounded-xl md:rounded-3xl bg-[#111827] border border-white/5 shadow-sm hover:shadow-blue-500/5 transition-all duration-500"
          >
            <div className="flex items-center gap-2.5 md:gap-4 mb-3 md:mb-6">
              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl border border-white/5 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-blue-600 rounded-md flex items-center justify-center text-white text-[7px] font-black shadow-lg">
                  "
                </div>
              </div>
              <div>
                <h4 className="text-[11px] md:text-base font-extrabold text-white uppercase tracking-tight">{testimonial.name}</h4>
                <p className="text-[7px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#B8C1D9] text-[10px] md:text-sm leading-relaxed font-medium italic">
              "{testimonial.content}"
            </p>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
