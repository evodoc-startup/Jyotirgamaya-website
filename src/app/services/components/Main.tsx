import React from "react";

function Main() {
  return (
    <main
      className={`w-full md:h-[85vh] h-fit relative select-none bg-[url("/services.png")] bg-fixed bg-cover bg-no-repeat`}>
      <div className="h-full w-full bg-[#3DBDFD] md:py-0 sm:py-10 py-20 bg-opacity-50 flex flex-col items-center justify-center lg:px-44 md:px-20 px-10">
        <div className="font-sans text-center">
          <p className="xl:text-5xl sm:text-4xl text-3xl xl:leading-relaxed leading-normal text-white xl:tracking-wider tracking-wide font-bold">
            "Empowering Minds: Your Journey to Emotional Well-Being Starts
            Here!"
          </p>
          <div className="bg-[#FFB338] font-semibold md:mt-10 mt-5 sm:p-10 sm:block hidden leading-loose tracking-wider text-white">
            <div> 
                <p>Discover comprehensive psychological services designed to support your mental health and personal growth. Whether you're seeking individual therapy, group counseling, or family support, we offer tailored solutions to help you thrive. With experienced professionals, evidence-based therapies, and a compassionate approach, we're here to guide you toward a better tomorrow.
                </p>
            </div>
            <div>
                <p className="text-black md:text-lg text-base mt-8">Take the first step to wellness today—your brighter future awaits!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
