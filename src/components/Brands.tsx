import React from "react";
import { motion } from "framer-motion";
import { HiStar, HiArrowRight } from "react-icons/hi"; // HiArrowRight for the button

// ✅ Import images from assets
import fme from "../assets/brands/fme.png";
import vahan from "../assets/brands/vahan.png";
import gc from "../assets/brands/gc.png";

interface BrandsProps {
  isDark: boolean;
}

const Brands: React.FC<BrandsProps> = ({ isDark }) => {
  // NOTE: You should replace the '#' with actual brand URLs later.
  const brands = [
    {
      name: "First Movers Entertainment",
      acronym: "FME",
      slogan: "Your Expectation, Our Perfection",
      shortDescription:
        "FME is a premier entertainment company merging creativity and technology to deliver outstanding multimedia content.",
      description:
        'FME is a premier entertainment company merging creativity and technology to deliver outstanding multimedia content. With the slogan "Your Expectation, Our Perfection," FME ensures every project exceeds client expectations, offering captivating and inspiring entertainment experiences.',
      color: "from-orange-500 to-orange-600",
      image: fme, // 👈 imported image
      features: [
        "Multimedia Content",
        "Creative Solutions",
        "Technology Integration",
        "Client Excellence",
      ],
      link: 'https://firstmoversentertainment.in/', // Link for "Know More"
    },
    {
      name: "VaHaN by Pragati Tours and Travels",
      acronym: "VaHaN",
      slogan: "Comfort, Safety, Luxury",
      shortDescription: "VaHaN offers passenger logistics including cabs, buses, and comprehensive travel packages.",
      description:
        "VaHaN offers passenger logistics including cabs, buses, and travel packages. We focus on comfort, safety, and luxury, ensuring all vehicles are under seven years old. Whether short or long-distance, VaHaN guarantees a reliable and enjoyable journey.",
      color: "from-orange-400 to-orange-600",
      image: vahan, // 👈 imported image
      features: [
        "Premium Vehicles",
        "Safety First",
        "Travel Packages",
        "Luxury Experience",
      ],
      link: 'https://wa.me/919930886758', // Link for "Know More"
    },
    {
      name: "Growth Consultancy",
      acronym: "GC",
      slogan: "Empowering Financial Growth",
      shortDescription:
        "Growth Consultancy offers tailored investment and insurance solutions, empowering clients for long-term growth.",
      description:
        "Growth Consultancy offers tailored investment and insurance solutions including mutual funds, SIPs, and insurance in life, general, and health categories. We empower clients to make informed financial decisions for long-term growth and stability.",
      color: "from-orange-600 to-orange-700",
      image: gc, // 👈 imported image
      features: [
        "Investment Solutions",
        "Insurance Coverage",
        "Financial Planning",
        "Long-term Growth",
      ],
      link: 'https://wa.me/919930886758', // Link for "Know More"
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Dynamic class helpers for accessibility
  const darkText = isDark ? "text-white" : "text-gray-900";
  const lightText = isDark ? "text-gray-300" : "text-gray-700"; // Accessible on light background
  const cardBackground = isDark 
    ? "bg-gray-800/50 border border-gray-700"
    : "bg-white border border-gray-200"; // Clean white background with subtle grey border
  const acronymTag = isDark
    ? "bg-gray-700 text-gray-300"
    : "bg-gray-100 text-orange-600"; // Light grey background, accessible orange text
  const featureText = isDark ? "text-gray-300" : "text-gray-600"; // Accessible feature text

  return (
    <section 
      id="brands" 
      className={`py-10 scroll-mt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* 🚀 Confirmed: max-w-7xl और px-4 sm:px-6 lg:px-8 सही से लागू हैं। */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: ICON + HEADING + SUBTITLE */}
        <motion.div
          className="mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Icon + Heading with animation */}
          <div className="flex items-center mb-2">
            <motion.div
              className="relative w-fit mr-4"
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75" />
              <div className="relative p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                <HiStar className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              className={`text-3xl md:text-4xl font-bold ${darkText}`}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Our Brands
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            className={`text-lg ${lightText} leading-relaxed ml-16`} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Three distinct brands, one unified vision of excellence across
            entertainment, travel, and financial consulting.
          </motion.p>
        </motion.div>

        {/* BRAND CARDS */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={`group p-6 rounded-3xl ${cardBackground} shadow-xl hover:shadow-2xl relative overflow-hidden flex flex-col justify-between`} // Added flex-col for better layout control
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 flex-grow"> {/* flex-grow to push the button down */}
                <div className="flex items-start justify-between mb-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    // ✅ MODIFIED: Increased image height and width
                    className="h-24 w-24 object-contain" 
                  />

                  <div
                    className={`mt-2 px-3 py-1.5 rounded-full text-sm font-semibold ${acronymTag}`} 
                  >
                    {brand.acronym}
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 ${darkText} mt-4`} // Title size increased slightly
                >
                  {brand.name}
                </h3>
                <p
                  className={`text-base font-medium mb-4 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}
                >
                  {brand.slogan}
                </p>
                <p
                  className={`${lightText} leading-relaxed mb-6 text-sm`} 
                >
                  {brand.shortDescription}
                </p>
                <div className="space-y-2 mb-6"> {/* Increased margin bottom to separate features from button */}
                  {brand.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${brand.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: featureIndex * 0.2,
                        }}
                      />
                      <span
                        className={`text-sm ${featureText}`} 
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
                
              {/* ✅ NEW: Know More Button/Link */}
              <a
                href={brand.link} target="_blank" className={`relative z-10 mt-auto flex items-center justify-center py-2 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 transform group-hover:scale-[1.01] bg-gradient-to-r ${brand.color} hover:from-orange-600 hover:to-orange-700 shadow-md`}
              >
                <span>Know More</span>
                <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;