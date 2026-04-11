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
      <div className='py-10 xl:px-52 lg:px-32 hidden lg:flex flex-col gap-y-24 mt-20'>
        {internships.map((internship, index) => {
          const isReversed = index % 2 !== 0
          return (
            <div
              key={`internship-${index}`}
              className={`w-full flex justify-around gap-x-6 ${
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
                <h3 className='text-3xl tracking-widest leading-normal font-semibold'>
                  {internship.title}
                </h3>
                <div
                  className='h-[1px] my-3 w-full'
                  style={{ background: internship.lineColor }}
                ></div>
                <p className='my-4 font-bold'>Overview:</p>
                <p>{internship.overview}</p>
                <p className='my-4 font-bold'>Focus:</p>
                <p>{internship.focus}</p>
                <Link
                  href='/'
                  className='py-2 px-5 my-4 bg-[#FF9B28] text-white w-fit'
                >
                  Explore Now
                </Link>
              </motion.div>
              <motion.div
                className='w-fit flex items-center'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={isReversed ? leftVariant : rightVariant}
              >
                <Image
                  src={internship.image}
                  height={400}
                  width={400}
                  alt={`internship-${index + 1}`}
                />
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Mobile View */}
      <div className='py-10 lg:hidden px-10 flex flex-col gap-y-24 mt-20'>
        {internships.map((internship, index) => (
          <motion.div
            key={`internship-mobile-${index}`}
            className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={upVariant}
          >
            <div className='w-full flex items-center'>
              <Image
                src={internship.image}
                height={400}
                width={400}
                alt={`internship-${index + 1}`}
                className='w-full h-96 object-cover'
              />
            </div>
            <div className='w-full flex flex-col md:p-10 p-7'>
              <h3 className='text-3xl tracking-widest leading-normal'>
                {internship.title}
              </h3>
              <div
                className='h-[1px] my-3 w-full'
                style={{ background: internship.lineColor }}
              ></div>
              <p className='my-4 font-bold'>Overview:</p>
              <p>{internship.overview}</p>
              <p className='my-4 font-bold'>Focus:</p>
              <p>{internship.focus}</p>
              <Link
                href='https://docs.google.com/forms/d/e/1FAIpQLScqCcLemkkaBaA8EBDAy7UHY17kbHym7t4Eerm-004STiN1gw/viewform?usp=header'
                className='py-2 px-4 my-4 bg-[#FF9B28] text-white w-fit'
              >
                Explore Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Internships
