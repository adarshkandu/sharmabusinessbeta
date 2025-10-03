import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const mainText = isDark ? 'transition-colors duration-500 text-white' : 'transition-colors duration-500 text-gray-900';
  const subText = isDark ? 'transition-colors duration-500 text-gray-300' : 'transition-colors duration-500 text-gray-700';
  const cardBg = isDark ? 'transition-colors duration-500 border border-gray-700 bg-gray-800/50' : 'transition-colors duration-500 border border-gray-200 bg-white';
  const iconBg = isDark ? 'transition-colors duration-500 bg-gray-700/50' : 'transition-colors duration-500 bg-gray-200';
  const socialIconBg = isDark ? 'transition-colors duration-500 hover:bg-orange-500 bg-gray-700' : 'transition-colors duration-500 hover:bg-orange-500 border bg-white border-gray-300';

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
    { icon: FaFacebook, href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_sharmabusiness' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/sharma-business/' },
  ];

  const renderContactCard = (item: any, index: number) => {
    let content;
    if (item.type === 'phone') {
      content = (
        <div className="space-y-1">
          {item.details.map((phoneDetail: { number: string, link: string }, phoneIndex: number) => (
            <a
              key={phoneIndex}
              href={phoneDetail.link}
              className={`break-words transition-colors duration-200 hover:text-orange-500 block font-medium text-base ${subText}`} 
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
          className={`break-words transition-colors duration-200 hover:text-orange-500 block font-medium text-base ${subText}`}
        >
          {item.details}
        </a>
      );
    }

    return (
      <div
        key={index}
        className={`transition-all duration-300 hover:shadow-xl flex flex-col items-start lg:items-center text-left lg:text-center shadow-lg rounded-2xl p-6 ${cardBg}`}
      >
        <div className="flex items-start lg:hidden w-full">
          <div className={`flex-shrink-0 w-16 h-16 mr-4 mb-0 rounded-xl flex items-center justify-center ${iconBg}`}>
            <item.icon className="h-8 w-8 text-orange-600" />
          </div>
          <div className="flex-grow min-w-0"> 
            <h3 className={`mb-2 text-xl font-bold ${mainText}`}>{item.title}</h3>
            <div className={`block ${item.type !== 'phone' ? 'mb-2' : ''}`}> 
              {content}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-center w-full h-full"> 
          <div className={`flex-shrink-0 w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${iconBg}`}>
            <item.icon className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className={`mb-2 text-xl font-bold ${mainText}`}>{item.title}</h3>
          <div className='flex-grow flex flex-col justify-center'>
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`scroll-mt-20 py-10 ${isDark ? 'transition-colors duration-500 bg-gray-900' : 'transition-colors duration-500 bg-gray-50'}`} id="contact">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`mb-4 text-4xl font-bold ${mainText}`}>Get in Touch</h2>
          <p className={`mx-auto max-w-2xl text-xl ${subText}`}>
            We'd love to hear from you. Find us using the details below.
          </p>
        </motion.div>
        <motion.div
          className="mb-12 gap-8 grid grid-cols-1 lg:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((item, index) => renderContactCard(item, index))}
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={`mb-6 text-xl sm:text-2xl font-bold sm:font-semibold ${mainText}`}>
            Connect with us on Social Media
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-110 p-4 rounded-full shadow-lg ${socialIconBg}`}
              >
                <social.icon className={`h-6 w-6 transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-white`} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
