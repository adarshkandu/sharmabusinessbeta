import React from 'react';
import { motion } from 'framer-motion';
// ✅ REMOVED: HiPlay, HiTruck, HiTrendingUp icons are no longer needed for brands
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import logo from "../assets/logo.png";

interface FooterProps {
  scrollToSection: (section: string) => void;
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

  // ✅ UPDATED: Removed icon property from brands
  const brands = [
    { name: 'FME' },
    { name: 'VaHaN' },
    { name: 'GC' },
  ];

  // ✅ UPDATED: Social Links with new Instagram URL and removed Twitter
  const socialLinks = [
    { 
        icon: FaFacebook, 
        href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/', 
        name: 'Facebook'
    },
    { 
        icon: FaInstagram, 
        href: 'https://www.instagram.com/_sharmabusiness', // New Instagram URL
        name: 'Instagram'
    },
    { 
        icon: FaLinkedin, 
        href: 'https://www.linkedin.com/company/sharma-business/', 
        name: 'LinkedIn'
    },
  ];

  const currentYear = new Date().getFullYear();

  // Dynamic Classes for Light/Dark Mode
  const footerBg = isDark ? 'bg-[#0c1b30]' : 'bg-gray-100';
  const footerBorder = isDark ? 'border-[#1e2f4a]' : 'border-gray-300';
  const mainText = isDark ? 'text-white' : 'text-gray-900';
  const subtitleText = isDark ? 'text-gray-300' : 'text-gray-600';
  const iconBg = isDark ? 'bg-[#1e2f4a]' : 'bg-white border border-gray-300';
  const iconText = isDark ? 'text-gray-300' : 'text-gray-700';

  return (
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
              <img className="h-12" src={logo} alt="logo" /> 
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Sharma Business
                </span>
                <p className={`text-sm ${subtitleText}`}>Excellence in Innovation</p>
              </div>
            </div>
            <p className={`mb-4 leading-relaxed max-w-md text-base ${subtitleText}`}>
              A dynamic, multi-tasking company housing multiple successful brands under one umbrella.
              Founded by Dr. Ankit P. Sharma with a vision for global excellence.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl ${iconBg} ${iconText} hover:bg-orange-600 hover:text-white transition-colors duration-300`} 
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nested grid: Brands & Links */}
          {/* 🎯 MODIFIED: MD स्क्रीन पर side-by-side (grid-cols-2) ताकि चौड़ाई बराबर रहे। छोटी स्क्रीन पर स्टैक्ड (grid-cols-1) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:col-span-3 lg:col-span-2">
            {/* Our Brands */}
            <div>
              <h4 className={`text-base font-bold mb-4 ${mainText}`}>Our Brands</h4>
              <ul className="space-y-2">
                {brands.map((brand, index) => (
                  <li key={index}>
                    <a
                      href="#brands"
                      className={`text-base flex items-center space-x-2 ${subtitleText} hover:text-orange-600 transition-colors duration-200`}
                    >
                      {/* ✅ REMOVED: Brand icon is removed */}
                      <span>{brand.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-base font-bold mb-4 ${mainText}`}>Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-base ${subtitleText} hover:text-orange-600 transition-colors duration-200`}
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
          className={`border-t mt-8 pt-6 ${footerBorder}`} 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-base`}>
              &copy; {currentYear} Sharma Business. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
