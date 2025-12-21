// components/PhotoSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  '/slidr/1.jpg',
  '/slidr/2.jpg',
  '/slidr/3.jpg',
  '/slidr/4.jpg',
  '/slidr/5.jpg',
  '/slidr/6.jpg',
  '/slidr/7.jpg',
  '/slidr/8.jpg',
  '/slidr/9.jpg',
  '/slidr/10.jpg',
  '/slidr/11.jpg',
  '/slidr/12.jpg',
  '/slidr/13.jpg',
  '/slidr/14.jpg'
] // in /public

export default function PhotoSlider () {
  return (
    <section className='bg-[#f1E3F0] py-10'>
      <div className='w-full max-w-3xl mx-auto'>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='rounded-xl overflow-hidden'
        >
          {images.map(src => (
            <SwiperSlide key={src}>
              <div className='relative h-64 sm:h-96 '>
                <Image
                  src={src}
                  alt='Slide'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
