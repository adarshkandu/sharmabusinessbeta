import React from 'react';
import { motion } from 'framer-motion';
import { HiFlag } from 'react-icons/hi';

interface MissionProps {
  isDark: boolean;
}

const Mission: React.FC<MissionProps> = ({ isDark }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Dynamic Class Helpers
  const sectionBg = isDark ? 'bg-gray-800/50' : 'bg-gray-50'; // ✅ MODIFIED: Using clean gray background
  const darkText = isDark ? 'text-white' : 'text-gray-900';
  const lightCardBg = isDark 
    ? 'bg-gray-800/50 border border-gray-700' 
    : 'bg-white border border-gray-200'; // ✅ MODIFIED: Using subtle gray border
  const mainParagraphText = isDark ? 'text-gray-300' : 'text-gray-700'; // ✅ MODIFIED: Using accessible dark gray
  const subCardBg = isDark 
    ? 'bg-gray-700/50 border border-gray-600' 
    : 'bg-white border border-gray-300'; // ✅ MODIFIED: Using subtle gray border
  const subCardText = isDark ? 'text-gray-300' : 'text-gray-600'; // ✅ MODIFIED: Using accessible dark gray

  return (
    <section id="mission" className={`min-h-screen py-12 ${sectionBg} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div className="flex items-center mb-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75" />
              <div className="relative p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                <HiFlag className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ml-4 ${darkText}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
          </div>
          
          {/* Main Content Card */}
          <motion.div 
            className={`max-w-4xl mx-auto p-6 rounded-3xl ${lightCardBg} backdrop-blur-sm shadow-2xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Main Mission Paragraph */}
            <p className={`text-lg md:text-xl ${mainParagraphText} leading-relaxed mb-6`}> {/* ✅ MODIFIED: Using mainParagraphText */}
              Sharma Business is dedicated to providing superior service through <span className="font-bold text-orange-600">innovation, 
              reliability, and integrity</span>. We aim to understand and anticipate client needs, offering tailored solutions 
              with a client-first approach, and fostering lasting relationships with customers, partners, and communities.
            </p>

            {/* Value Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges' },
                { title: 'Reliability', desc: 'Consistent excellence in every interaction' },
                { title: 'Integrity', desc: 'Transparent and ethical business practices' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-2xl ${subCardBg} shadow-lg hover:shadow-xl`} // ✅ MODIFIED: Using subCardBg
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className={`text-base font-bold mb-2 ${darkText}`}>{item.title}</h4>
                  <p className={`text-sm ${subCardText}`}>{item.desc}</p> {/* ✅ MODIFIED: Using subCardText */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;