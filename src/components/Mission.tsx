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
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Dynamic class helpers
  const sectionBg = isDark ? 'bg-gray-800/50 transition-colors duration-500' : 'bg-gray-50 transition-colors duration-500';
  const darkText = isDark ? 'text-white transition-colors duration-500' : 'text-gray-900 transition-colors duration-500';
  const lightCardBg = isDark ? 'bg-gray-800/50 border border-gray-700 transition-colors duration-500' : 'bg-white border border-gray-200 transition-colors duration-500';
  const mainParagraphText = isDark ? 'text-gray-300 transition-colors duration-500' : 'text-gray-700 transition-colors duration-500';
  const subCardBg = isDark ? 'bg-gray-700/50 border border-gray-600 transition-colors duration-500' : 'bg-white border border-gray-300 transition-colors duration-500';
  const subCardText = isDark ? 'text-gray-300 transition-colors duration-500' : 'text-gray-600 transition-colors duration-500';

  const coreValues = [
    { title: 'Innovation', desc: 'Developing cutting-edge solutions for modern business challenges.' },
    { title: 'Reliability', desc: 'Ensuring consistent excellence and dependability in every interaction.' },
    { title: 'Integrity', desc: 'Maintaining transparent, ethical, and trustworthy business practices.' }
  ];

  return (
    <section id="mission" className={`scroll-mt-20 py-10 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
          {/* Title */}
          <div className="flex items-center mb-2">
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75 transition-all duration-500" />
              <div className="relative w-12 h-12 p-3 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
                <HiFlag className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <motion.h2 className={`ml-4 text-3xl md:text-4xl font-bold ${darkText}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              Our Mission
            </motion.h2>
          </div>

          {/* Main Paragraph */}
          <motion.div className={`w-full mt-2 p-6 rounded-3xl ${lightCardBg} backdrop-blur-sm shadow-2xl`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} whileHover={{ scale: 1.005 }}>
            <p className={`mb-6 text-lg md:text-xl leading-relaxed ${mainParagraphText}`}>
              Sharma Business is committed to delivering superior service and tailored solutions by focusing on our core values: <span className="font-bold text-orange-600 transition-colors duration-500">innovation, reliability, and integrity</span>. Our goal is to deeply understand our clients' needs, foster lasting partnerships, and empower their growth within their respective industries and communities.
            </p>

            {/* Core Values Cards */}
            <motion.div className="grid gap-6 md:grid-cols-3" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {coreValues.map((item, index) => (
                <motion.div key={index} className={`p-5 rounded-2xl ${subCardBg} shadow-lg hover:shadow-xl transition-all duration-500`} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
                  <h4 className={`mb-2 text-lg font-bold ${darkText}`}>{item.title}</h4>
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
