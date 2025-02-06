import React from "react";
import Image from "next/image";
import Link from "next/link";

function Story() {
  return (
    <>
      <div className="w-screen h-fit bg-gradient-to-r from-[#FFD60D] to-[#FFB109] flex md:flex-row flex-col xl:px-24 px-10 py-16 md:gap-16 gap-0">
        <div className="xl:w-[40%] md:w-[50%] w-full flex justify-center xl:items-end items-center">
          <div className="bg-[#ffeda6] p-10 fancy-border">
            <Image
              src={"/about-2.jpg"}
              alt="Image"
              height={1000}
              width={1000}
              className="md:w-full w-[300px] rounded-[40px]"
            />
          </div>
        </div>
        <div className="xl:w-[60%] md:w-[50%] w-full md:items-end items-center flex flex-col md:text-justify text-center justify-center">
          <h1 className="text-[3.4rem] mb-5 font-bold text-[#FF373B] tracking-[5px]">
            <span className="text-[#ffeda6]">O</span>ur Goal
          </h1>
          <p className="text-base tracking-wide">
            Our goal is simple yet profound: to enrich parents and the new
            generation with practical solutions that empower them to lead
            better, more fulfilling lives. We are committed to addressing
            emotional, behavioral, and developmental challenges while ensuring
            that our services are accessible to everyone, regardless of their
            economic background. At Jyotirgamya we believe that psychological
            well-being is a fundamental right, not a luxury. With this in mind,
            our motto has always been to provide high-quality services at a
            feasible and affordable cost. This ensures that families from all
            economic backgrounds can access the care and support they need
            without financial stress. From career counseling and child therapy
            to autism intervention programs and parental workshops, our range of
            services is tailored to meet the diverse needs of families. Since
            2018, we have positively impacted countless lives by offering
            compassionate, evidence-based care that empowers children and their
            families to thrive.
          </p>
        </div>
      </div>
      <div className="w-full h-fit lg:px-44 sm:px-24 px-10 bg-[#5EC3CE] md:flex py-10 gap-10 relative overflow-hidden justify-between space-y-7">
        <div className="md::w-[70%] w-full flex items-center tracking-wide leading-relaxed z-20">
          <p className="text-white text-lg md:text-left text-center w-full">
            <span className="text-black font-bold">Join us</span> in building a
            future where emotional well-being is accessible to all, and every
            child is given the opportunity to succeed.
          </p>
        </div>
        <div className="md::w-[30%] w-full flex items-center justify-center">
          <Link
            href={"/services"}
            className="px-5 bg-white py-2 rounded-md shadow-xl text-nowrap">
            Explore Now
          </Link>
        </div>
        <div className="h-full rotate-45 aspect-square md:bg-[#6DF0FF] absolute top-1/2 left-[-80px] -z-0"></div>
      </div>
    </>
  );
}

export default Story;
