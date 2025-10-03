import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const mainText = isDark ? 'text-white' : 'text-gray-900';
  const subText = isDark ? 'text-gray-300' : 'text-gray-700';
  const cardBg = isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200';
  const iconBg = isDark ? 'bg-gray-700/50' : 'bg-gray-200';
  const socialIconBg = isDark ? 'bg-gray-700 hover:bg-orange-500' : 'bg-white border border-gray-300 hover:bg-orange-500';

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Our Office',
      details: 'House No. 14, Chandrakant Bhavan, Chimat Pada, Marol Naka, Andheri East, Mumbai 400059. Near Marol Naka Metro Station.',
      link: 'https://www.google.com/maps?q=19.1055111,72.8785601&z=17&hl=en',
      type: 'address'
    },
    {
      icon: HiMail,
      title: 'Email Us',
      details: 'Info@sharmabusiness.in',
      link: 'mailto:Info@sharmabusiness.in',
      type: 'email'
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      details: [
        { number: '99308 86758', link: 'tel:+919930886758' },
        { number: '99308 86785', link: 'tel:+919930886785' }
      ],
      type: 'phone'
    },
  ];
  
  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/', 
      name: 'Facebook'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/_sharmabusiness', 
      name: 'Instagram'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/company/sharma-business/', 
      name: 'LinkedIn'
    },
  ];

  // Helper function to render individual contact cards
  const renderContactCard = (item: any, index: number) => {
    let content;

    if (item.type === 'phone') {
      content = (
        <div className="space-y-1">
          {item.details.map((phoneDetail: { number: string, link: string }, phoneIndex: number) => (
            <a
              key={phoneIndex}
              href={phoneDetail.link}
              // Text size restored to original 'text-base'
              className={`block text-base font-medium ${subText} hover:text-orange-500 transition-colors duration-200 break-words`} 
            >
              {phoneDetail.number}
            </a>
          ))}
        </div>
      );
    } else {
      content = (
        <a 
          href={item.link} 
          target={item.link.startsWith('http') || item.link.startsWith('mailto') ? "_blank" : "_self"}
          rel="noopener noreferrer"
          // Text size restored to original 'text-base'
          className={`block text-base font-medium ${subText} hover:text-orange-500 transition-colors duration-200 break-words`}
        >
          {item.details}
        </a>
      );
    }

    return (
      <div
        key={index}
        // Padding restored to p-6 (or use p-5 for slight reduction)
        className={`p-6 rounded-2xl ${cardBg} shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col items-start lg:items-center text-left lg:text-center`}
      >
        {/* Icon and Title/Content Wrapper - Mobile View (Applies up to lg size, i.e., including all your target pixels) */}
        <div className="flex items-start lg:hidden w-full">
          <div 
            className={`w-16 h-16 mr-4 mb-0 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
          >
            <item.icon className="w-8 h-8 text-orange-600" />
          </div>
          
          <div className="flex-grow min-w-0"> 
            <h3 className={`text-xl font-bold mb-2 ${mainText}`}>{item.title}</h3>
            <div className={`block ${item.type !== 'phone' ? 'mb-2' : ''}`}> 
              {content}
            </div>
          </div>
        </div>
        
        {/* Desktop View - Centered Content (This will ONLY apply above 1024px) */}
        <div className="hidden lg:flex lg:flex-col lg:items-center w-full h-full"> 
            <div 
                className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
            >
              <item.icon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${mainText}`}>{item.title}</h3>
            <div className='flex-grow flex flex-col justify-center'>
                {content}
            </div>
        </div>
      </div>
    );
  };
  
  return (
    <section 
      id="contact" 
      className={`py-10 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} scroll-mt-20`}
    >
      {/* 🎯 MODIFIED: max-w-6xl को max-w-7xl में बदला गया है। */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${mainText}`}>
            Get in Touch
          </h2>
          <p className={`text-xl ${subText} max-w-2xl mx-auto`}>
            We'd love to hear from you. Find us using the details below.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          // ✅ FIX: Changed md:grid-cols-3 to lg:grid-cols-3. 
          // This ensures that all target resolutions (768-912px) use the default grid-cols-1 (single column)
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((item, index) => renderContactCard(item, index))}
        </motion.div>
        
        {/* Social Links Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl sm:text-2xl font-semibold sm:font-bold mb-6 ${mainText}`}>
            Connect with us on Social Media
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${socialIconBg}`}
              >
                <social.icon className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-white transition-colors`} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;