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

  // Dynamic classes for Light/Dark Mode
  const backgroundClasses = isDark 
    ? "bg-gray-900" 
    : "bg-white";   
    
  // ✅ MODIFICATION: Light Mode - Use subtle light grey/white background
  const accentBackgroundClasses = isDark
    ? "from-gray-800/20 via-gray-900/20 to-gray-700/20" 
    : "from-white via-gray-50 to-white";     

  // ✅ MODIFICATION: Light Mode - Darker text for visibility
  const textClasses = isDark
    ? "text-gray-300" 
    : "text-gray-700"; 

  const brandAccentClasses = isDark
    ? "text-orange-400"
    : "text-orange-600"; 

  // ✅ MODIFICATION: Light Mode - Subtle light grey blur for visual depth
  const subtleBlurClasses = isDark
    ? "bg-gray-700/20" 
    : "bg-gray-100/70"; // Changed to much lighter, less distracting grey

  return (
    <section 
      id="home" 
      className={`pt-16 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20 ${backgroundClasses}`}
    >
      <div className="absolute inset-0">
        {/* Dynamic background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accentBackgroundClasses}`} />
        
        {/* Dynamic Blur 1 */}
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${subtleBlurClasses}`}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dynamic Blur 2 */}
        <motion.div 
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${subtleBlurClasses}`}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="text-center">
          <motion.h1 
            // Heading gradient remains the same
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sharma Business
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl mb-8 ${textClasses} max-w-4xl mx-auto leading-relaxed`}
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
            {/* Primary Button (Color remains orange gradient for consistency) */}
            <button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 text-white rounded-2xl font-semibold shadow-2xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-500 transition-all duration-300 ease-in-out"
            >
              <span className="flex items-center justify-center">
                Discover Our Story
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiChevronUp className="w-5 h-5 rotate-90" />
                </motion.div>
              </span>
            </button>
            
            {/* Secondary Button (Border and text color adjusted for light mode using Grey) */}
            <button
              onClick={() => scrollToSection('brands')}
              className={`px-8 py-4 border-2 rounded-2xl font-semibold shadow-xl transition-all duration-300 ease-in-out ${
                isDark 
                  ? 'border-white text-white hover:bg-orange-500 hover:border-orange-500' 
                  : 'border-gray-500 text-gray-700 hover:bg-orange-500 hover:text-white' // ✅ MODIFICATION: Using gray shades
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