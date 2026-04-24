"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

function KnowMore() {
  const cards = [
    {
      image: "/knowCard1.jpg",
      title: "Who We Are?",
      description:
        "We’re a compassionate team of experts dedicated to transforming lives through personalized autism support and career assessment.",
      link: "/about-us",
    },
    {
      image: "/knowCard2.jpg",
      title: "Our Mission",
      description:
        "Empowering every individual to unlock their potential, fostering growth, and building brighter futures.",
      link: "/about-us",
    },
    {
      image: "/knowCard3.jpg",
      title: "Our Work",
      description:
        "We offer tailored assessments, therapy, and guidance to nurture strengths, inspire confidence, and pave the path to success.",
      link: "/about-us",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-fit bg-[#f9fafb] relative py-32 overflow-hidden">
      <div className='absolute inset-0 bg-[url("/knowmorebg.png")] bg-cover bg-fixed opacity-5 -z-10 animate-pulse-slow'></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6"
          >
            Discover Our <span className="text-indigo italic">Journey</span>
          </motion.h2>
          <div className="w-24 h-1 bg-indigo mx-auto rounded-full" />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((item, index) => (
            <Link href={item.link} key={"knowCard" + index}>
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-premium group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-serif mb-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                    {item.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <p className="text-white/80 font-light mb-8 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-3 text-mint font-semibold uppercase tracking-widest text-xs group/link"
                    >
                      Read Story <span className="p-2 rounded-full border border-mint/30 group-hover/link:bg-mint group-hover/link:text-charcoal transition-all">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default KnowMore;
