import { useState } from "react";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Project } from "@/interfaces/project";

export default function ProjectCard({ project }: { project: Project }) {
  const [showProject, setShowProject] = useState(false);
  const determineWidth = (id: number) => {
    const arr = [1, 4, 5, 8, 9, 12, 13];
    if (arr.includes(id)) {
      return "lg:col-span-1";
    } else {
      return "lg:col-span-2";
    }
  };
  return (
    <>
      <div
        className={`relative col-span-1 ${determineWidth(
          project.id,
        )} h-80 lg:h-96`}
      >
        {showProject ? (
          <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
            <button
              className="absolute top-5 left-5"
              onClick={() => setShowProject(!showProject)}
            >
              <ChevronUpIcon className="h-8 w-8 text-white" />
            </button>
            <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
              {project.technologies.map((technology) => (
                <div key={technology}>
                  <span className="border border-white px-2 py-1 rounded-full">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
              <span>{project.title}</span>
            </div>
            <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
              <span>{project.description}</span>
            </div>
          </div>
        ) : (
          <div className="absolute top-5 left-5 z-10 rounded-3xl">
            <button onClick={() => setShowProject(!showProject)}>
              <ChevronDownIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        )}
        <Image
          className="rounded-3xl h-full object-cover"
          src={project.image}
          alt={project.title}
          quality={100}
          priority={true}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
            <span className="text-base sm:text-xl font-medium">
              {project.title}
            </span>
            <a
              className="flex flex-row pointer-events-none justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open</span>
              <HiOutlineExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
