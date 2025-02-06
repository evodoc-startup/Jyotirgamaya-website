import React from "react";
import Image from "next/image";

function How() {
  return (
    <section className="flex xl:px-16 px-8 py-10 flex-col w-screen items-center">
      <div className="text-3xl font-semibold tracking-wider">How It Works?</div>
      <div className="h-[1px] bg-black sm:w-[10vw] w-full mt-5"></div>
      <div className="grid lg:grid-cols-9 grid-cols-1 lg:grid-rows-1 sm:gap-y-5 gap-y-2  w-full my-5 text-sm text-center break-words lg:p-0 sm:px-44 px-5">
        <div className="w-full h-fit p-5">
          <div className="w-full flex items-center lg:flex-col flex-row">
            <div className="h-auto lg:w-full w-56 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-blue hover:bg-blue hover:invert transition duration-300"
            >
              <Image
                src={"/goal.svg"}
                height={400}
                width={400}
                alt={"Icon"}
                className="h-full w-full"
              />
            </div>
            <div className="w-full text-center mt-2">
              <p className="lg:text-base sm:text-2xl ml-5 text-lg">Setting Your Goals</p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden w-full px-4 h-full items-center">
          <div className="h-[1px] w-full bg-black"></div>
        </div>
        <div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center">
          <div className="sm:ml-20 ml-16 w-[1px] h-full bg-black"></div>
        </div>
        <div className="w-full h-fit p-5">
          <div className="w-full flex items-center lg:flex-col flex-row">
            <div className="h-auto flex justify-center items-center lg:w-full w-56 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-pink hover:bg-pink hover:invert transition duration-300"
            >
              <Image
                src={"/search.svg"}
                height={400}
                width={400}
                alt={"Icon"}
                className="h-[80%] w-full"
              />
            </div>
            <div className="w-full text-center mt-2">
              <p className="lg:text-base sm:text-2xl ml-5 text-lg">Exploring Your Potential</p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden w-full px-4 h-full items-center">
          <div className="h-[1px] w-full bg-black"></div>
        </div>
        <div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center">
          <div className="sm:ml-20 ml-16 w-[1px] h-full bg-black"></div>
        </div>
        <div className="w-full h-fit p-5">
          <div className="w-full flex items-center lg:flex-col flex-row">
            <div className="h-auto flex justify-center items-center lg:w-full w-56 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-green-600 hover:bg-green-600 hover:invert transition duration-300"
            >
              <Image
                src={"/understand.svg"}
                height={400}
                width={400}
                alt={"Icon"}
                className="h-[80%] w-full"
              />
            </div>
            <div className="w-full text-center mt-2">
              <p className="lg:text-base sm:text-2xl ml-5 text-lg">Understanding Your Profile</p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden w-full px-4 h-full items-center">
          <div className="h-[1px] w-full bg-black"></div>
        </div>
        <div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center">
          <div className="sm:ml-20 ml-16 w-[1px] h-full bg-black"></div>
        </div>
        <div className="w-full h-fit p-5">
          <div className="w-full flex items-center lg:flex-col flex-row">
            <div className="h-auto flex justify-center items-center lg:w-full w-56 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-moonstone hover:bg-moonstone hover:invert transition duration-300"
            >
              <Image
                src={"/find.svg"}
                height={400}
                width={400}
                alt={"Icon"}
                className="h-[80%] w-full"
              />
            </div>
            <div className="w-full text-center mt-2">
              <p className="lg:text-base sm:text-2xl ml-5 text-lg">Discovering Your Options</p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden w-full px-4 h-full items-center">
          <div className="h-[1px] w-full bg-black"></div>
        </div>
        <div className="lg:hidden flex w-full px-4 sm:h-64 h-44 items-center">
          <div className="sm:ml-20 ml-16 w-[1px] h-full bg-black"></div>
        </div>
        <div className="w-full h-fit p-5">
          <div className="w-full flex items-center lg:flex-col flex-row">
            <div className="h-auto flex justify-center items-center lg:w-full w-56 aspect-square rounded-full border-2 xl:p-5 p-3 object-contain border-gold hover:bg-gold hover:invert transition duration-300"
            >
              <Image
                src={"/success.svg"}
                height={400}
                width={400}
                alt={"Icon"}
                className="h-[80%] w-full"
              />
            </div>
            <div className="w-full text-center mt-2">
              <p className="lg:text-base sm:text-2xl ml-5">Your Path to Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
