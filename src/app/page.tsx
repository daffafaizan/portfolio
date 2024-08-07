"use client";

import AnimatedPage from "@/components/animations/animatedpage";
import AboutMe from "@/components/main/aboutme";
import Experiences from "@/components/main/experiences";
import Intro from "@/components/main/intro";
import Projects from "@/components/main/projects";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4 mb-32">
        <Intro />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
    </AnimatedPage>
  );
}
