// app/page.tsx
'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero () {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power3.out' }
      })

      tl.from('.hero-title', { y: 40, opacity: 0 })
        .from('.hero-sub', { y: 30, opacity: 0 }, '-=0.4')
        // .from('.hero-btn', { y: 10, opacity: 0 }, '=0.4')
        .from(
          '.hero-illus',
          {
            opacity: 0,
            y: 40,
            stagger: 0.15
          },
          '-=0.3'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={sectionRef} className='relative overflow-hidden bg-white pt-32 pb-20'>
        {/* Illustrations */}
        <Image
          src='/illustrations/firefighter.png'
          alt='Firefighter'
          width={200}
          height={260}
          className='hero-illus hidden xl:block absolute left-4 top-40 z-0 opacity-80'
        />
        <Image
          src='/illustrations/architect.png'
          alt='Architect'
          width={250}
          height={260}
          className='hero-illus hidden xl:block absolute left-20 bottom-10 z-0 opacity-80'
        />
        <Image
          src='/illustrations/singer.png'
          alt='Singer'
          width={200}
          height={260}
          className='hero-illus hidden xl:block absolute right-8 top-32 z-0 opacity-80'
        />
        <Image
          src='/illustrations/doctor.png'
          alt='Doctor'
          width={250}
          height={260}
          className='hero-illus hidden xl:block absolute right-24 bottom-12 z-0 opacity-80'
        />

        {/* Center content */}
        <div className='relative mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 text-center z-10'>
          <h1 className='hero-title text-4xl sm:text-5xl md:text-6xl font-serif text-charcoal leading-[1.1] tracking-tight'>
            Scientifically. Personally.<br/>
            Accurately.
          </h1>

          <div className='mt-8 h-1 w-24 bg-watermelon-green/30 rounded-full' />

          <p className='hero-sub mt-8 max-w-2xl text-xl md:text-2xl font-serif leading-relaxed text-charcoal/70'>
            A 360° Career Aptitude Assessment designed to map your strengths,
            personality, and life goals into one clear career direction.
          </p>

          <button className='hero-btn mt-12 px-10 py-4 bg-watermelon-green text-white font-bold rounded-full shadow-premium hover:shadow-watermelon-green/30 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wider text-sm'>
            Know More
          </button>

          {/* Down arrow */}
          <div className='mt-12 flex flex-col items-center opacity-40'>
            <div className='h-12 w-px bg-charcoal' />
            <svg
              className='mt-2 h-8 w-8 text-charcoal'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M6 9l6 6 6-6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}
