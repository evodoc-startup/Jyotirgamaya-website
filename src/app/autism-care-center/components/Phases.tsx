"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

function Phases() {
  const phases = [
    {
      icon: "/talking.svg",
      title: "Phase 1",
      description:
        "Establish trust and build familiarity using engaging play sessions in a safe, welcoming environment. Discover individual strengths and encourage early interaction.",
      color: "watermelon-red",
      glow: "rgba(255, 94, 98, 0.2)",
    },
    {
      icon: "/search.svg",
      title: "Phase 2",
      description:
        "Collaborate with parents and therapists to identify developmental needs and strengths. Focus on enhancing communication and social skills through targeted activities.",
      color: "watermelon-green",
      glow: "rgba(46, 204, 113, 0.2)",
    },
    {
      icon: "/understand.svg",
      title: "Phase 3",
      description:
        "Develop personalized strategies with tailored therapies and structured routines. Emphasize skill development and sensory-friendly techniques to foster growth.",
      color: "watermelon-red",
      glow: "rgba(255, 94, 98, 0.2)",
    },
    {
      icon: "/write.svg",
      title: "Phase 4",
      description:
        "Reinforce learned skills with consistent practice across home, school, and social settings. Empower caregivers with practical tools for ongoing support.",
      color: "watermelon-green",
      glow: "rgba(46, 204, 113, 0.2)",
    },
  ];

  return (
    <section className="w-full h-fit py-24 flex sm:flex-row flex-col justify-around px-10 md:px-24 gap-12 flex-wrap">
      <AnimatePresence>
        {phases.map((phase, index) => (
          <motion.div
            key={`phase-${index}`}
            className="flex flex-col h-fit items-center justify-center text-center max-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } }}
            viewport={{ once: true }}
          >
            <div
              className={`relative rounded-full border border-gray-100 bg-white/40 backdrop-blur-md p-8 shadow-premium transition-all duration-500 hover:shadow-xl group`}
            >
              <div 
                className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-${phase.color} transition-all duration-500`}
                style={{ boxShadow: `0 0 20px ${phase.glow}` }}
              />
              <Image
                src={phase.icon}
                alt={phase.title}
                height={100}
                width={100}
                className="h-20 w-20 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div
              className={`mt-10 w-full font-serif font-bold text-xl text-charcoal tracking-tight`}
            >
              {phase.title}
              <div className={`h-1 w-12 bg-${phase.color} mx-auto mt-2 rounded-full`} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-charcoal/70 font-sans text-center">
              {phase.description}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}

export default Phases;
