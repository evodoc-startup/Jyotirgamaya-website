"use client";
import Image from "next/image";
import Main from "./components/Main";
import icon1 from "../../public/mind.svg";
import icon2 from "../../public/behaviour.svg";
import icon3 from "../../public/work.svg";
import icon4 from "../../public/write.svg";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const circularElements = [
    {
      icon: "/mind.svg",
      text: "Autism Therapy",
      color: "blue",
    },
    {
      icon: "/behavioral.svg",
      text: "Behavioural Therapy",
      color: "pink",
    },
    {
      icon: "/work.svg",
      text: "Internships",
      color: "gold",
    },
    {
      icon: "/write.svg",
      text: "Assignments",
      color: "moonstone",
    },
  ];

  return (
    <>
      <Main />
      <div className="w-full h-fit py-20 flex md:flex-row flex-col justify-around px-10 md:px-40 flex-wrap">
        <AnimatePresence>
          {circularElements.map((item, index) => (
            <motion.div
              key={"circularElements" + index}
              className="flex flex-col items-center justify-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100, transition: { duration: 2 } }}>
              <div className={`overflow-visible rounded-full hover:bg-${item.color} border-2 border-${item.color} transition-all duration-200 object-contain ease-in`}>
              <Image
                src={item.icon}
                alt="icon"
                height={100}
                width={100}
                className=" h-32 w-32 p-6 filter hover:invert"
              />
              </div>
              <div className={`mt-8 w-44 text-center text-nowrap font-semibold bg-${item.color} px-3 py-2 text-white`}>
                {item.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
