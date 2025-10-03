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

  const sectionBg = isDark ? 'bg-gray-800/50' : 'bg-white';
  const lightCardBg = isDark ? 'border border-gray-600 bg-gray-700/50' : 'border border-gray-300 bg-gray-100';
  const lightText = isDark ? 'text-gray-300' : 'text-gray-700';
  const darkText = isDark ? 'text-white' : 'text-gray-900';
  const tagClasses = isDark ? 'border border-gray-600 text-orange-400 bg-gray-700/50' : 'border border-gray-300 text-orange-600 bg-gray-100';

  return (
    <section id="about" className={`py-16 scroll-mt-20 ${sectionBg}`}>
      <div className="px-4 max-w-7xl sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={`font-medium inline-flex rounded-full text-sm px-4 py-2 mb-6 items-center ${tagClasses}`}>
            <HiOfficeBuilding className="h-4 w-4 mr-2" />
            About Sharma Business
          </div>
          <h2 className={`mb-6 font-bold text-4xl md:text-5xl ${darkText}`}>
            Excellence Through Innovation
          </h2>
        </motion.div>

        <div className="grid gap-12 items-center lg:grid-cols-2">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className={`mb-4 text-2xl font-bold ${darkText}`}>
                Our Foundation
              </h3>
              <p className={`mb-4 leading-relaxed text-lg ${lightText}`}>
                Sharma Business is a dynamic, multi-tasking company housing multiple successful brands under one umbrella. 
                The company has grown to serve over 800 clients across various industries with a strong commitment to excellence and innovation.
              </p>
              <p className={`leading-relaxed text-lg ${lightText}`}>
                Our diverse portfolio spans entertainment, travel, and financial consulting, allowing us to offer 
                comprehensive solutions that drive success across multiple sectors while maintaining the highest 
                standards of quality and customer satisfaction.
              </p>
            </div>

            <motion.div 
              className="gap-3 flex flex-wrap"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {['Innovation', 'Excellence', 'Reliability', 'Growth'].map((value, index) => (
                <motion.div
                  key={index}
                  className={`duration-300 shadow-lg hover:shadow-xl px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'border border-gray-600 bg-gray-700 text-gray-300' : 'border border-gray-300 bg-gray-100 text-orange-600'}`}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`shadow-2xl rounded-3xl transition-all duration-300 p-8 ${lightCardBg}`}>
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-r rounded-full from-orange-500 via-orange-600 to-orange-400">
                  <HiOfficeBuilding className="w-10 h-10 text-white" />
                </div>
                <h4 className={`mb-3 font-bold text-xl ${darkText}`}>
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
