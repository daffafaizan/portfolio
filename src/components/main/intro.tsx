"use client";

import AnimatedDiv from "../animations/animateddiv";

export default function Intro() {
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col justify-center text-2xl sm:text-5xl lg:text-7xl text-left gap-y-1 sm:gap-y-3 px-2 text-white">
        <span className="">University of Indonesia</span>
        <span className="font-semibold">Daffa M. Faizan</span>
        <span className="">Full-stack Developer</span>
      </div>
    </AnimatedDiv>
  );
}
