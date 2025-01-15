"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

function KnowMore() {
  const cards = [
    {
      image: "/knowCard1.jpg",
      title: "Who We Are?",
      description:
        "We’re a compassionate team of experts dedicated to transforming lives through personalized autism support and career assessment.",
      link: "/about",
    },
    {
      image: "/knowCard2.jpg",
      title: "Our Mission",
      description:
        "Empowering every individual to unlock their potential, fostering growth, and building brighter futures.",
      link: "/about",
    },
    {
      image: "/knowCard3.jpg",
      title: "Our Work",
      description:
        "We offer tailored assessments, therapy, and guidance to nurture strengths, inspire confidence, and pave the path to success.",
      link: "/about",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  

  return (
    <div className="w-full h-fit bg-[#76E1FF] relative bg-opacity-[68%]">
      <div className='absolute w-full h-full bg-[url("/knowmorebg.png")] bg-cover bg-no-repeat -z-10'></div>
      <motion.div className="h-44 w-44 bg-[#007EB5] absolute top-3 -left-36" whileInView={{rotate: 45, transition : {
        duration: 1
      }}}></motion.div>
      <div className="w-full h-fit pt-12 pb-44 lg:px-44 md:px-24 px-5">
        <h1 className="mt-8 text-4xl text-center font-semibold tracking-wider">
          Know More <span className="uppercase text-blue">About Us</span>
        </h1>
        <div className="w-80 bg-white h-[2px] mx-auto mt-3"></div>
        <motion.div className="w-full h-fit mt-10 flex items-center lg:justify-between justify-center flex-wrap gap-y-8 lg:gap-x-0 gap-x-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
          <AnimatePresence>
            {cards.map((item, index) => (
              <motion.div
                key={"knowCard" + index}
                className={`h-80 w-80 aspect-square overflow-hidden relative shadow-2xl`}
                variants={cardVariants}
                >
                <Image
                  src={item.image}
                  alt={"knowCardImg"}
                  height={500}
                  width={500}
                  className="w-full h-full"
                />
                <motion.div
                  className="h-full w-full px-8 py-4  text-center bg-white absolute top-0 rounded-tl-md rounded-tr-md bg-opacity-90 translate-y-[260px] hover:translate-y-0 duration-300 hover:rounded-none transition"
                  >
                  <p className="text-xl mb-3">{item.title}</p>
                  <p className="text-center mb-6">{item.description}</p>
                  <Link
                    href={item.link}
                    className="bg-[#79CFFA] px-3 py-2 rounded-md">
                    Know More
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default KnowMore;
