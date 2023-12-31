import AboutMe from "@/components/main/aboutme";
import Intro from "@/components/main/intro";
import Projects from "@/components/main/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Intro />
      <AboutMe />
      <Projects />
    </main>
  );
}
