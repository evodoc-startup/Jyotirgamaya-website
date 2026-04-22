'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Variants for sliding in from left and right (Desktop)
const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

// Variant for sliding up (Mobile)
const upVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

function Services () {
  const services = [
    {
      title: 'Parent Coaching and Counseling',
      overview:
        'Personalized guidance for parents to develop positive parenting strategies, set boundaries, and strengthen relationships with their children.',
      bestFor:
        'Parents facing challenges with discipline, communication, or emotional regulation in the home.',
      color: 'blue',
      lineColor: '#77B2FF',
      image: '/service-1.png'
    },
    {
      title: 'Child Behavior Therapy',
      overview:
        'Specialized therapy for children to help manage issues like anxiety, aggression, attention difficulties, and social challenges.',
      bestFor:
        'Children aged 5–12 experiencing behavioral or emotional issues.',
      color: 'pink',
      lineColor: '#79FFEF',
      image: '/service-2.png'
    },
    {
      title: 'Family Therapy',
      overview:
        'A collaborative approach involving parents and children to address and resolve family conflicts or communication breakdowns.',
      bestFor:
        'Families struggling with tension, lack of understanding, or adjusting to life changes.',
      color: 'red',
      lineColor: '#FF8B8B',
      image: '/service-3.png'
    },
    {
      title: 'Cognitive Behavioral Therapy (CBT) for Adolescents',
      overview:
        'Targeted therapy for adolescents, focusing on managing thoughts and behaviors related to stress, self-esteem, and peer relationships.',
      bestFor:
        'Teens dealing with social pressures, anxiety, or low self-confidence.',
      color: 'violet',
      lineColor: '#9B59B6',
      image: '/service-4.png'
    },
    {
      title: 'Play Therapy for Young Children',
      overview:
        'A gentle, non-intrusive method using play to help children express emotions and build coping mechanisms.',
      bestFor:
        'Children aged 3–10 who struggle with verbal expression or traumatic experiences.',
      color: 'teal',
      lineColor: '#1ABC9C',
      image: '/service-5.png'
    },
    {
      title: 'School Adjustment Counseling',
      overview:
        'Counseling focused on helping children and teens navigate school pressures, manage academic stress, and build social skills.',
      bestFor:
        'Children and adolescents facing difficulty adjusting to school environments.',
      color: 'green',
      lineColor: '#32FF40',
      image: '/service-6.png'
    },
    {
      title: 'Personality Assessment',
      overview:
        'A detailed assessment to explore personality traits and preferences, helping students understand how they relate to different work environments and roles.',
      bestFor:
        'Students unsure about where their natural tendencies might fit in the world of work.',
      duration: '1 hour',
      color: 'indigo',
      lineColor: '#5DADE2',
      image: '/service-7.png'
    },
    {
      title: 'Aptitude Testing',
      overview:
        'A practical assessment focused on measuring skills in areas such as problem-solving, analytical thinking, and communication.',
      bestFor:
        'Students looking to understand where their strengths lie and which roles utilize their natural abilities.',
      duration: '1–1.5 hours',
      color: 'amber',
      lineColor: '#F5CBA7',
      image: '/service-8.png'
    }
  ]

  return (
    <section>
      <div className='w-full px-6 py-32 bg-gradient-to-br from-charcoal to-[#1a2b3c] text-center relative overflow-hidden'>
        {/* Decorative Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-watermelon-red rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-watermelon-green rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-6xl md:text-7xl font-serif font-bold tracking-tight text-white mb-8'
          >
            Our <span className="text-watermelon-red">Services</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-watermelon-green mx-auto mb-10 rounded-full" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='text-white/70 tracking-normal font-sans text-lg md:text-xl leading-relaxed'
          >
            Discover comprehensive psychological services designed to support your
            mental health and personal growth. We offer tailored
            solutions to help you thrive with experienced professionals and
            a compassionate approach.
          </motion.p>
        </div>
      </div>

      {/* Desktop View */}
      <div className='py-10 xl:px-52 lg:px-32 hidden lg:flex flex-col gap-y-32 mt-20'>
        {services.map((service, index) => {
          // Alternate row layout based on index
          const isReversed = index % 2 !== 0
          return (
            <div
              key={`service-${index}`}
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
                  {service.title}
                </h3>
                <div
                  className='h-1 my-6 w-full rounded-full opacity-30'
                  style={{ background: service.lineColor }}
                ></div>
                <div className="space-y-6 font-sans text-charcoal/80">
                  <div>
                    <p className='mb-1 font-bold text-charcoal uppercase text-xs tracking-widest'>Overview:</p>
                    <p className="leading-relaxed">{service.overview}</p>
                  </div>
                  <div>
                    <p className='mb-1 font-bold text-charcoal uppercase text-xs tracking-widest'>Best For:</p>
                    <p className="leading-relaxed">{service.bestFor}</p>
                  </div>
                  {service.duration && (
                    <div>
                      <p className='mb-1 font-bold text-charcoal uppercase text-xs tracking-widest'>Duration:</p>
                      <p className="leading-relaxed">{service.duration}</p>
                    </div>
                  )}
                </div>
                <Link
                  href='/contact'
                  className='group relative py-4 px-10 my-8 bg-watermelon-red text-white font-bold rounded-full w-fit overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-watermelon-red/30'
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
                <div className="absolute inset-0 bg-gray-50 rounded-[3rem] -rotate-3 z-0" />
                <Image
                  src={service.image}
                  height={500}
                  width={500}
                  alt={`services-${index + 1}`}
                  className="relative z-10 rounded-[3rem] shadow-premium object-cover aspect-square"
                />
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Mobile View */}
      <div className='py-10 lg:hidden px-6 flex flex-col gap-y-20 mt-10'>
        {services.map((service, index) => (
          <motion.div
            key={`service-mobile-${index}`}
            className='w-full flex flex-col shadow-premium bg-white rounded-[2.5rem] overflow-hidden'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={upVariant}
          >
            <div className='w-full h-72 relative'>
              <Image
                src={service.image}
                height={400}
                width={400}
                alt={`services-${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full flex flex-col p-8'>
              <h3 className='text-3xl font-serif font-bold text-charcoal leading-tight'>
                {service.title}
              </h3>
              <div
                className='h-1 my-4 w-12 rounded-full opacity-50'
                style={{ background: service.lineColor }}
              ></div>
              <div className="space-y-4 font-sans text-charcoal/70 text-sm">
                <p><span className="font-bold text-charcoal mr-2">Overview:</span>{service.overview}</p>
                <p><span className="font-bold text-charcoal mr-2">Best For:</span>{service.bestFor}</p>
              </div>
              <Link
                href='/contact'
                className='mt-8 py-4 px-8 bg-watermelon-red text-white font-bold rounded-full text-center uppercase tracking-widest text-xs'
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

export default Services
