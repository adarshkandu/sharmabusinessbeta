import React from 'react';
import { motion } from 'framer-motion';
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
    { id: 'contact', label: 'Contact' },
  ];

  const brands = [
    { name: 'FME' },
    { name: 'VaHaN' },
    { name: 'GC' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_sharmabusiness' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/sharma-business/' },
  ];

  const currentYear = new Date().getFullYear();

  const footerBg = isDark ? 'transition-colors duration-500 bg-[#0c1b30]' : 'transition-colors duration-500 bg-gray-100';
  const footerBorder = isDark ? 'transition-colors duration-500 border-[#1e2f4a]' : 'transition-colors duration-500 border-gray-300';
  const mainText = isDark ? 'transition-colors duration-500 text-white' : 'transition-colors duration-500 text-gray-900';
  const subtitleText = isDark ? 'transition-colors duration-500 text-gray-300' : 'transition-colors duration-500 text-gray-600';
  const iconBg = isDark ? 'transition-colors duration-500 bg-[#1e2f4a]' : 'transition-colors duration-500 border bg-white border-gray-300';
  const iconText = isDark ? 'transition-colors duration-500 text-gray-300' : 'transition-colors duration-500 text-gray-700';

  const handleBrandClick = () => {
    const element = document.getElementById('brands');
    const offset = 80;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <footer className={`scroll-mt-20 py-12 border-t ${footerBg} ${footerBorder}`}> 
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-2 md:col-span-3">
            <div className="flex mb-4 items-center space-x-3">
              <img className="h-12" src={logo} alt="logo" /> 
              <div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400">
                  Sharma Business
                </span>
                <p className={`text-sm ${subtitleText}`}>Excellence in Innovation</p>
              </div>
            </div>
            <p className={`mb-4 max-w-md text-base leading-relaxed ${subtitleText}`}>
              A dynamic, multi-tasking company housing multiple successful brands under one umbrella.
              Founded by Dr. Ankit P. Sharma with a vision for global excellence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-500 p-2 rounded-xl ${iconBg} ${iconText} hover:bg-orange-600 hover:text-white`} 
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 md:col-span-3 lg:col-span-2">
            <div>
              <h4 className={`mb-4 text-base font-bold ${mainText}`}>Our Brands</h4>
              <ul className="space-y-2">
                {brands.map((brand, index) => (
                  <li key={index}>
                    <button
                      onClick={handleBrandClick}
                      className={`transition-colors duration-500 cursor-pointer text-base flex items-center space-x-2 ${subtitleText} hover:text-orange-600`}
                    >
                      <span>{brand.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`mb-4 text-base font-bold ${mainText}`}>Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`transition-colors duration-500 cursor-pointer text-base ${subtitleText} hover:text-orange-600`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`mt-8 pt-6 border-t ${footerBorder}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className={`text-base ${isDark ? 'transition-colors duration-500 text-gray-400' : 'transition-colors duration-500 text-gray-500'}`}>
              &copy; {currentYear} Sharma Business. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
