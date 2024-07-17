import { ExperienceData } from "@/data/experiences";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {ExperienceData.map((data) => (
            <li key={data.id}>
              <Image src={data.image} alt={data.title} />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {ExperienceData.map((data) => (
            <li key={data.id}>
              <Image src={data.image} alt={data.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
