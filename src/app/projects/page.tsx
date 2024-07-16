"use client";

import AnimatedPage from "@/components/animations/animatedpage";
import AllProjects from "@/components/projects/allprojects";
import AllProjectsTwo from "@/components/projects/allprojectstwo";

export default function Projects() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <AllProjectsTwo />
      </main>
    </AnimatedPage>
  );
}
