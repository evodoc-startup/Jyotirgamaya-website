import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Story () {
  return (
    <>
      <section className='w-full h-fit bg-[#fafafa] relative overflow-hidden py-24 px-10 xl:px-32'>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col gap-20 items-center">
          <div className='xl:w-[45%] md:w-[50%] w-full relative'>
            <div className='relative z-10 bg-white p-4 rounded-[3rem] shadow-premium transform -rotate-2'>
              <Image
                src='/about-2.jpg'
                alt='Our Team'
                height={600}
                width={600}
                className='w-full h-auto aspect-square object-cover rounded-[2.5rem]'
              />
            </div>
            {/* Decorative shapes */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-watermelon-red/10 rounded-full blur-2xl -z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-watermelon-green/10 rounded-full blur-2xl -z-0" />
          </div>

          <div className='xl:w-[55%] md:w-[50%] w-full flex flex-col justify-center'>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='text-5xl md:text-6xl font-serif font-bold text-charcoal tracking-tight mb-8'
            >
              Our <span className="text-watermelon-red">Goal</span>
            </motion.h2>
            <div className="h-1.5 w-16 bg-watermelon-green mb-10 rounded-full" />
            
            <div className="space-y-6 text-lg text-charcoal/70 font-sans leading-relaxed text-justify">
              <p>
                Our goal is simple yet profound: to enrich parents and the new
                generation with practical solutions that empower them to lead
                better, more fulfilling lives. We are committed to addressing
                emotional, behavioral, and developmental challenges while ensuring
                that our services are accessible to everyone, regardless of their
                economic background.
              </p>
              <p>
                At <span className="text-charcoal font-bold">Jyotirgamya</span> we believe that psychological
                well-being is a fundamental right, not a luxury. With this in mind,
                our motto has always been to provide high-quality services at a
                feasible and affordable cost. 
              </p>
              <p>
                Since 2018, we have positively impacted countless lives by offering
                compassionate, evidence-based care that empowers children and their
                families to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full h-fit lg:px-44 px-10 bg-charcoal py-20 flex md:flex-row flex-col items-center justify-between gap-10 relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-watermelon-red rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-watermelon-green rounded-full blur-[100px]" />
        </div>

        <div className='md:w-[70%] w-full relative z-10'>
          <p className='text-white/80 text-2xl md:text-3xl font-serif leading-tight md:text-left text-center'>
            <span className='text-white font-bold italic'>Join us</span> in building a
            future where emotional well-being is accessible to all.
          </p>
        </div>

        <div className='md:w-[30%] w-full flex items-center justify-center relative z-10'>
          <Link
            href='/contact'
            className='group relative py-5 px-12 bg-watermelon-red text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-watermelon-red/30 uppercase tracking-widest text-xs'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}

export default Story
