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
    <div className="w-full h-fit bg-[#76E1FF] relative bg-opacity-[68%]">
      <div className='absolute w-full h-full bg-[url("/knowmorebg.png")] bg-cover bg-no-repeat -z-10'></div>
      <motion.div
        className="h-44 w-44 bg-[#007EB5] absolute top-3 -left-36"
        whileInView={{
          rotate: 45,
          transition: { duration: 1 },
        }}
      />
      <div className="w-full h-fit pt-12 pb-44 px-5">
        <h1 className="mt-8 text-4xl text-center font-semibold tracking-wider">
          Know More <span className="uppercase text-blue">About Us</span>
        </h1>
        <div className="w-80 bg-white h-[2px] mx-auto mt-3"></div>
        <motion.div
          className="w-full h-fit mt-10 flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <AnimatePresence>
            {cards.map((item, index) => (
              <motion.div
                key={"knowCard" + index}
                className="relative w-72 xl:w-96 aspect-square overflow-hidden shadow-2xl group"
                variants={cardVariants}
              >
                <Image
                  src={item.image}
                  alt="knowCardImg"
                  fill
                  className="object-cover"
                />
                {/* Always Visible Title */}
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4">
                  <p className="text-xl font-semibold">{item.title}</p>
                </div>
                {/* Sliding Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 px-8 py-4 transform translate-y-full group-hover:translate-y-0 transition duration-300"
                >
                  <p className="mb-6">{item.description}</p>
                  <Link
                    href={item.link}
                    className="bg-[#79CFFA] px-3 py-2 rounded-md inline-block"
                  >
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
