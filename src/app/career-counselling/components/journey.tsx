// components/JourneySection.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const items = [
  {
    image: '/1.png',
    imageAlt: 'Students studying in library',
    tag: 'FOR CLASS 8–10 (STREAM DISCOVERY)',
    title: 'Stream & Subject Selection',
    description:
      'Help students choose the right stream early through scientific assessment of their interests, aptitude, and strengths.'
  },
  {
    image: '/2.png',
    imageAlt: 'Students discussing career options',
    tag: 'FOR CLASS 11–12 (CAREER PLANNING)',
    title: 'Career Direction',
    description:
      'Guide students toward the best-fit career and map ideal courses, colleges, and subjects based on a 5-dimension aptitude assessment.'
  },
  {
    image: '/3.png',
    imageAlt: 'College students sitting together',
    tag: 'FOR COLLEGE STUDENTS & GRADUATES',
    title: 'Career Development',
    description:
      'Provide a complete profile analysis to help students identify their ideal career path, refine goals, and build a strategic future plan.'
  }
]

export default function JourneySection () {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.from(cardsRef.current, {
              opacity: 0,
              y: 40,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.15
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='bg-[#f1E3F0] py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-serif text-[#0C497A]'>
          The Journey From Confusion to Clarity
        </h2>

        <div className='mt-10 grid gap-10 md:grid-cols-3'>
          {items.map((item, index) => (
            <div
              key={item.title}
              ref={el => {
                if (el) cardsRef.current[index] = el
              }}
              className='flex flex-col items-center text-center'
            >
              <div className='w-full overflow-hidden rounded-md bg-slate-200'>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={400}
                  height={320}
                  className='h-96 w-full object-cover'
                />
              </div>

              <p className='mt-4 text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase'>
                {item.tag}
              </p>

              <h3 className='mt-3 text-lg font-semibold font-serif text-[#0C497A]'>
                {item.title}
              </h3>

              <p className='mt-2 max-w-xs text-sm leading-relaxed text-slate-700'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
