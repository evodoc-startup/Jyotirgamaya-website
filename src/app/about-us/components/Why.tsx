import React from "react";
import Image from "next/image";

function Why() {
  const circularElements = [
    {
      icon: "/therapist.svg",
      text: "Enchanced Therapists",
      color: "blue",
    },
    {
      icon: "/brain.svg",
      text: "Customized Approach",
      color: "pink",
    },
    {
      icon: "/system.svg",
      text: "Comprehensive Services",
      color: "gold",
    },
    {
      icon: "/access.svg",
      text: "Convenient Access",
      color: "moonstone",
    },
  ];

  return (
    <section className="px-10 md:px-40 py-20">
      <h1 className="text-4xl text-center">Why Choose Us</h1>
      <div
        className="w-full h-fit py-20 flex sm:flex-row flex-col justify-around  
    gap-10 flex-wrap">
        {circularElements.map((item, index) => (
          <div
            key={"circularElements" + index}
            className="flex flex-col items-center justify-center">
            <div
              className={`overflow-visible rounded-full hover:bg-${item.color} border-2 border-${item.color} transition-all duration-200 object-contain ease-in`}>
              <Image
                src={item.icon}
                alt="icon"
                height={100}
                width={100}
                className=" h-32 w-32 p-6 filter hover:invert"
              />
            </div>
            <div
              className={`mt-8 w-fit min-w-56 tracking-wide text-center text-nowrap font-semibold bg-${item.color} px-3 py-2 text-white uppercase`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Why;
