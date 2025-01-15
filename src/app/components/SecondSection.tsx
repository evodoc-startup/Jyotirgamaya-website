"use client"
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

function SecondSection() {
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
    <section className="w-full h-fit py-20 flex sm:flex-row flex-col justify-around px-10 md:px-40 
    gap-y-10 flex-wrap">
      <AnimatePresence>
        {circularElements.map((item, index) => (
          <motion.div
            key={"circularElements" + index}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100, transition: { duration: 2 } }}>
            <div
              className={`overflow-visible rounded-full hover:bg-${item.color} border-2 border-${item.color} transition-all duration-200 object-contain ease-in`}>
              <Image
                src={item.icon}
                alt="icon"
                height={100}
                width={100}
                className=" h-32 w-32 p-6 filter hover:invert"
              />
            </div>
            <div
              className={`mt-8 w-56 tracking-wide text-center text-nowrap font-semibold bg-${item.color} px-3 py-2 text-white uppercase`}>
              {item.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}

export default SecondSection;
