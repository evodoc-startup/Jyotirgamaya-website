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
    <div className='w-full py-10 relative flex flex-col items-center bg-moonstone mt-10 mb-20'>
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
              className={`absolute w-[400px] transition-all duration-700 ease-in-out bg-pink rounded-xl overflow-x-hidden p-5 text-white ${
                isActive ? 'z-20' : 'scale-100 z-10 opacity-80'
              } ${rotate}`}
              style={{
                left: '50%',
                transform: `translateX(-50%) translateX(${offset}px) scale(${
                  isActive ? 1.32 : 1
                })`,
                transition:
                  'transform 0.6s ease-in-out, opacity 0.6s ease-in-out'
              }}
            >
              <div className='w-full h-56 relative'>
                <Image
                  src={program.image}
                  alt={program.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-t-xl'
                />
              </div>
              <div className='w-full p-5 text-center'>
                <h3 className='text-2xl font-bold'>{program.title}</h3>
                <p className='text-gray-300 mt-2'>{program.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile Normal Slider Carousel */}
      <div className='block md:hidden w-full overflow-x-auto scrollbar-hide'>
        <div className='flex gap-4 px-5 w-max'>
          {programs.map((program, index) => (
            <div
              key={index}
              className='w-[80%] max-w-[250px] bg-pink shadow-lg rounded-lg p-3 flex-shrink-0'
            >
              <div className='w-full h-40 relative'>
                <Image
                  src={program.image}
                  alt={program.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
              <div className='p-3 text-center'>
                <h3 className='text-lg font-bold text-white'>
                  {program.title}
                </h3>
                <p className='text-gray-300 text-sm'>{program.description}</p>
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
