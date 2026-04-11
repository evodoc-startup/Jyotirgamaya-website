// components/PricingSection.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { GiDiamonds } from 'react-icons/gi'
import gsap from 'gsap'

const plans = [
  {
    name: 'Individual Career Aptitude Package',
    features: [
      '5 Scientific Assessments',
      'Up to 5 Free Counseling Sessions',
      '12 Page Career Report',
      '1:1 Stream / Subject / Career Guidance',
      'Ideal for Classes 8–12 & Individual Students',
      'Free 5 Sessions of Career Counseling'
    ],
    price: '₹ 2999'
  },
  {
    name: 'School Career Assessment Package',
    features: [
      '5 Scientific Assessments',
      '12–Page Career Report',
      'Group Counseling & Stream Selection Support',
      'Career Direction + Skill & Personality Development Plan',
      'Tips For Improvement',
      'Free 5 Sessions of Career Counseling'
    ],
    price: '₹ 1999',
    originalPrice: '₹ 2999'
  },
  {
    name: 'College Career & Developmental Package',
    features: [
      '5 Scientific Assessments',
      '20–25 Page Career Report',
      'Career Direction + Skill & Personality Development Plan',
      'Ideal for Undergraduate & Postgraduate Students'
    ],
    price: '₹ 1999'
  }
]

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}

const getMarginTop = (index: number) => {
  if (index === 0) return '0px'
  if (index === 1) return '40px'
  if (index === 2) return '200px'
  return '0px'
}
export default function PricingSecxtion () {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animate when section enters viewport
  useEffect(() => {
    if (!mounted || !sectionRef.current) return

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
      { threshold: 0.2 } // fire when 20% of section visible
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [mounted])

  return (
    <section ref={sectionRef} className='bg-[#f7eaf6] py-16 sm:py-20'>
      <div className='mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8'>
        <div className='mt-10 flex flex-col md:flex-row gap-20'>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={el => {
                if (el) cardsRef.current[index] = el
              }}
              className='relative flex h-full w-full max-w-xs flex-col rounded-[28px] bg-[#ffd334] px-6 pb-8 pt-10'
              style={{
                marginTop: mounted && !isMobile ? getMarginTop(index) : '0px'
              }}
            >
              <div className='pointer-events-none w-[104%] h-[104%] rounded-[28px] border-2 border-black absolute bottom-0 right-0 flex gap-3'>
                <div className='text-3xl absolute -top-4 left-2 px-2'>
                  <GiDiamonds />
                </div>
              </div>

              <div className='rounded-[22px]'>
                <h3 className='text-xl text-center font-serif leading-snug text-slate-900'>
                  {plan.name}
                </h3>

                <ul className='mt-5 space-y-2 text-sm leading-relaxed text-slate-900'>
                  {plan.features.map(feature => (
                    <li key={feature} className='flex items-start gap-2'>
                      <span className='mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-900' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-3 flex flex-col gap-1 text-left text-slate-900'>
                  {plan.originalPrice && (
                    <span className='text-base font-semibold line-through decoration-2 decoration-red-600'>
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className='text-3xl sm:text-4xl font-extrabold tracking-wide'>
                    {plan.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
