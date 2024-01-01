import Image from "next/image";
import profile from "../../../public/new_pp_large.jpg";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col lg:flex-row justify-stretch items-stretch mt-16 px-2 pb-4 lg:mt-0 lg:pt-4 gap-4 lg:gap-6">
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
          Daffa, currently a third-year Computer Science Undergraduate at the
          University of Indonesia, has developed a strong interest in Software
          Engineering, specifically focusing on Front End Development. Known for
          his passionate and enthusiastic approach to both his studies and work,
          Daffa is committed to continuously expanding his skill set. While
          specializing in Front End Development, he is also actively delving
          into Back End Development to achieve a well-rounded proficiency.
        </span>
        <span className="mt-4 sm:mt-6 text-md sm:text-lg">
          Proficient in programming languages such as Java, Python, JavaScript,
          and TypeScript, Daffa showcases versatility in various frameworks,
          including React, Next, Spring Boot, and Django. Driven by a hunger for
          knowledge, he is determined to contribute significantly to the dynamic
          field of Computer Science. Daffa's combination of curiosity and
          dedication positions him on a compelling journey towards becoming a
          skilled and innovative Software Engineer.
        </span>
      </div>
    </div>
  );
}
