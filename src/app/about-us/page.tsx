'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Story from "./components/Story";
import Why from "./components/Why";

function page() {
  return (
    <>
      <section className='min-h-[60vh] pt-40 pb-20 w-full lg:px-28 sm:px-16 px-7 flex md:flex-row flex-col-reverse items-center gap-16 relative overflow-hidden bg-white'>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-watermelon-red/5 rounded-full blur-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-watermelon-green/5 rounded-full blur-[100px] -z-0" />

        <div className='lg:w-[65%] md:w-[60%] w-full flex flex-col justify-center md:text-left text-center relative z-10'>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='text-6xl md:text-7xl font-serif font-bold text-charcoal tracking-tight'
          >
            About <span className="text-watermelon-red">Us</span>
          </motion.h1>
          <div className="h-1.5 w-20 bg-watermelon-green my-8 rounded-full md:mx-0 mx-auto" />
          
          <p className='text-xl md:text-2xl font-serif text-charcoal/80 mb-8 italic'>Hello there,</p>
          
          <p className='text-lg leading-relaxed text-charcoal/70 font-sans max-w-2xl'>
            The journey of <span className="font-bold text-charcoal">Jyotirgamya</span> began in 2018, founded by Dr. Deepak Kumar
            and Mrs. Mahima Sharma, who recognized the pressing need for career
            counseling and behavioral guidance among the new generation. 
          </p>
          <p className='mt-6 text-lg leading-relaxed text-charcoal/70 font-sans max-w-2xl'>
            With a shared passion for empowering individuals, they established this
            organization to support children across all age groups and to equip
            parents with the knowledge and tools needed to foster healthier and
            happier families.
          </p>
        </div>

        <div className='lg:w-[45%] md:w-[40%] w-full flex justify-center items-center relative z-10'>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-watermelon-red to-watermelon-green opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-500 rounded-[3rem]" />
            <Image
              src='/about-team.png'
              height={600}
              width={600}
              alt='Our Team'
              className='relative z-10 w-full h-auto rounded-[3rem] shadow-premium transform transition-transform duration-700 group-hover:scale-[1.02]'
            />
            {/* Floating Logo Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2, type: 'spring' }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <Image src="/Logo.png" alt="Jyotirgamya" width={100} height={40} className="h-8 w-auto" />
            </motion.div>
          </div>
        </div>
      </section>
      <Story />
      <Why />
    </>
  );
}

export default page;
