"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const testimonials = [
    {
      text: "We are incredibly grateful for the support and guidance provided by Jyotirgamya. Our daughter was struggling to decide on her career path, but with their counseling sessions, she gained confidence and clarity about her future. She now has a plan that she's excited about, and as parents, we couldn’t be happier to see her so motivated.",
      writer: "Mother of Vaishali",
      gender: "F",
    },
    {
      text: "As parents of a child on the autism spectrum, we faced many challenges. The autism center here has been a blessing for our family. The therapists are compassionate and knowledgeable, and they truly understand our child's needs. We've seen wonderful progress, and it’s heartwarming to see our child becoming more confident and communicative.",
      writer: "Father and Mother of Vihan",
      gender: "C",
    },
    {
      text: "I have recently completed an internship through the center, and it was such a transformative experience for him. He gained practical skills, self-assurance, and a sense of direction for his career.",
      writer: "Nandini",
      gender: "F",
    },
    {
      text: "Parenting can be overwhelming at times, and we reached out to the parental counseling services for guidance. The counselors here helped us with strategies for better communication and understanding with our kids. We feel more connected and patient as a family, and the atmosphere at home has truly improved.",
      writer: "Parents of Anubha",
      gender: "C",
    },
    {
      text: "After attending child counseling sessions, our son's behavior and attitude towards school have improved dramatically. The counselor has a gentle and effective approach that our son really responded to. He’s happier, more focused, and even his teachers have noticed the change. We’re so grateful for the support.",
      writer: "Mother of Aryan",
      gender: "F",
    },
    {
      text: "We were unsure about how to support our daughter, who was going through a tough time in her teenage years. The counseling sessions here helped her open up and gave her tools to manage her emotions. We feel more connected and understanding as parents, and we’ve seen such a positive change in her.",
      writer: "Parents of Mansi",
      gender: "C",
    },
    {
      text: "As parents of a hyperactive child on the autism spectrum, we had felt lost and exhausted trying to find the right help. The team here has been incredible in understanding his unique needs and energy levels. They provided us with practical strategies and therapies tailored specifically for him. We've seen real progress in his focus and behavior, and he's happier and more engaged than ever. We finally feel hopeful and supported in this journey.",
      writer: "Parents of a Hyperactive Child",
      gender: "C",
    },
  ];

  return (
    <div className="flex gap-4 md:gap-8 items-center max-w-7xl mx-auto px-4 md:px-0">
      <button 
        className="swiper-button-prev-custom hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-full border border-gray-200 bg-white shadow-soft transition-all duration-300 hover:bg-charcoal hover:text-white hover:scale-110 active:scale-95 z-20" 
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="w-full !py-20"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide className="!h-auto" key={"testimonial" + index}>
            <div className="relative h-full flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] frosted shadow-premium border border-white/40 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group bg-white/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full p-1 bg-white shadow-lg overflow-hidden border-2 border-mint">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                   {item.gender === "M" ? (
                      <Image src={"/man.png"} alt="avatar" fill className="object-cover p-1" />
                    ) : item.gender === "F" ? (
                      <Image src={"/woman.png"} alt="avatar" fill className="object-cover p-1" />
                    ) : (
                      <Image src={"/couple.png"} alt="avatar" fill className="object-cover p-1" />
                    )}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col h-full">
                <div className="flex-grow">
                  <span className="text-4xl text-mint/40 font-serif leading-none block mb-2 transition-colors duration-500 group-hover:text-mint/60">"</span>
                  <p className="text-gray-700 text-sm md:text-base font-light italic leading-relaxed px-2 line-clamp-6">
                    {item.text}
                  </p>
                  <span className="text-4xl text-mint/40 font-serif leading-none block mt-2 text-right transition-colors duration-500 group-hover:text-mint/60">"</span>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100/50">
                   <p className="text-charcoal font-serif font-bold tracking-tight text-lg">
                     {item.writer}
                   </p>
                   <p className="text-indigo/60 text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold">Verified Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        className="swiper-button-next-custom hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-full border border-gray-200 bg-white shadow-soft transition-all duration-300 hover:bg-charcoal hover:text-white hover:scale-110 active:scale-95 z-20" 
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 gap-4 z-20">
         <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-soft border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all">
            <FaChevronLeft />
         </button>
         <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-soft border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all">
            <FaChevronRight />
         </button>
      </div>
    </div>
  );
}
