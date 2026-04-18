import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { heroSlides } from '../data/products';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          {/* Background Video or Image */}
          {heroSlides[current].video ? (
            <video
              src={heroSlides[current].video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
              style={{ backgroundImage: `url(${heroSlides[current].image})` }}
            />
          )}

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block text-[#1e3a8a] bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              >
                Established 2008
              </motion.span>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
              >
                {heroSlides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
              >
                {heroSlides[current].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl active:scale-95">
                  {heroSlides[current].cta}
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === index ? 'w-10 bg-[#1e3a8a]' : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
