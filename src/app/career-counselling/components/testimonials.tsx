// components/TestimonialsSection.tsx
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export default function TestimonialsSection () {
  const testimonials = [
    {
      text: `I was extremely confused about streams and career options. After the counselling session, everything felt so clear and sorted. The report and guidance gave me confidence for the first time. I genuinely felt relieved.`,
      name: 'Natasha Lamba'
    },
    {
      text: `Before this, every career option felt confusing and risky. The report was so accurate that I literally saw myself in it. During counselling, my doubts were answered so simply that all the overthinking I was doing just disappeared. I walked out feeling sorted, relieved, and motivated. I finally know what I truly want to do, and that clarity is priceless.`,
      name: 'Eesha Sharma'
    },
    {
      text: `As parents, we were constantly worried whether we were guiding our child in the right direction. After the assessment, the detailed report and counselling gave us unbelievable clarity. We finally understood our child’s real potential and what will genuinely help him grow. The relief we felt after the session was something we didn’t experience in months. This guidance has brought peace to our home.`,
      name: 'Parents of Lalita Gupta'
    }
  ]

  return (
    <section className='bg-[#f5e9f3] py-16 sm:py-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-left text-3xl sm:text-4xl font-serif text-[#5b305f]'>
          Satisfied Clients
        </h2>

        <div className='mt-12 grid gap-12 md:grid-cols-3'>
          {testimonials.map(item => (
            <div key={item.name} className='flex'>
              {/* left vertical line with dots */}
              <div className='relative mr-6 flex flex-col items-center'>
                <span className='h-3 w-3 rounded-full bg-[#5b305f]' />
                <span className='mt-1 h-full w-px bg-[#5b305f]' />
                <span className='mt-1 h-3 w-3 rounded-full bg-[#5b305f]' />
              </div>

              {/* quote content */}
              <div className='flex-1'>
                <div className='text-6xl text-[#5b305f] leading-none mb-4'>
                  <BiSolidQuoteAltLeft />
                </div>
                <p className='text-sm leading-relaxed text-[#3d273c]'>
                  {item.text}
                </p>
                <p className='mt-6 text-sm font-serif text-[#5b305f]'>
                  — {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
