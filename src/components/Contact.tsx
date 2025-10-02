import { motion } from 'framer-motion';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

const Contact = ({ isDark }: { isDark: boolean }) => {
  // Dynamic class helpers for accessibility
  const darkText = isDark ? 'text-white' : 'text-gray-900';
  const lightText = isDark ? 'text-gray-300' : 'text-gray-700'; // Accessible subtitle text
  const infoText = isDark ? 'text-gray-300' : 'text-gray-600'; // Accessible info text
  const cardBorder = isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'; // Clean White/Light Grey Border

  const contactDetails = [
    {
      icon: HiPhone,
      title: 'Phone',
      info: '99308 86758, 99308 86785',
      link: 'tel:9930886758',
      color: 'bg-orange-500', 
    },
    {
      icon: HiMail,
      title: 'Email',
      info: 'Info@sharmabusiness.in',
      link: 'mailto:Info@sharmabusiness.in',
      color: 'bg-orange-400', 
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      info: 'Business District, Mumbai, India',
      link: null,
      color: 'bg-yellow-600', 
    },
  ];

  // ✅ FACEBOOK LINK UPDATED
  const socialLinks = [
    {
      icon: FaFacebookF,
      name: 'Facebook',
      href: 'https://www.facebook.com/people/Sharma-Business/61558862323469/', // ⬅️ Updated link
      color: 'hover:bg-blue-600',
      textColor: 'text-blue-600',
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      href: 'https://www.twitter.com/',
      color: 'hover:bg-blue-400',
      textColor: 'text-blue-400',
    },
    {
      icon: FaLinkedinIn,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sharma-business/',
      color: 'hover:bg-blue-700',
      textColor: 'text-blue-700',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/first_movers',
      color: 'hover:bg-pink-500',
      textColor: 'text-pink-500',
    },
  ];

  return (
    <section id="contact" className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}> {/* Setting base background for clarity */}
      <motion.div
        className="mb-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            className="relative w-fit"
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -20 },
              visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } },
            }}
          >
            {/* Gradient colors to Orange/Yellow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full blur opacity-75" />
            <div className="relative p-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full">
              <HiPaperAirplane className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className={`text-3xl md:text-4xl font-bold ${darkText}`}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
          >
            Connect With Us
          </motion.h2>
        </div>

        <motion.p
          className={`mt-3 ml-16 text-base md:text-lg ${lightText}`} // ✅ MODIFIED: Using lightText (text-gray-700)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We’d love to hear from you!
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="grid gap-4">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden flex items-center space-x-5 p-6 rounded-2xl h-full transition-all group
              ${cardBorder} hover:shadow-xl`} // ✅ MODIFIED: Using cardBorder
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`p-4 rounded-xl shadow-md ${contact.color}`}>
                <contact.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className={`font-bold ${darkText}`}>
                  {contact.title}
                </p>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className={`text-sm ${infoText} group-hover:underline hover:text-black`} // ✅ MODIFIED: Using infoText (text-gray-600)
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className={`text-sm ${infoText}`}> {/* ✅ MODIFIED: Using infoText (text-gray-600) */}
                    {contact.info}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4">
          <motion.div
            className={`p-6 rounded-2xl transition-all ${cardBorder} hover:shadow-xl`} // ✅ MODIFIED: Using cardBorder
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${darkText}`}
            >
              Business Hours
            </h3>
            <ul
              className={`text-sm space-y-1 ${infoText}`} // ✅ MODIFIED: Using infoText (text-gray-600)
            >
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 p-4 rounded-2xl transition-all ${cardBorder} hover:shadow-xl ${social.color}`} // ✅ MODIFIED: Using cardBorder
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <social.icon
                  className={`w-6 h-6 ${social.textColor} group-hover:text-white transition-colors duration-300`}
                />
                <span
                  className={`font-semibold text-sm ${
                    isDark ? 'text-white' : 'text-gray-800'
                  } group-hover:text-white hover:text-black`}
                >
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;