'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
  return (
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

      <div className='lg:w-[35%] md:w-[40%] w-full flex justify-center items-center relative z-10'>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-watermelon-red to-watermelon-green opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-500 rounded-full" />
          <Image
            src='/Logo.png'
            height={400}
            width={400}
            alt='About'
            className='relative z-10 w-full h-auto max-w-[300px] transform transition-transform duration-700 group-hover:scale-105'
          />
        </div>
      </div>
    </section>
  )
}

export default Main
