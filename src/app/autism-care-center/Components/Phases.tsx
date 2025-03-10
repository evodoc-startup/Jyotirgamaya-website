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
      color: "blue",
    },
    {
      icon: "/search.svg",
      title: "Phase 2",
      description:
        "Collaborate with parents and therapists to identify developmental needs and strengths. Focus on enhancing communication and social skills through targeted activities.",
      color: "pink",
    },
    {
      icon: "/understand.svg",
      title: "Phase 3",
      description:
        "Develop personalized strategies with tailored therapies and structured routines. Emphasize skill development and sensory-friendly techniques to foster growth.",
      color: "gold",
    },
    {
      icon: "/write.svg",
      title: "Phase 4",
      description:
        "Reinforce learned skills with consistent practice across home, school, and social settings. Empower caregivers with practical tools for ongoing support.",
      color: "moonstone",
    },
  ];

  return (
    <section className="w-full h-fit py-20 flex sm:flex-row flex-col justify-around px-10 md:px-3 gap-y-10 flex-wrap">
      <AnimatePresence>
        {phases.map((phase, index) => (
          <motion.div
            key={`phase-${index}`}
            className="flex flex-col h-fit items-center justify-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            <div
              className={`rounded-full hover:bg-${phase.color} border-2 border-${phase.color} transition-all duration-200 object-contain ease-in`}
            >
              <Image
                src={phase.icon}
                alt={phase.title}
                height={100}
                width={100}
                className="h-32 w-32 p-6 filter hover:invert"
              />
            </div>
            <div
              className={`mt-8 w-56 tracking-wide text-center font-semibold bg-${phase.color} px-3 py-2 text-white uppercase`}
            >
              {phase.title}
            </div>
            <p className="mt-4 w-56 text-sm leading-relaxed text-justify">
              {phase.description}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}

export default Phases;
