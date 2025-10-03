import React from "react";
import { motion } from "framer-motion";
import { HiStar, HiArrowRight } from "react-icons/hi"; 
import fme from "../assets/brands/fme.png";
import vahan from "../assets/brands/vahan.png";
import gc from "../assets/brands/gc.png";

interface BrandsProps {
  isDark: boolean;
}

const Brands: React.FC<BrandsProps> = ({ isDark }) => {
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
      image: fme,
      features: [
        "Multimedia Content",
        "Creative Solutions",
        "Technology Integration",
        "Client Excellence",
      ],
      link: 'https://firstmoversentertainment.in/',
    },
    {
      name: "VaHaN by Pragati Tours and Travels",
      acronym: "VaHaN",
      slogan: "Comfort, Safety, Luxury",
      shortDescription: "VaHaN offers passenger logistics including cabs, buses, and comprehensive travel packages.",
      description:
        "VaHaN offers passenger logistics including cabs, buses, and travel packages. We focus on comfort, safety, and luxury, ensuring all vehicles are under seven years old. Whether short or long-distance, VaHaN guarantees a reliable and enjoyable journey.",
      color: "from-orange-400 to-orange-600",
      image: vahan,
      features: [
        "Premium Vehicles",
        "Safety First",
        "Travel Packages",
        "Luxury Experience",
      ],
      link: 'https://wa.me/919930886758',
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
      image: gc,
      features: [
        "Investment Solutions",
        "Insurance Coverage",
        "Financial Planning",
        "Long-term Growth",
      ],
      link: 'https://wa.me/919930886758',
    },
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { ease: "easeOut", duration: 0.5 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const darkText = isDark ? "transition-colors duration-500 text-white" : "transition-colors duration-500 text-gray-900";
  const lightText = isDark ? "transition-colors duration-500 text-gray-300" : "transition-colors duration-500 text-gray-700";
  const cardBackground = isDark 
    ? "transition-colors duration-500 border border-gray-700 bg-gray-800/50"
    : "transition-colors duration-500 border border-gray-200 bg-white";
  const acronymTag = isDark
    ? "transition-colors duration-500 bg-gray-700 text-gray-300"
    : "transition-colors duration-500 bg-gray-100 text-orange-600";
  const featureText = isDark ? "transition-colors duration-500 text-gray-300" : "transition-colors duration-500 text-gray-600";

  return (
    <section id="brands" className={`scroll-mt-20 py-10 ${isDark ? 'transition-colors duration-500 bg-gray-900' : 'transition-colors duration-500 bg-gray-50'}`}>
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="mb-2 flex items-center">
            <motion.div
              className="mr-4 relative w-fit"
              variants={{
                hidden: { rotate: -20, opacity: 0, scale: 0.8 },
                visible: { rotate: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              <div className="opacity-75 absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 blur" />
              <div className="relative p-3 bg-gradient-to-r rounded-full from-orange-500 to-orange-600">
                <HiStar className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              className={`md:text-4xl font-bold text-3xl ${darkText}`}
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
            >
              Our Brands
            </motion.h2>
          </div>

          <motion.p className={`ml-16 leading-relaxed text-lg ${lightText}`} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            Three distinct brands, one unified vision of excellence across entertainment, travel, and financial consulting.
          </motion.p>
        </motion.div>

        <motion.div className="gap-6 grid lg:grid-cols-3" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden flex flex-col justify-between p-6 rounded-3xl relative shadow-xl group hover:shadow-2xl ${cardBackground}`}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`opacity-0 absolute inset-0 transition-opacity duration-500 bg-gradient-to-r ${brand.color} group-hover:opacity-5`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 flex-grow">
                <div className="mb-4 flex items-start justify-between">
                  <img src={brand.image} alt={brand.name} className="w-24 h-24 object-contain" />
                  <div className={`mt-2 text-sm font-semibold px-3 py-1.5 rounded-full ${acronymTag}`}>{brand.acronym}</div>
                </div>

                <h3 className={`mt-4 mb-2 text-2xl font-bold ${darkText}`}>{brand.name}</h3>
                <p className={`mb-4 bg-clip-text text-transparent font-medium text-base bg-gradient-to-r ${brand.color}`}>{brand.slogan}</p>
                <p className={`mb-6 text-sm leading-relaxed ${lightText}`}>{brand.shortDescription}</p>
                <div className="mb-6 space-y-2">
                  {brand.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="space-x-2 flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${brand.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      />
                      <span className={`text-sm ${featureText}`}>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a
                href={brand.link} target="_blank"
                className={`shadow-md bg-gradient-to-r ${brand.color} mt-auto flex items-center justify-center py-2 px-4 rounded-xl text-sm font-semibold text-white transform transition-all duration-300 group-hover:scale-[1.01] hover:from-orange-600 hover:to-orange-700 relative z-10`}
              >
                <span>Know More</span>
                <HiArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
