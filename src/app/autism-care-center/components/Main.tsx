'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

function Main () {
  return (
    <main className='w-full flex md:flex-row flex-col-reverse items-center'>
      <motion.div
        className='md:w-1/2 w-full md:py-20 py-5 xl:pl-44 px-8'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl md:text-5xl mb-8 font-serif text-charcoal tracking-tight'>What is Autism ?</h1>
        <p className='text-charcoal/80 leading-relaxed text-justify font-sans'>
          Autism, or Autism Spectrum Disorder (ASD), is a neurodevelopmental
          condition characterized by differences in communication, social
          interaction, and repetitive behaviors. It is a spectrum, meaning it
          affects individuals uniquely, with varying strengths and challenges.
          Autism is not a disease but a lifelong condition, with early support
          fostering growth and independence.
        </p>
        <Link
          href={'/'}
          className='group relative block w-fit my-8 px-8 py-3.5 bg-watermelon-red text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-watermelon-red/30'
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <span className="relative z-10">Know More</span>
        </Link>
      </motion.div>
      <motion.div
        className='md:w-1/2 w-full flex justify-center items-center md:py-20 py-5'
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <Image src={'/autism.png'} alt='Image' height={500} width={500} />
      </motion.div>
    </main>
  )
}

export default Main
