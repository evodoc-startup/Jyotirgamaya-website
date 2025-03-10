'use client'
import React from 'react'
import Main from './Components/Main'
import Phases from './Components/Phases'
import FAQ from './Components/FAQ'
import Cards from './Components/Cards'
import { motion } from 'motion/react'

function page () {
  return (
    <>
      <Main />
      <motion.hr
        className='w-[95%] h-[2px] my-2 mx-auto bg-[#D0D0D0]'
        initial={{ scaleX: 0 }}
        whileInView={{
          scaleX: 1,
          transition: { duration: 1, ease: 'easeOut' }
        }}
      />
      <Phases />
      <div className='relative w-full md:h-[600px] h-fit overflow-x-hidden overflow-y-visible'>
        <Cards />
      </div>
      <FAQ />
    </>
  )
}

export default page
