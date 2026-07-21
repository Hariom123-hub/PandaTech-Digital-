import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onDemoRequest?: () => void;
}

export default function Hero({ onDemoRequest }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative w-full aspect-video flex items-center justify-center overflow-hidden bg-black mt-16"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        {/* Technical Grid Overlay - Lightened */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 h-full flex items-center justify-center py-2 md:py-8 lg:py-12">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 md:space-y-6 lg:space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[8px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md"
            >
              <Sparkles className="w-2.5 h-2.5 md:w-4 md:h-4" />
              <span>Premium Digital Agency</span>
            </motion.div>
            
            <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-white uppercase italic drop-shadow-lg">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">Future</span> of Web.
            </h1>
            
            <p className="text-slate-200 text-[10px] sm:text-xs md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-md opacity-90">
              We engineer high-performance digital ecosystems that elevate brands and drive exponential growth through UI/UX excellence.
            </p>
            
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 pt-2 md:pt-6">
              <button
                onClick={onDemoRequest}
                className="group relative px-4 py-2 md:px-10 md:py-5 bg-emerald-600 text-white rounded-lg md:rounded-2xl font-bold uppercase tracking-widest text-[8px] md:text-sm hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 md:gap-3 overflow-hidden w-fit"
              >
                Get FREE Demo
                <ArrowRight className="w-3 h-3 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#pricing-grid"
                className="px-4 py-2 md:px-10 md:py-5 bg-blue-600 text-white rounded-lg md:rounded-2xl font-bold uppercase tracking-widest text-[8px] md:text-sm hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 md:gap-3 w-fit"
              >
                Packages
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
