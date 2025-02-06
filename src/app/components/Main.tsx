"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import main1 from "../../../public/main1.png";
import main2 from "../../../public/main2.png";
import main3 from "../../../public/main3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Main() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1 > 2 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <motion.main className="w-full sm:h-[85vh] h-[80vh] relative select-none">
      <motion.div className="w-full h-full top-0 bg-blue-200 absolute">
        <Image
          src={slides[slide].image}
          alt="main-section-image-1"
          height={10000}
          width={10000}
          className="w-full h-full object-cover aspect-auto"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 w-full h-full sm:opacity-0 opacity-100 z-10 relative flex justify-center items-center"
        key={"div" + slide}
        animate={{ opacity: 100, transition: { duration: 1, ease: "easeIn" } }}>
        <div
          className={`py-8 px-16 flex flex-col space-y-2 sm:w-[35rem] w-full md:bg-opacity-100 bg-opacity-80 bg-${slides[slide].color} text-white font-sans h-fit justify-center gap-y-3`}>
          <p className="sm:text-lg text-base">{slides[slide].topPara}</p>
          <h2
            className="md:text-5xl text-3xl font-bold "
            style={{ lineHeight: 1.2 }}>
            {slides[slide].heading}
          </h2>
          <p className="sm:text-lg text-base">{slides[slide].para}</p>
        </div>
      </motion.div>
      <div
        className={`absolute left-0 top-[40%] sm:bg-${slides[slide].color} px-2 py-5 text-white cursor-pointer z-20`}
        onClick={() => setSlide(slide - 1 < 0 ? slides.length - 1 : slide - 1)}>
        <FaChevronLeft className="sm:text-2xl" />
      </div>
      <div
        className={`absolute right-0 top-[40%] sm:bg-${slides[slide].color} px-2 py-5 text-white cursor-pointer z-20`}
        onClick={() => setSlide(slide + 1 > slides.length - 1 ? 0 : slide + 1)}>
        <FaChevronRight className="sm:text-2xl" />
      </div>
    </motion.main>
  );
}
