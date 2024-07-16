"use client";

import AnimatedPage from "@/components/animations/animatedpage";
import AllProjects from "@/components/projects/allprojects";

export default function Projects() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <AllProjects />
      </main>
    </AnimatedPage>
  );
}
