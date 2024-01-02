"use client";

import DivAnim from "../animations/divanim";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <DivAnim>
        <div className="w-full text-left">
          <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
            About me
          </span>
        </div>
        <div className="w-full text-justify mt-4 sm:mt-6">
          <span className="text-lg sm:text-2xl lg:text-4xl md:leading-loose">
            Daffa, currently a third-year Computer Science Undergraduate at the
            University of Indonesia, has developed a strong interest in Software
            Engineering, specifically focusing on Front End Development. Known
            for his passionate and enthusiastic approach to both his studies and
            work, Daffa is committed to continuously expanding his skill set.
            While specializing in Front End Development, he is also actively
            delving into Back End Development to achieve a well-rounded
            proficiency.
          </span>
        </div>
        <div className="w-full mt-4 sm:mt-6">
          <form action="/me">
            <button
              type="submit"
              className="border border-black bg-white hover:bg-[#45b8ac] hover:text-white hover:border-white duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl"
            >
              Get to know me.
            </button>
          </form>
        </div>
      </DivAnim>
    </div>
  );
}
