import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiTruck, HiTrendingUp } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from "../assets/logo.png";

interface FooterProps {
  scrollToSection: (section: string) => void;
  // ✅ ADDED: isDark prop
  isDark: boolean; 
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, isDark }) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', 'label': 'Contact' },
  ];

  const brands = [
    { name: 'FME', icon: HiPlay },
    { name: 'VaHaN', icon: HiTruck },
    { name: 'GC', icon: HiTrendingUp },
  ];

  const socialLinks = [
    { 
        icon: FaFacebook, 
        href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/', // ✅ UPDATED
        name: 'Facebook'
    },
    { 
        icon: FaTwitter, 
        href: 'https://www.twitter.com/', // Kept dummy
        name: 'Twitter'
    },
    { 
        icon: FaLinkedin, 
        href: 'https://www.linkedin.com/company/sharma-business/', // ✅ UPDATED
        name: 'LinkedIn'
    },
    { 
        icon: FaInstagram, 
        href: 'https://www.instagram.com/first_movers', // ✅ UPDATED
        name: 'Instagram'
    },
  ];

  const currentYear = new Date().getFullYear();

  // Dynamic Classes for Light/Dark Mode
  const footerBg = isDark ? 'bg-[#0c1b30]' : 'bg-gray-100'; // ✅ Light Mode BG: Light Gray
  const footerBorder = isDark ? 'border-[#1e2f4a]' : 'border-gray-300'; // ✅ Light Mode Border: Light Gray
  const mainText = isDark ? 'text-white' : 'text-gray-900'; // Main headings text
  const subtitleText = isDark ? 'text-gray-300' : 'text-gray-600'; // Accessible paragraph/list text
  const iconBg = isDark ? 'bg-[#1e2f4a]' : 'bg-white border border-gray-300'; // Social icon background
  const iconText = isDark ? 'text-gray-300' : 'text-gray-700'; // Social icon text

  return (
    // ✅ MODIFIED: Dynamic background and border
    <footer className={`${footerBg} py-12 border-t ${footerBorder} scroll-mt-20`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Sharma Business Info */}
          <div className="lg:col-span-2 md:col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              {/* NOTE: Logo needs to be visible in both light/dark mode. Assuming 'logo' is optimized. */}
              <img className="h-12" src={logo} alt="logo" /> 
              <div>
                {/* Heading uses the orange gradient in both modes */}
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Sharma Business
                </span>
                {/* ✅ MODIFIED: Subtitle text color */}
                <p className={`text-sm ${subtitleText}`}>Excellence in Innovation</p>
              </div>
            </div>
            {/* ✅ MODIFIED: Paragraph text color */}
            <p className={`mb-4 leading-relaxed max-w-md text-sm ${subtitleText}`}>
              A dynamic, multi-tasking company housing multiple successful brands under one umbrella.
              Founded by Dr. Ankit P. Sharma with a vision for global excellence.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => ( // ✅ Using the new socialLinks array
                <a
                  key={index}
                  href={social.href} // ✅ Using updated link
                  target="_blank" // ✅ Set target="_blank"
                  rel="noopener noreferrer"
                  // ✅ MODIFIED: Dynamic icon background and text color
                  className={`p-2 rounded-xl ${iconBg} ${iconText} hover:bg-orange-600 hover:text-white transition-colors duration-300`} 
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nested grid: Brands & Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-2">
            {/* Our Brands */}
            <div>
              {/* ✅ MODIFIED: Heading text color */}
              <h4 className={`text-base font-bold mb-4 ${mainText}`}>Our Brands</h4>
              <ul className="space-y-2">
                {brands.map((brand, index) => (
                  <li key={index}>
                    <a
                      href="#brands"
                      // ✅ MODIFIED: Link text color
                      className={`text-sm flex items-center space-x-2 ${subtitleText} hover:text-orange-600 transition-colors duration-200`}
                    >
                      <brand.icon className="w-4 h-4" />
                      <span>{brand.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              {/* ✅ MODIFIED: Heading text color */}
              <h4 className={`text-base font-bold mb-4 ${mainText}`}>Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      // ✅ MODIFIED: Link text color
                      className={`text-sm ${subtitleText} hover:text-orange-600 transition-colors duration-200`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom copyright */}
        <motion.div
          // ✅ MODIFIED: Dynamic border color
          className={`border-t mt-8 pt-6 ${footerBorder}`} 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            {/* ✅ MODIFIED: Copyright text color for accessibility */}
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
              &copy; {currentYear} Sharma Business. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;