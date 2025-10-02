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
  setIsMenuOpen,
  setActiveSection,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' },
  ];

  const offset = 80; // Match your navbar height

  // Scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(id);
  };

  // Mobile scroll + close menu
  const scrollToSectionMobile = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }, 50);
  };

  // Dynamic class definitions for better readability and consistency
  const desktopLinkClasses = (linkId: string) => {
    const isActive = activeSection === linkId;
    if (isActive) {
      // ✅ MODIFIED: Light Mode Active Link (Use Orange brand color for text, add border)
      return isDark
        ? 'text-white bg-orange-600 shadow-md' 
        : 'text-orange-700 bg-gray-200 shadow-md border border-orange-400'; 
    } else {
      // ✅ MODIFIED: Light Mode Inactive Link (Use darker gray for better contrast)
      return isDark
        ? 'text-gray-300 hover:text-white hover:bg-gray-700/20'
        : 'text-gray-700 hover:text-black hover:bg-gray-200/50';
    }
  };

  const mobileLinkClasses = (linkId: string) => {
    const isActive = activeSection === linkId;
    if (isActive) {
      // ✅ MODIFIED: Mobile Active Link (Same as desktop active link)
      return isDark
        ? 'text-white bg-orange-600 shadow-md'
        : 'text-orange-700 bg-gray-200 shadow-md border border-orange-400';
    } else {
      // ✅ MODIFIED: Mobile Inactive Link (Same as desktop inactive link)
      return isDark
        ? 'text-gray-300 hover:text-white hover:bg-gray-700/20'
        : 'text-gray-700 hover:text-black hover:bg-gray-200/50';
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="https://adarshkandu.vercel.app"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
              Sharma Business
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                // ✅ MODIFIED: Used dynamic class helper
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out group ${desktopLinkClasses(link.id)}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme + Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`transition duration-300 ${isDark ? 'text-white' : 'text-orange-600'}`}
            >
              {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition duration-300 ${isDark ? 'text-white' : 'text-orange-600'}`}
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
              } shadow-xl`}
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSectionMobile(link.id)}
                    // ✅ MODIFIED: Used dynamic class helper
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${mobileLinkClasses(link.id)}`}
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