"use client";

import Image from "next/image";
import profile from "../../../public/new_pp_large.jpg";
import AnimatedDiv from "../animations/animateddiv";

export default function AboutMe() {
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col lg:flex-row justify-stretch items-stretch mt-16 px-2 pb-4 lg:mt-0 lg:pt-4 gap-4 lg:gap-6">
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-center">
        <Image
          className="aspect-square object-cover rounded-full h-[200px] w-[200px] sm:h-60 sm:w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
          src={profile}
          alt="profile"
          quality={100}
          priority={true}
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col justify-center items-center text-justify px-4">
        <span className="text-xl sm:text-3xl lg:text-5xl font-semibold">
          Who is Daffa?
        </span>
        <span className="mt-4 sm:mt-6 text-md sm:text-lg">
          Daffa, a third-year Computer Science Undergraduate at the University
          of Indonesia, is a dedicated Full Stack Developer with a strong
          background in Software Engineering. Recognized for his passionate and
          enthusiastic approach to both studies and work, Daffa has successfully
          broadened his skill set. Specializing in both Front End and Back End
          Development, he excels in creating comprehensive solutions that
          leverage his well-rounded proficiency in software development.
        </span>
        <span className="mt-4 sm:mt-6 text-md sm:text-lg">
          Proficient in programming languages such as Java, Python, Go,
          JavaScript, and TypeScript, Daffa showcases versatility in various
          frameworks, including React, Next, Gin, Express, Spring Boot, and
          Django. Driven by a hunger for knowledge, he is determined to
          contribute significantly to the dynamic field of Computer Science.
          Daffa's combination of curiosity and dedication positions him on a
          compelling journey towards becoming a skilled and innovative Software
          Engineer.
        </span>
      </div>
    </AnimatedDiv>
  );
}
