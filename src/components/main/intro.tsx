"use client";

import MainDivAnim from "../animations/maindivanim";

export default function Intro() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col items-center justify-center">
      <MainDivAnim>
        <div className="w-full flex flex-col justify-center text-3xl sm:text-5xl lg:text-7xl text-left gap-y-1 sm:gap-y-3 px-2">
          <span className="text-gray-300">University of Indonesia</span>
          <span className="font-semibold">Daffa M. Faizan</span>
          <span className="text-gray-300">Full-stack Developer</span>
        </div>
      </MainDivAnim>
    </div>
  );
}
