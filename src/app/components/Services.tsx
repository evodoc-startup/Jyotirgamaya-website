"use client"
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

function Services() {
  return (
    <motion.div 
      className="md:w-[80vw] w-[95vw] mx-auto overflow-hidden rounded-[2rem] shadow-premium relative top-[-40px] group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
      }}
    >
      <div className="absolute inset-0 bg-indigo transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_-20%,#0E7490,transparent)]" />
      
      <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-2xl text-center md:text-left">
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-white text-4xl md:text-5xl font-serif mb-6 leading-tight"
          >
            Elevate Your Future with Our <span className="text-mint italic font-light">Expert Services</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-white/70 text-lg font-light leading-relaxed"
          >
            "We combine innovation, compassion, and professional excellence to light your path forward."
          </motion.p>
        </div>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          className="flex-shrink-0"
        >
          <Link
            href={"/services"}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-indigo bg-white rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="absolute inset-0 bg-charcoal transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Explore Services</span>
            <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;
