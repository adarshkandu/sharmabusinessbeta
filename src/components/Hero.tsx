import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi';

interface HeroProps {
  scrollToSection: (section: string) => void;
  isDark: boolean; 
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, isDark = false }) => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const backgroundClasses = isDark ? 'transition-colors duration-500 bg-gray-900' : 'transition-colors duration-500 bg-white';
  const accentBackgroundClasses = isDark ? 'transition-colors duration-500 from-gray-800/20 via-gray-900/20 to-gray-700/20' : 'transition-colors duration-500 from-white via-gray-50 to-white';
  const textClasses = isDark ? 'transition-colors duration-500 text-gray-300' : 'transition-colors duration-500 text-gray-700';
  const brandAccentClasses = isDark ? 'transition-colors duration-500 text-orange-400' : 'transition-colors duration-500 text-orange-600';
  const subtleBlurClasses = isDark ? 'transition-colors duration-500 bg-gray-700/20' : 'transition-colors duration-500 bg-gray-100/70';

  return (
    <section id="home" className={`scroll-mt-20 relative overflow-hidden pt-16 min-h-screen flex items-center justify-center ${backgroundClasses}`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${accentBackgroundClasses}`} />
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${subtleBlurClasses}`}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${subtleBlurClasses}`}
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="text-center">
          <motion.h1 
            className="transition-all duration-500 leading-tight mb-6 font-bold text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sharma Business
          </motion.h1>
          <motion.p 
            className={`transition-colors duration-500 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${textClasses}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A dynamic, multi-tasking company housing multiple successful brands under one umbrella. 
            Serving over <span className={`font-bold ${brandAccentClasses}`}>800+ clients</span> across various industries with 
            excellence and innovation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="transition-all duration-300 ease-in-out group px-8 py-4 font-semibold shadow-2xl rounded-2xl text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 hover:from-orange-600 hover:via-orange-700 hover:to-orange-500"
            >
              <span className="flex items-center justify-center">
                Discover Our Story
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiChevronUp className="rotate-90 w-5 h-5" />
                </motion.div>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className={`transition-all duration-500 ease-in-out px-8 py-4 shadow-xl rounded-2xl font-semibold border-2 ${
                isDark ? 'border-white text-white hover:bg-orange-500 hover:border-orange-500' : 'border-gray-500 text-gray-700 hover:bg-orange-500 hover:text-white'
              }`}
            >
              Explore Our Brands
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
