import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  Info, 
  ArrowRight, 
  X, 
  Sparkles, 
  Clock, 
  LifeBuoy, 
  Shield, 
  Smartphone, 
  Zap, 
  Search, 
  Cpu, 
  Rocket,
  Gift,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { packages } from "../data";
import { cn } from "../lib/utils";

interface PricingProps {
  onDemoRequest?: () => void;
}

export default function Pricing({ onDemoRequest }: PricingProps) {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  return (
    <section 
      id="pricing" 
      className="relative w-full overflow-hidden bg-[#0D1224] pt-0 pb-0"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Pricing Packages
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Blueprint</span>
            </h2>
          </motion.div>
        </div>

        <div id="pricing-grid" className="grid grid-cols-2 gap-2 md:gap-4 mb-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={cn(
                "group relative flex flex-col bg-[#111827] rounded-2xl p-4 md:p-5 border transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 h-full",
                pkg.recommended 
                  ? "border-blue-600 ring-2 ring-blue-500/10 shadow-lg shadow-blue-600/10" 
                  : "border-white/5"
              )}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[8px] md:text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-lg">
                  Recommended
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-3">
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-black text-white italic">₹{pkg.price.toLocaleString()}</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-4 flex-grow">
                  {pkg.features.slice(0, 6).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[10px] md:text-xs font-medium text-[#B8C1D9]">
                      <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full py-2.5 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest text-blue-500 bg-blue-600/10 hover:bg-blue-600/20 transition-all border border-blue-500/20"
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/919678377275?text=${encodeURIComponent(
                      `Hello PandaTech Digital! 👋\n\nI'm interested in the *${pkg.name} (${pkg.price})*.\n\nPlease share complete information about this package, including:\n• Features\n• Development process\n• Delivery time\n• Support\n• Payment process\n\nThank you.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "w-full py-2.5 rounded-xl font-black text-center transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-[9px] md:text-[10px]",
                      pkg.recommended
                        ? "bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-500/25"
                        : "bg-green-600/10 text-green-400 hover:bg-green-600 hover:text-white border border-green-500/20"
                    )}
                  >
                    Get Free Demo
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div> {/* Close max-w-7xl */}

      {/* Call to Action - Full Width & 16:9 Aspect Ratio */}
      <div className="w-full relative overflow-hidden aspect-[16/9] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(13, 18, 36, 0.95), rgba(13, 18, 36, 0.2), rgba(13, 18, 36, 0.95)), url('/file_00000000123c8208abfc9296617ba9e0.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-blue-600/5 z-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-0">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-xl md:text-5xl font-black text-white uppercase italic mb-2 md:mb-4">
                Not sure which <span className="text-blue-500">plan</span> is right?
              </h3>
              <p className="text-[#B8C1D9] text-[10px] md:text-lg font-medium leading-relaxed">
                Schedule a free strategy call and let's define your project together.
              </p>
            </div>
            <button
              onClick={onDemoRequest}
              className="px-6 py-3 md:px-10 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-sm hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 md:gap-3"
            >
              🚀 Get FREE Demo
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#111827] rounded-[2rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/5"
            >
              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl md:rounded-2xl transition-colors text-white/70"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="p-6 md:p-16 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="mb-8 md:mb-12">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
                    Package Blueprint
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase leading-none">
                    {selectedPackage.name} <span className="text-blue-500">Package</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-6">
                  {selectedPackage.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-3 md:gap-4 py-2 md:py-4 border-b border-white/5 group hover:border-blue-500/30 transition-colors"
                    >
                      <div className="mt-0.5 w-4.5 h-4.5 md:w-6 md:h-6 rounded-full bg-blue-600/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Check className="w-3 md:w-3.5 h-3 md:h-3.5" />
                      </div>
                      <span className="text-xs md:text-[15px] font-bold text-[#B8C1D9] group-hover:text-white transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 md:mt-16 p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
                   <div className="flex flex-col items-center sm:items-start">
                     <p className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest mb-1 md:mb-2">Total Investment</p>
                     <p className="text-2xl md:text-4xl font-black text-white">₹{selectedPackage.price.toLocaleString()}</p>
                   </div>
                   
                   <a
                    href="#contact"
                    onClick={() => setSelectedPackage(null)}
                    className="w-full sm:w-auto px-8 md:px-12 py-3.5 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 md:gap-3 group"
                  >
                    Select this package
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

