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
  const sectionBg = isDark ? 'bg-gray-800/50' : 'bg-gray-50';
  const darkText = isDark ? 'text-white' : 'text-gray-900';
  const lightCardBg = isDark 
    ? 'bg-gray-800/50 border border-gray-700' 
    : 'bg-white border border-gray-200'; 
  const mainParagraphText = isDark ? 'text-gray-300' : 'text-gray-700'; 
  const subCardBg = isDark 
    ? 'bg-gray-700/50 border border-gray-600' 
    : 'bg-white border border-gray-300'; 
  const subCardText = isDark ? 'text-gray-300' : 'text-gray-600'; 

  return (
    <section 
        id="mission" 
        className={`py-10 ${sectionBg} scroll-mt-20`}
    >
      {/* 🎯 MODIFIED: max-w-6xl को max-w-7xl में बदल दिया गया है। */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          
            {/* Header Section (Icon and Heading) */}
          <div className="flex items-center mb-2">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75" />
              <div className="relative p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-12 h-12 flex items-center justify-center">
                <HiFlag className="w-6 h-6 text-white" />
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
          
          {/* Main Content Card - Now occupies full 1280px width (minus padding) */}
          <motion.div 
            className={`w-full p-6 rounded-3xl ${lightCardBg} backdrop-blur-sm shadow-2xl mt-2`} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.005 }} 
          >
            {/* Main Mission Paragraph */}
            <p className={`text-lg md:text-xl ${mainParagraphText} leading-relaxed mb-6`}> 
              Sharma Business is committed to delivering superior service and tailored solutions by focusing on our core values: <span className="font-bold text-orange-600">innovation, reliability, and integrity</span>. 
              Our goal is to deeply understand our clients' needs, foster lasting partnerships, and empower 
              their growth within their respective industries and communities.
            </p>

            {/* Value Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6" 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: 'Innovation', desc: 'Developing cutting-edge solutions for modern business challenges.' },
                { title: 'Reliability', desc: 'Ensuring consistent excellence and dependability in every interaction.' },
                { title: 'Integrity', desc: 'Maintaining transparent, ethical, and trustworthy business practices.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-2xl ${subCardBg} shadow-lg hover:shadow-xl`} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className={`text-lg font-bold mb-2 ${darkText}`}>{item.title}</h4>
                  <p className={`text-sm ${subCardText}`}>{item.desc}</p>
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