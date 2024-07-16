import { useState } from "react";
import AnimatedDiv from "../animations/animateddiv";
import { projects } from "@/data/projects";
import ProjectCard from "./projectcard";
import ToolsCard from "./toolscard";
import Interested from "./interested";

export default function AllProjects() {
  const [showTools, setShowTools] = useState(false);

  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center mt-16 px-2 pb-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white">
          Projects
        </span>
      </div>

      <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-3 lg:gap-6 justify-center items-center mt-4 lg:mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Interested />

      <div className="w-full mt-4 sm:mt-6">
        <button
          onClick={() => setShowTools(!showTools)}
          className={`group flex flex-row justify-between items-center gap-4 border ${
            showTools
              ? "bg-[#45b8ac] text-white border-[#101820] hover:bg-[#3ea69b]"
              : "text-white border-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820]"
          } duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl`}
        >
          <span>Tools I use.</span>
        </button>
      </div>

      <ToolsCard showTools={showTools} setShowTools={setShowTools} />
    </AnimatedDiv>
  );
}
