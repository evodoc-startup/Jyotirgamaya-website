"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import main1 from "../../../public/main1.png";
import main2 from "../../../public/main2.png";
import main3 from "../../../public/main3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Main() {
  const container = useRef<HTMLDivElement>(null);
  // ... slides definition ...
  const slides = [
    {
      image: main1,
      topPara: "Your Path to Purpose",
      heading: "Find the Career You’re Made For",
      para: "Unlock tailored career guidance that helps you plan, pursue, and achieve your professional dreams.",
      color: "orange",
    },
    {
      image: main2,
      topPara: "Launch Your Future",
      heading: "Internships with Impact",
      para: "Gain hands-on experience, grow professionally, and make a difference with our specialized internships.",
      color: "blue",
    },
    {
      image: main3,
      topPara: "Every Step, Every Milestone",
      heading: "Autism Center for Holistic Growth",
      para: "Empowering children with autism to thrive with compassionate, customized support.",
      color: "pink",
    },
  ];

  const [slide, setSlide] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".hero-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.3 }
    );
  }, { scope: container, dependencies: [slide] });

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1 > 2 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={container} className="w-full h-screen relative overflow-hidden bg-charcoal">
      <AnimatePresence>
        <motion.div 
          key={slide}
          style={{ opacity: 1 - scrollY / 700 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="w-full h-full"
          >
            <Image
              src={slides[slide].image}
              alt="hero"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full px-6 md:px-24 pt-20">
        <motion.div 
          style={{ opacity: 1 - scrollY / 500, y: scrollY * 0.3 }}
          className="max-w-4xl"
        >
          <div className="overflow-hidden mb-6 text-reveal-mask">
            <p className="hero-text text-mint uppercase tracking-[0.4em] font-semibold text-xs md:text-sm">
              {slides[slide].topPara}
            </p>
          </div>
          <div className="overflow-hidden mb-8 text-reveal-mask">
            <h1 className="hero-text text-white text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[1.05] tracking-tight">
              {slides[slide].heading.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.3em]">{word}</span>
              ))}
            </h1>
          </div>
          <div className="overflow-hidden mb-12 text-reveal-mask">
            <p className="hero-text text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
              {slides[slide].para}
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
             <button className="group relative px-10 py-5 bg-white text-charcoal font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-mint/20">
                <span className="absolute inset-0 bg-mint translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Get Started</span>
             </button>
             <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                Learn More
             </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-24 flex items-end gap-3 z-30">
        {slides.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setSlide(i)}
            className="group cursor-pointer py-4"
          >
            <div className={`h-[3px] transition-all duration-700 relative overflow-hidden ${slide === i ? 'w-16 bg-white' : 'w-8 bg-white/20 group-hover:bg-white/40'}`}>
               {slide === i && (
                 <motion.div 
                   className="absolute inset-0 bg-mint origin-left"
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 5, ease: "linear" }}
                 />
               )}
            </div>
            <p className={`mt-2 text-[10px] tracking-widest uppercase transition-opacity duration-500 ${slide === i ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-50 text-white/50'}`}>
              0{i + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
