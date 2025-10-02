import React from 'react';
import { motion } from 'framer-motion';
import { HiOfficeBuilding } from 'react-icons/hi';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Dynamic classes for Light/Dark Mode consistency
  const sectionBg = isDark ? 'bg-gray-800/50' : 'bg-white'; // ✅ Changed to bg-white for cleaner look

  const lightCardBg = isDark 
    ? 'bg-gray-700/50 border border-gray-600' 
    : 'bg-gray-100 border border-gray-300'; // ✅ Light Card: Accessible light grey background

  const lightText = isDark ? 'text-gray-300' : 'text-gray-700'; // ✅ Light Text: Accessible dark grey
  const darkText = isDark ? 'text-white' : 'text-gray-900';     // Dark Text (Heading)

  const tagClasses = isDark 
    ? 'bg-gray-700/50 text-orange-400 border border-gray-600' 
    : 'bg-gray-100 text-orange-600 border border-gray-300'; // ✅ Tag: Light Grey background, orange accent

  return (
    <section id="about" className={`min-h-screen scroll-mt-20 py-16 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tag/Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${tagClasses}`}>
            <HiOfficeBuilding className="w-4 h-4 mr-2" />
            About Sharma Business
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkText}`}>
            Excellence Through Innovation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${darkText}`}>
                Our Foundation
              </h3>
              <p className={`text-lg mb-4 ${lightText} leading-relaxed`}>
                Sharma Business is a dynamic, multi-tasking company housing multiple successful brands under one umbrella. 
                The company has grown to serve over 800 clients across various industries with a strong commitment to excellence and innovation.
              </p>
              <p className={`text-lg ${lightText} leading-relaxed`}>
                Our diverse portfolio spans entertainment, travel, and financial consulting, allowing us to offer 
                comprehensive solutions that drive success across multiple sectors while maintaining the highest 
                standards of quality and customer satisfaction.
              </p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {['Innovation', 'Excellence', 'Reliability', 'Growth'].map((value, index) => (
                <motion.div
                  key={index}
                  // ✅ MODIFICATION: Tag color scheme for Light/Dark Mode
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDark ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-gray-100 text-orange-600 border border-gray-300'
                  } shadow-lg hover:shadow-xl transition-all duration-300`}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`p-8 rounded-3xl ${lightCardBg} shadow-2xl transition-all duration-300`}>
              <div className="text-center">
                <div
                  // Icon container maintains the orange gradient
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 rounded-full flex items-center justify-center"
                >
                  <HiOfficeBuilding className="w-10 h-10 text-white" />
                </div>
                <h4 className={`text-xl font-bold mb-3 ${darkText}`}>
                  800+ Happy Clients
                </h4>
                <p className={`${lightText}`}>
                  Trusted by businesses across multiple industries for exceptional service and innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;