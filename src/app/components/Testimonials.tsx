import React from "react";
import Slider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="py-5 w-screen relative top-[-30px] overflow-hidden">
      <div className="flex items-center w-full font-sans font-bold flex-col px-10">
        <h1 className="text-center sm:text-[2.8rem] text-4xl leading-[1.2] text-[#424949]">
          <span className="uppercase text-[#f1c40f] tracking-wider">
            Testimonial
          </span>{" "}
          <br />
          of Parents
        </h1>
        <div className="h-[2px] bg-[#C7C3C3] sm:w-[35vw] w-full mt-5"></div>
      </div>
      <div className="md:px-12 sm:px-8 px-2 mt-14 w-full overflow-visible">

        <Slider />
      </div>
    </section>
  );
}

export default Testimonials;
