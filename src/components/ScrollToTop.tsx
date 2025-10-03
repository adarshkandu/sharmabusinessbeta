import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi';

interface ScrollToTopProps {
  showScrollTop: boolean;
  isDark: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, isDark, scrollToTop }) => {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className={`z-40 shadow-2xl bottom-6 cursor-pointer transition-all duration-300 p-4 fixed rounded-full text-white right-6
            ${
              // Modified for dark/light theme colors
              isDark
                ? 'hover:bg-orange-700 bg-orange-600 shadow-orange-500/30'
                : 'hover:bg-orange-600 shadow-orange-400/30 bg-orange-500'
            }`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
