import React from "react";
import Image from "next/image";

function Main() {
  return (
    <section className="h-fit my-20 w-screen lg:px-28 sm:px-16 px-7 flex md:flex-row flex-col-reverse items-center gap-y-10">
      <div className="lg:w-[70%] md:w-[60%] w-full flex flex-col justify-center md:text-left text-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-[#FE3E3E]">About Us</h1>
        <p className="sm:my-6 my-4 text-lg tracking-wider">Hello there,</p>
        <p className="lg:mr-36 md:mr-20 mr-0 sm:text-base text-sm leading-loose tracking-wider">
          The journey of Jyotirgamya began in 2018, founded by Dr. Deepak Kumar
          and Mrs. Mahima Sharma, who recognized the pressing need for career
          counseling and behavioral guidance among the new generation. With a
          shared passion for empowering individuals, they established this
          organization to support children across all age groups and to equip
          parents with the knowledge and tools needed to foster healthier and
          happier families.
        </p>
      </div>
      <div className=" lg:w-[30%] sm:w-[40%] w-full justify-center h-full flex items-center">
        <Image src={"/about.png"} height={1000} width={1000} alt="About" className="h-[330px] w-[300px]"/>
      </div>
    </section>
  );
}

export default Main;
