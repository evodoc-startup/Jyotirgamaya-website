"use client"
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

function Services() {
  return (

    <motion.div className="md:w-[65vw] w-screen bg-blue px-12 py-8 h-fit sm:mx-auto flex font-snas relative top-[-50px] opacity-0 justify-between sm:gap-x-10 gap-y-8 sm:flex-row flex-col"
      whileInView={{
        opacity: 1,
        y: -45,
        transition: {
          duration: 1
        }
      }}
    >
      <div className="w-fit text-white tracking-wide gap-y-5 flex flex-col">
        <p className="lg:text-3xl md:text-2xl text-xl font-bold tracking-normal">
          Explore our Services !!
        </p>
        <p className="text-sm lg:text-base">
          "We are committed to providing top-notch services that combine
          innovation, reliability, and personalized solutions to exceed your
          expectations and ensure your satisfaction at every step."
        </p>
      </div>
      <div className="w-fit flex items-center justify-end lg:justify-center">
        <Link
          href={"/services"}
          className="px-5 bg-white py-2 rounded-md shadow-xl text-nowrap">
          Explore Now
        </Link>
      </div>
    </motion.div>
  );
}

export default Services;
