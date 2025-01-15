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
    <div className="flex gap-5 overflow-x-clip items-center">
      <button className=" h-fit" id="prevBtn">
        <FaChevronLeft className="bg-[#99D4FF] sm:text-5xl text-3xl rounded-full p-2" />
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          enabled: true,
          nextEl: "#nextBtn",
          prevEl: "#prevBtn",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide for screens <= 640px
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1, // 1 slide for screens >= 640px
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2, // 1 slide for screens >= 640px
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3, // 3 slides for screens >= 1024px
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="w-full">
        {testimonials.map((item, index) => (
          <SwiperSlide className="" key={"testimonial" + index} style={{height: "100%"}}>
            <div className="relative flex flex-col items-center -z-10 text-center">
              <div className="h-20 w-20 rounded-full p-[0.3rem] bg-white top-0  z-10">
                {item.gender === "M" ? (
                  <Image
                    src={"/man.png"}
                    alt="icon"
                    width={500}
                    height={500}
                    className=""
                  />
                ) : item.gender === "F" ? (
                  <Image
                    src={"/woman.png"}
                    alt="icon"
                    width={500}
                    height={500}
                    className=""
                  />
                ) : (
                  <Image
                    src={"/couple.png"}
                    alt="icon"
                    width={500}
                    height={500}
                    className=""
                  />
                )}
              </div>
              <div className="mt-5 bg-[#E6E3E3] p-10 -translate-y-16">
                <p className="text-xs font-sans tracking-widest leading-relaxed relative mt-6">
                  <span className="text-5xl text-gold absolute -top-5 -left-5 sm:inline hidden">
                    "
                  </span>
                  <span className="sm:h-fit max-h-[200px] overflow-hidden block">{item.text}</span>
                  <span className="text-5xl text-gold absolute -bottom-8 right-0 ml-1 sm:block hidden">
                    "
                  </span>
                  <span className="sm:hidden inline">......</span>
                </p>
                <p className="mt-5 text-lg font-bold tracking-wider text-zinc-800">
                  - {item.writer} -{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className=" h-fit rounded-full" id="nextBtn">
        <FaChevronRight className="bg-[#99D4FF] sm:text-5xl text-3xl rounded-full p-2" />
      </button>
    </div>
  );
}
