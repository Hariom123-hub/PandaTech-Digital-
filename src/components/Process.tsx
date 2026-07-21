import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Process() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="pt-24 pb-20 bg-[#0D1224] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-extrabold uppercase tracking-[0.2em] text-xs mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight italic leading-none">
              How We Make <span className="text-blue-400">It Happen</span>
            </h3>
            <p className="text-[#B8C1D9] max-w-2xl mx-auto text-sm md:text-lg font-medium opacity-80">
              Watch our cinematic journey from initial contact to successful launch.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Video Container with Premium Styling */}
          <div className="relative aspect-video rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111827] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
            {/* Glossy Overlay Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-white/5" />
            
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            >
              <source 
                src="/YouCut_20260719_214634840.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>

            {/* Mute/Unmute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 transition-all duration-300 shadow-lg group/btn"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX size={20} className="md:w-6 md:h-6" />
              ) : (
                <Volume2 size={20} className="md:w-6 md:h-6" />
              )}
            </button>

            {/* Premium Glow Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[21px] md:rounded-[41px] blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Cinematic Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[40px] pointer-events-none -translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-[40px] pointer-events-none translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}
