'use client'
import React from 'react'
import { motion } from 'motion/react'

function Main () {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // Adjust the stagger timing (in seconds) as needed
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  return (
    <motion.main
      className={`w-full md:h-[85vh] h-fit relative select-none bg-[url("/services.jpg")] bg-cover bg-no-repeat`}
      animate={{height:"60vh", transition: {duration: 2, delay: 2}}}
    >
      <div className='h-full w-full bg-[#c921a2] md:py-0 sm:py-10 py-20 bg-opacity-50 flex flex-col items-center justify-center lg:px-44 md:px-20 px-10'>
        <motion.div
          className='font-sans text-center'
          viewport={{ once: true }}
        >
          <motion.p
            className='xl:text-6xl sm:text-5xl text-4xl text-white tracking-tight font-serif font-bold leading-tight'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0, transition: {duration: 1.5}}}
            viewport={{ once: true }}
          >
            "Empowering Minds: Your Journey to Emotional Well-Being Starts
            Here!"
          </motion.p>
        </motion.div>
      </div>
    </motion.main>
  )
}

export default Main
