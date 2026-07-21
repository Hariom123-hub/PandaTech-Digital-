import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const sliderImages = [
  {
    id: 1,
    url: '/video-portfolio.mp4',
    title: 'Modern Digital Solutions',
    type: 'video'
  },
  {
    id: 2,
    url: '/portfolio-1.png',
    title: 'Workspace Excellence',
    type: 'image'
  },
  {
    id: 3,
    url: '/portfolio-2.png',
    title: 'Design Innovation',
    type: 'image'
  },
  {
    id: 4,
    url: '/portfolio-3.png',
    title: 'Strategic Planning',
    type: 'image'
  },
  {
    id: 5,
    url: '/portfolio-4.png',
    title: 'Future Tech',
    type: 'image'
  },
  {
    id: 6,
    url: '/file_000000005df88208ab0fff3177238b2e.png',
    title: 'Development Precision',
    type: 'image'
  },
  {
    id: 7,
    url: '/file_00000000ebfc820bba92db8de2d9c3d5.png',
    title: 'UX Research',
    type: 'image'
  },
  {
    id: 8,
    url: '/file_00000000c220820bbf7911168a75fef7.png',
    title: 'Creative Workshop',
    type: 'image'
  },
  {
    id: 9,
    url: '/file_00000000d0ac820ba49cb6c9452ea5de.png',
    title: 'Digital Craftsmanship',
    type: 'image'
  },
  {
    id: 10,
    url: '/file_00000000472c81f8822660a9863daa50.png',
    title: 'Team Collaboration',
    type: 'image'
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, []);

  useEffect(() => {
    // Longer interval for video and multiple images
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section id="portfolio" className="pt-12 pb-16 md:pt-20 md:pb-32 bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        {/* Team Introduction Section */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
              👥 OUR TEAM
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-tight">
              <span className="uppercase">Inside</span> PandaTech <span className="text-blue-500">Digital</span>
            </h2>
            <p className="text-[#B8C1D9] max-w-3xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
              Our experienced team of Website Developers, UI/UX Designers, AI Engineers, Automation Experts and DevOps Specialists works together to build modern, high-performance websites for every business.
            </p>
          </motion.div>
        </div>

        {/* Premium Image Carousel */}
        <div className="relative w-full max-w-6xl mx-auto group">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] shadow-2xl shadow-blue-600/10 bg-[#111827]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) {
                    prevSlide();
                  } else if (info.offset.x < -100) {
                    nextSlide();
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                {sliderImages[currentIndex].type === 'video' ? (
                  <video
                    src={sliderImages[currentIndex].url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    key={sliderImages[currentIndex].url}
                    className="h-full w-full object-cover pointer-events-none"
                    poster="/file_00000000a6d0820bbce857a59402257c.png"
                  >
                    <source src={sliderImages[currentIndex].url} type="video/mp4" />
                    <source src={sliderImages[currentIndex].url.replace('/', '')} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={sliderImages[currentIndex].url}
                    alt={sliderImages[currentIndex].title}
                    className="h-full w-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Desktop/Tablet */}
            <div className="hidden md:flex absolute inset-0 items-center justify-between px-4 z-20 pointer-events-none">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#050816] transition-all pointer-events-auto opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#050816] transition-all pointer-events-auto opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-10 bg-blue-600' : 'bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
