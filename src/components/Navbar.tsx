import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

interface NavbarProps {
  isDark: boolean;
  isMenuOpen: boolean;
  activeSection: string;
  navbarBg: boolean;
  toggleTheme: () => void;
  setIsMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  isMenuOpen,
  activeSection,
  navbarBg,
  toggleTheme,
  setIsMenuOpen = () => {},
  setActiveSection = () => {},
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' },
  ];

  const offset = 80;

  const scrollToSection = (id: string, isMobile = false) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    if (isMobile) setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }, isMobile ? 50 : 0);
  };

  const linkClasses = (linkId: string) => {
    const isActive = activeSection === linkId;
    if (isActive) {
      return isDark
        ? 'text-white bg-orange-600 shadow-md border border-transparent transition-colors duration-500'
        : 'text-orange-700 bg-gray-200 shadow-md border border-orange-400 transition-colors duration-500';
    } else {
      return isDark
        ? 'text-gray-300 hover:text-white hover:bg-gray-700/20 border border-transparent transition-colors duration-500'
        : 'text-gray-700 hover:text-black hover:bg-gray-200/50 border border-transparent transition-colors duration-500';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        navbarBg
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a
            href="https://sharmabusiness.in"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 cursor-pointer transition-colors duration-500"
          >
            <img src={logo} alt="Logo" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
            <span className="hidden md:inline text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent transition-all duration-500">
              Sharma Business
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-lg text-base font-medium transition-all duration-500 group cursor-pointer ${linkClasses(link.id)}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-500 cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-orange-600 hover:text-black'
              }`}
            >
              {isDark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition-colors duration-500 cursor-pointer ${isDark ? 'text-white' : 'text-orange-600'}`}
            >
              {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div
              className={`${
                isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'
              } shadow-xl transition-colors duration-500`}
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id, true)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-500 cursor-pointer ${linkClasses(link.id)}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
