import React from 'react';
import { motion } from 'framer-motion';
import { HiEye } from 'react-icons/hi';
import personImg from '../assets/person.jpg'; // Replace with your image

interface VisionProps {
  isDark: boolean;
}

const Vision: React.FC<VisionProps> = ({ isDark }) => {
  // Dynamic Text Colors for better consistency and contrast
  const mainText = isDark ? 'text-white' : 'text-gray-900';
  const firstParagraphText = isDark ? 'text-gray-300' : 'text-gray-700'; // ✅ MODIFIED: Consistent dark gray
  const secondParagraphText = isDark ? 'text-gray-400' : 'text-gray-700'; // ✅ MODIFIED: Consistent dark gray
  
  // Dynamic Card Background
  const cardClasses = isDark 
    ? 'bg-gray-800/50 dark:bg-gray-900/50 border border-gray-700' // ✅ MODIFIED: Using gray-900/50 for darker look
    : 'bg-gray-100/60 border border-gray-300';
    
  return (
    <section
      id="vision"
      className={`min-h-screen py-12 flex flex-col items-center justify-center px-4 sm:px-8 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Background shapes (Color is already Orange theme, which is fine) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-orange-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl w-full flex flex-col gap-8 justify-center relative z-10">
        {/* Eye Icon + Title */}
        <div className="flex items-center gap-4">
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <HiEye className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl font-bold ${mainText}`}>
            Our Vision
          </h2>
        </div>

        {/* Card */}
        <motion.div
          className={`flex flex-col md:flex-row items-center md:items-stretch w-full rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${cardClasses}`} // ✅ MODIFIED: Using dynamic cardClasses
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Circular Image */}
          <div className="flex items-center justify-center w-full md:w-1/3 p-6">
            <div className="relative w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-400/50">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 blur-2xl opacity-40 rounded-full"></div>
              <img
                src={personImg}
                alt="Dr. Ankit P. Sharma"
                className="w-full h-full object-cover rounded-full relative"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 p-6 sm:p-8 space-y-4 flex flex-col justify-center text-center md:text-left">
            <p
              className={`text-base sm:text-lg md:text-xl ${firstParagraphText} leading-relaxed`} // ✅ MODIFIED: Using dynamic text color
            >
              Dr. Ankit P. Sharma envisions Sharma Business achieving{' '}
              <span className="font-bold text-orange-600">global recognition</span> by delivering
              exceptional services and groundbreaking solutions across multiple industries.
            </p>
            <p
              className={`text-base sm:text-lg md:text-xl ${secondParagraphText} leading-relaxed`} // ✅ MODIFIED: Using dynamic text color
            >
              Through <span className="font-semibold text-orange-500">innovation</span>,{' '}
              <span className="font-semibold text-orange-500">integrity</span>, and customer
              dedication, we aim to redefine industry standards and empower communities worldwide.
            </p>
            <p
              className={`text-base sm:text-lg md:text-xl ${secondParagraphText} leading-relaxed`} // ✅ MODIFIED: Using dynamic text color
            >
              Our commitment is not only toward business excellence but also to{' '}
              <span className="font-semibold text-orange-500">environmental sustainability</span>,
              digital transformation, and human values.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;