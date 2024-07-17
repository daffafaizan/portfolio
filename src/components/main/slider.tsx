import { ExperienceData } from "@/data/experiences";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <div className="w-full bg-white inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">
        <ul className="flex h-64 p-10 items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll">
          {ExperienceData.map((data) => (
            <li key={data.id}>
              <Image
                src={data.image}
                alt={data.title}
                className={`mx-12 ${data.title === "OpenWay" ? "-ml-14" : ""} ${
                  data.title === "Fakultas Ilmu Komputer UI" ? "-mr-3" : ""
                } h-32 md:h-auto object-contain`}
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex h-64 p-10 items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {ExperienceData.map((data) => (
            <li key={data.id}>
              <Image
                src={data.image}
                alt={data.title}
                className={`mx-12 ${data.title === "OpenWay" ? "-ml-14" : ""} ${
                  data.title === "Fakultas Ilmu Komputer UI" ? "-mr-3" : ""
                } h-32 md:h-auto object-contain`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
