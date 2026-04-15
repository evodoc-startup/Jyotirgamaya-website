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
    <section className="w-full h-fit py-32 px-6 md:px-24 bg-white relative overflow-hidden">
      {/* Kinetic Background Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          rotate: [0, 90, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-mint/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 120, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-indigo/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-7xl mx-auto relative z-10">
        <AnimatePresence>
          {circularElements.map((item, index) => (
            <motion.div
              key={"circularElements" + index}
              className="flex flex-col items-center justify-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] } }}
              whileHover={{ y: -15 }}
            >
              <div
                className={`relative overflow-visible rounded-full border border-gray-100 bg-white shadow-premium p-10 md:p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:border-mint/20`}>
                <div 
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-${item.color} transition-opacity duration-500`} 
                />
                <Image
                  src={item.icon}
                  alt={item.text}
                  height={120}
                  width={120}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <div className="mt-8 flex flex-col items-center">
                 <h3 className="text-charcoal text-lg md:text-xl font-serif font-medium tracking-tight mb-2 text-center text-nowrap transition-colors duration-300 group-hover:text-indigo">
                   {item.text}
                 </h3>
                 <div className={`w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SecondSection;
