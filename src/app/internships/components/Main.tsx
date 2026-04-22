'use client'
import React from 'react'
import { motion } from 'motion/react'

function Main() {
    return (
        <motion.main className='flex w-full justify-center items-center bg-gradient-to-br from-charcoal to-slate-900 relative overflow-hidden'
            initial={{ height: '100vh' }}
            animate={{ height: '60vh', transition: { duration: 1.2, delay: 1, ease: "easeOut" } }}
            viewport={{ once: true }}
        >
            {/* Decorative Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-20 left-20 w-96 h-96 bg-watermelon-green rounded-full blur-[120px]" />
            </div>

            <motion.div className='w-full flex flex-col items-center justify-center min-h-[400px] text-center xl:px-20 relative z-10'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
                viewport={{ once: true }}
            >
                <h1 className='md:text-6xl text-4xl font-serif font-bold tracking-tight text-white leading-tight'>
                  Unleash the Power of <br className="hidden md:block" />
                  <span className="text-watermelon-green">Your Mind</span>
                </h1>
                <p className='md:text-xl text-white/70 font-sans leading-relaxed my-8 max-w-2xl px-6'>Explore a range of expert-led workshops designed to help you understand, grow, and thrive.</p>
                <div className="h-1.5 w-20 bg-watermelon-red rounded-full" />
            </motion.div>
        </motion.main>
    )
}

export default Main