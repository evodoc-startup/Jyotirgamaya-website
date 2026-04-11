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
      <section ref={sectionRef} className='relative overflow-hidden bg-white'>
        {/* Illustrations */}
        <Image
          src='/illustrations/firefighter.png'
          alt='Firefighter'
          width={200}
          height={260}
          className='hero-illus hidden md:block absolute left-2 top-6'
        />
        <Image
          src='/illustrations/architect.png'
          alt='Architect'
          width={250}
          height={260}
          className='hero-illus hidden md:block absolute left-20 bottom-8'
        />
        <Image
          src='/illustrations/singer.png'
          alt='Singer'
          width={200}
          height={260}
          className='hero-illus hidden md:block absolute right-6 top-4'
        />
        <Image
          src='/illustrations/doctor.png'
          alt='Doctor'
          width={250}
          height={260}
          className='hero-illus hidden md:block absolute right-24 bottom-10'
        />

        {/* Center content */}
        <div className='relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center'>
          <h1 className='hero-title text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-serif md:leading-loose text-slate-900'>
            Discover Your True Career Path—
            <br className='hidden md:block' />
            Scientifically. Personally. <br className='hidden md:block' />
            Accurately.
          </h1>

          <div className='mt-4 h-px w-24 bg-slate-400' />

          <p className='hero-sub mt-4 max-w-2xl sm:text-2xl font-serif tracking-wide leading-relaxed text-slate-700'>
            A 360° Career Aptitude Assessment designed to map your strengths,
            personality, and life goals into one clear career direction.
          </p>

          <button className='hero-btn mt-8 rounded-md bg-teal-400 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-teal-500'>
            KNOW MORE
          </button>

          {/* Down arrow */}
          <div className='mt-4 flex flex-col items-center'>
            <div className='h-10 w-px bg-slate-300' />
            <svg
              className='mt-2 h-10 w-10 text-slate-700'
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
