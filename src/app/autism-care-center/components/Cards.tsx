'use client'

import Image from 'next/image'
import { useState } from 'react'

const programs = [
  {
    title: 'Individual Sessions',
    description:
      'Customized one-on-one therapy to support the unique developmental needs of autistic students.',
    image: '/a1.jpg'
  },
  {
    title: 'Group Sessions',
    description:
      'Encouraging social interaction and collaborative learning in a nurturing group environment.',
    image: '/a2.jpg'
  },
  {
    title: 'Full Day Programs',
    description:
      'Comprehensive, immersive programs designed to build essential skills and confidence.',
    image: '/a3.jpg'
  },
  {
    title: 'Early Intervention',
    description:
      'Specialized approaches to foster growth and development at the earliest stages.',
    image: '/a4.jpg'
  },
  {
    title: 'Academic Program',
    description:
      'Tailored educational strategies to enhance learning and empower autistic students to thrive.',
    image: '/a5.jpg'
  }
]

export default function ProgramCarousel () {
  const [activeIndex, setActiveIndex] = useState(2)

  const prevSlide = () => {
    setActiveIndex(prev => (prev === 0 ? programs.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveIndex(prev => (prev === programs.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='w-full py-20 relative flex flex-col items-center bg-watermelon-green/10 mt-10 mb-20 rounded-[3rem]'>
      {/* Desktop Netflix-Style Carousel */}
      <div className='hidden md:block relative w-full h-[350px] items-center justify-center'>
        {programs.map((program, index) => {
          const isActive = activeIndex === index
          const offset = (index - activeIndex) * 120
          const rotate = isActive
            ? 'rotate-0'
            : index > activeIndex
            ? 'rotate-3'
            : '-rotate-3'

          return (
            <div
              key={index}
              className={`absolute w-[400px] transition-all duration-700 ease-in-out bg-white shadow-premium border border-gray-100 rounded-[2rem] overflow-hidden p-6 ${
                isActive ? 'z-20' : 'scale-100 z-10 opacity-40'
              } ${rotate}`}
              style={{
                left: '50%',
                transform: `translateX(-50%) translateX(${offset}px) scale(${
                  isActive ? 1.25 : 1
                })`,
              }}
            >
              <div className='w-full h-56 relative rounded-2xl overflow-hidden shadow-inner'>
                <Image
                  src={program.image}
                  alt={program.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-2xl'
                />
              </div>
              <div className='w-full pt-6 text-center'>
                <h3 className='text-2xl font-serif font-bold text-charcoal tracking-tight'>{program.title}</h3>
                <p className='text-charcoal/70 mt-2 font-sans text-sm leading-relaxed'>{program.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile Normal Slider Carousel */}
      <div className='block md:hidden w-full overflow-x-auto scrollbar-hide'>
        <div className='flex gap-6 px-8 w-max'>
          {programs.map((program, index) => (
            <div
              key={index}
              className='w-[280px] bg-white shadow-premium border border-gray-100 rounded-[2rem] p-4 flex-shrink-0'
            >
              <div className='w-full h-44 relative rounded-xl overflow-hidden'>
                <Image
                  src={program.image}
                  alt={program.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-xl'
                />
              </div>
              <div className='pt-4 text-center'>
                <h3 className='text-xl font-serif font-bold text-charcoal'>
                  {program.title}
                </h3>
                <p className='text-charcoal/70 text-sm font-sans mt-2'>{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons for Desktop */}
      <button
        onClick={prevSlide}
        className='hidden md:block absolute left-5 top-1/2
        transform -translate-y-1/2 bg-white text-black rounded-full z-30 hover:scale-125 transition h-10 w-10'
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className='hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full z-30 hover:scale-125 transition h-10 w-10'
      >
        &#10095;
      </button>
    </div>
  )
}
