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
      <div className='w-full px-10 py-10 bg-moonstone text-center'>
        <h1 className='text-5xl font-bold tracking-wide text-white'>
          Services
        </h1>
        <p className='mt-5 text-white tracking-wider font-semibold text-lg'>
          Discover comprehensive psychological services designed to support your
          mental health and personal growth. Whether you're seeking individual
          therapy, group counseling, or family support, we offer tailored
          solutions to help you thrive. With experienced professionals,
          evidence-based therapies, and a compassionate approach, we're here to
          guide you toward a better tomorrow.
        </p>
      </div>

      {/* Desktop View */}
      <div className='py-10 xl:px-52 lg:px-32 hidden lg:flex flex-col gap-y-24 mt-20'>
        {services.map((service, index) => {
          // Alternate row layout based on index
          const isReversed = index % 2 !== 0
          return (
            <div
              key={`service-${index}`}
              className={`w-full flex justify-around gap-x-16 ${
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
                  {service.title}
                </h3>
                <div
                  className='h-[1px] my-3 w-full'
                  style={{ background: service.lineColor }}
                ></div>
                <p className='my-4 font-bold'>Overview:</p>
                <p>{service.overview}</p>
                <p className='my-4 font-bold'>Best For :</p>
                <p>{service.bestFor}</p>
                {service.duration && (
                  <>
                    <p className='my-4 font-bold'>Duration:</p>
                    <p>{service.duration}</p>
                  </>
                )}
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
                  src={service.image}
                  height={400}
                  width={400}
                  alt={`services-${index + 1}`}
                />
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Mobile View */}
      <div className='py-10 lg:hidden px-10 flex flex-col gap-y-24 mt-20'>
        {services.map((service, index) => (
          <motion.div
            key={`service-mobile-${index}`}
            className='w-full flex flex-col gap-y-6 shadow-xl hover:shadow-2xl rounded-lg transition-all duration-300 justify-center items-center overflow-hidden'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={upVariant}
          >
            <div className='w-full flex items-center'>
              <Image
                src={service.image}
                height={400}
                width={400}
                alt={`services-${index + 1}`}
                className='w-full h-96 object-cover'
              />
            </div>
            <div className='w-full flex flex-col md:p-10 p-7'>
              <h3 className='text-3xl tracking-widest leading-normal'>
                {service.title}
              </h3>
              <div
                className='h-[1px] my-3 w-full'
                style={{ background: service.lineColor }}
              ></div>
              <p className='my-4 font-bold'>Overview:</p>
              <p>{service.overview}</p>
              <p className='my-4 font-bold'>Best For :</p>
              <p>{service.bestFor}</p>
              {service.duration && (
                <>
                  <p className='my-4 font-bold'>Duration:</p>
                  <p>{service.duration}</p>
                </>
              )}
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

export default Services
