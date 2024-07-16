"use client";

import { main } from "@/data/bio";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center text-white px-2 py-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          About me
        </span>
      </div>
      <div className="w-full text-justify mt-4 sm:mt-6">
        <span className="text-md sm:text-2xl lg:text-4xl md:leading-loose">
          {main}
        </span>
      </div>
      <div className="w-full mt-4 sm:mt-6">
        <form action="/me">
          <button
            type="submit"
            className="border border-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820] duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl"
          >
            Get to know me.
          </button>
        </form>
      </div>
    </div>
  );
}
