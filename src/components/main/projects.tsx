"use client";

import { projects } from "@/data/projects";
import ProjectCard from "../projects/projectcard";

export default function Projects() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white">
          Projects
        </span>
      </div>
      <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-3 lg:gap-6 justify-center items-center mt-4 lg:mt-6">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="w-full mt-4 sm:mt-6">
        <div className="">
          <form action="/projects">
            <button
              type="submit"
              className="border border-white text-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820] duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl"
            >
              See more projects.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
