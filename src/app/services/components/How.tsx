"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

function How() {
  const steps = [
    {
      icon: "/goal.svg",
      title: "Setting Your Goals",
      description: "Define your objectives to create a focused plan.",
      color: "blue",
    },
    {
      icon: "/search.svg",
      title: "Exploring Your Potential",
      description: "Uncover the opportunities and strengths within you.",
      color: "pink",
    },
    {
      icon: "/understand.svg",
      title: "Understanding Your Profile",
      description: "Gain insights into your unique qualities and preferences.",
      color: "orange",
    },
    {
      icon: "/find.svg",
      title: "Discovering Your Options",
      description: "Explore various strategies and paths available to you.",
      color: "moonstone",
    },
    {
      icon: "/success.svg",
      title: "Your Path to Success",
      description: "Follow a tailored roadmap to achieve your goals.",
      color: "gold",
    },
  ];

  return (
    <section className="w-full h-fit pt-14 pb-10 flex flex-col items-center gap-y-5">
      <h2 className="text-3xl font-semibold tracking-wider mb-10">
        How It Works?
      </h2>
      <AnimatePresence>
        <div className="w-full flex flex-wrap justify-center items-center gap-10 px-10 md:px-3">
          {steps.map((step, index) => (
            <motion.div
              key={`step-${index}`}
              className="flex flex-col w-56 items-center justify-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}
            >
              <div
                className={`rounded-full hover:bg-${step.color} border-2 border-${step.color} transition-all duration-200 object-contain ease-in`}
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  height={100}
                  width={100}
                  className="h-32 w-32 p-6 filter hover:invert"
                />
              </div>
              <div
                className={`mt-8 w-full flex items-center justify-center tracking-wide text-center font-semibold bg-${step.color} px-3 py-2 text-white uppercase h-16`}
              >
                {step.title}
              </div>
              <p className="mt-2 w-full text-sm leading-relaxed text-center h-16 flex items-center justify-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}

export default How;
