"use client";

import Image from "next/image";
import profile from "../../../public/new_pp_large.jpg";
import AnimatedDiv from "../animations/animateddiv";
import { bioOne, bioTwo } from "@/data/bio";

export default function AboutMe() {
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col lg:flex-row justify-stretch items-stretch text-white mt-16 px-2 pb-4 lg:mt-0 lg:pt-4 gap-4 lg:gap-6">
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
        <span className="mt-4 sm:mt-6 text-md sm:text-lg">{bioOne}</span>
        <span className="mt-4 sm:mt-6 text-md sm:text-lg">{bioTwo}</span>
      </div>
    </AnimatedDiv>
  );
}
