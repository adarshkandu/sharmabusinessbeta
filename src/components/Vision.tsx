import React from 'react';
import { motion } from 'framer-motion';
import { HiEye } from 'react-icons/hi';
import personImg from '../assets/person.jpg';

interface VisionProps {
  isDark: boolean;
}

const Vision: React.FC<VisionProps> = ({ isDark }) => {
  const mainText = isDark ? 'transition-colors duration-500 text-white' : 'text-gray-900 transition-colors duration-500';
  const firstParagraphText = isDark ? 'transition-colors duration-500 text-gray-300' : 'text-gray-700 transition-colors duration-500'; 
  const secondParagraphText = isDark ? 'transition-colors duration-500 text-gray-400' : 'text-gray-700 transition-colors duration-500'; 
  const cardClasses = isDark 
    ? 'transition-colors duration-500 border border-gray-700 bg-gray-800/50 dark:bg-gray-900/50'
    : 'border border-gray-300 transition-colors duration-500 bg-gray-100/60';
    
  return (
    <section
      id="vision"
      className={`overflow-hidden flex py-10 flex-col items-center justify-center relative ${isDark ? 'transition-colors duration-500 bg-gray-900' : 'transition-colors duration-500 bg-white'}`}
    >
      <motion.div
        className="absolute w-48 h-48 top-1/4 sm:w-72 sm:h-72 rounded-full blur-3xl bg-orange-400/20 left-1/4"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-48 h-48 sm:w-72 sm:h-72 bottom-1/4 right-1/4 blur-3xl rounded-full bg-orange-500/20"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 w-full mx-auto"> 
        <div className="flex mb-6 gap-4 items-center">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400"
            whileHover={{ scale: 1.1 }}
          >
            <HiEye className="h-6 w-6 text-white" />
          </motion.div>
          <motion.h2
            className={`sm:text-4xl text-3xl font-bold ${mainText}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>
        </div>
        
        <motion.div
          className={`flex md:items-stretch flex-col md:flex-row overflow-hidden transition-all duration-500 w-full shadow-2xl rounded-3xl ${cardClasses}`} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center w-full md:w-1/3 p-6">
            <div className="relative rounded-full w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 overflow-hidden shadow-2xl ring-4 ring-orange-400/50">
              <div className="absolute rounded-full inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 blur-2xl opacity-40 transition-all duration-500"></div>
              <img
                src={personImg}
                alt="Dr. Ankit P. Sharma"
                className="relative w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 space-y-4 flex-1 text-center md:text-left">
            <div>
              <p className={`md:text-xl text-lg leading-relaxed ${firstParagraphText}`}>
                Dr. Ankit P. Sharma envisions Sharma Business achieving{' '}
                <span className="font-bold text-orange-600 transition-colors duration-500">global recognition</span> by delivering
                exceptional services and groundbreaking solutions across multiple industries.
              </p>
              <p className={`md:text-xl text-lg leading-relaxed ${secondParagraphText}`}>
                Through <span className="font-semibold text-orange-500 transition-colors duration-500">innovation</span>,{' '}
                <span className="font-semibold text-orange-500 transition-colors duration-500">integrity</span>, and customer
                dedication, we aim to redefine industry standards and empower communities worldwide.
              </p>
              <p className={`md:text-xl text-lg leading-relaxed ${secondParagraphText}`}>
                Our commitment is not only toward business excellence but also to{' '}
                <span className="font-semibold text-orange-500 transition-colors duration-500">environmental sustainability</span>,
                digital transformation, and human values.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
