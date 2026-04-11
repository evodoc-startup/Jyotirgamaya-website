'use client'
import React from 'react'
import { motion } from 'motion/react'

function Main() {
    return (
        <motion.main className='flex w-full justify-center items-center bg-gold bg-fixed'
            initial={{ height: '100vh' }}
            animate={{ height: '50vh', transition: { duration: 1.2, delay: 1, ease: "easeIn" } }}
            viewport={{ once: true }}
        >
            <motion.div className='w-full flex flex-col items-center justify-center min-h-[550px] text-center xl:px-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true }}
            >
                <h1 className='md:text-5xl text-3xl font-bold tracking-wider leading-snug'>Unleash the Power of Your Mind</h1>
                <p className='md:text-xl leading-loose my-5 tracking-widest'>Explore a range of expert-led workshops designed to help you understand, grow, and thrive.</p>
            </motion.div>
        </motion.main>
    )
}

export default Main