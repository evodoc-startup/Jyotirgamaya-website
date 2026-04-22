'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Variants for sliding in from left and right (Desktop)
const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

// Variant for sliding up (Mobile)
const upVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

function Internships () {
  const internships = [
    {
      title: 'Rorschach Inkblot Test Training',
      overview:
        'Learn the administration, scoring, and interpretation of the Rorschach Inkblot Test.',
      focus:
        'Focus on identifying personality traits and uncovering underlying psychological patterns.',
      color: 'purple',
      lineColor: '#8e44ad',
      image: '/internship-1.png'
    },
    {
      title: 'Hypnosis and Hypnotherapy',
      overview:
        'Understand the fundamentals of hypnotherapy, its ethical use, and techniques for relaxation and behavior change.',
      focus:
        'Practical demonstrations on guided imagery and self-hypnosis techniques.',
      color: 'teal',
      lineColor: '#1abc9c',
      image: '/internship-2.png'
    },
    {
      title: 'Cognitive-Behavioral Therapy (CBT) Essentials',
      overview:
        'Explore the core principles of CBT, including cognitive restructuring and behavioral interventions.',
      focus:
        'Role-play exercises for dealing with anxiety, depression, and phobias.',
      color: 'blue',
      lineColor: '#3498db',
      image: '/internship-3.png'
    },
    {
      title: '16 PF Personality Assessment Workshop',
      overview:
        'Learn to administer, score, and interpret the 16 Personality Factor (16 PF) Questionnaire for applications in counseling, career guidance, and organizational settings. This workshop will equip participants with practical skills to analyze personality profiles ethically and effectively.',
      focus:
        'Gain practical skills to analyze personality profiles ethically and effectively.',
      color: 'orange',
      lineColor: '#e67e22',
      image: '/internship-4.png'
    }
  ]

  return (
    <section>
      {/* Desktop View */}
      <div className='py-10 xl:px-52 lg:px-32 hidden lg:flex flex-col gap-y-32 mt-20'>
        {internships.map((internship, index) => {
          const isReversed = index % 2 !== 0
          return (
            <div
              key={`internship-${index}`}
              className={`w-full flex justify-around gap-x-16 items-center ${
                isReversed ? 'flex-row-reverse' : ''
              }`}
            >
              <motion.div
                className='w-[45%] flex flex-col'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={isReversed ? rightVariant : leftVariant}
              >
                <h3 className='text-4xl tracking-tight leading-tight font-serif font-bold text-charcoal'>
                  {internship.title}
                </h3>
                <div
                  className='h-1 my-6 w-full rounded-full opacity-30'
                  style={{ background: internship.lineColor }}
                ></div>
                
                <div className="space-y-6 font-sans text-charcoal/80">
                  <div>
                    <p className='mb-1 font-bold text-charcoal uppercase text-xs tracking-widest'>Overview:</p>
                    <p className="leading-relaxed">{internship.overview}</p>
                  </div>
                  <div>
                    <p className='mb-1 font-bold text-charcoal uppercase text-xs tracking-widest'>Focus:</p>
                    <p className="leading-relaxed">{internship.focus}</p>
                  </div>
                </div>

                <Link
                  href='/contact'
                  className='group relative py-4 px-10 my-8 bg-watermelon-green text-white font-bold rounded-full w-fit overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-watermelon-green/30'
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10 uppercase tracking-widest text-xs">Contact Us</span>
                </Link>
              </motion.div>
              <motion.div
                className='w-[45%] flex items-center justify-center relative'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={isReversed ? leftVariant : rightVariant}
              >
                <div className="absolute inset-0 bg-gray-50 rounded-[3rem] rotate-3 z-0" />
                <Image
                  src={internship.image}
                  height={500}
                  width={500}
                  alt={`internship-${index + 1}`}
                  className="relative z-10 rounded-[3rem] shadow-premium object-cover aspect-square"
                />
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Mobile View */}
      <div className='py-10 lg:hidden px-6 flex flex-col gap-y-20 mt-10'>
        {internships.map((internship, index) => (
          <motion.div
            key={`internship-mobile-${index}`}
            className='w-full flex flex-col shadow-premium bg-white rounded-[2.5rem] overflow-hidden'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={upVariant}
          >
            <div className='w-full h-72 relative'>
              <Image
                src={internship.image}
                height={400}
                width={400}
                alt={`internship-${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full flex flex-col p-8'>
              <h3 className='text-3xl font-serif font-bold text-charcoal leading-tight'>
                {internship.title}
              </h3>
              <div
                className='h-1 my-4 w-12 rounded-full opacity-50'
                style={{ background: internship.lineColor }}
              ></div>
              <div className="space-y-4 font-sans text-charcoal/70 text-sm">
                <p><span className="font-bold text-charcoal mr-2">Overview:</span>{internship.overview}</p>
                <p><span className="font-bold text-charcoal mr-2">Focus:</span>{internship.focus}</p>
              </div>
              <Link
                href='/contact'
                className='mt-8 py-4 px-8 bg-watermelon-green text-white font-bold rounded-full text-center uppercase tracking-widest text-xs'
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Internships
