import AboutMe from "@/components/main/aboutme";
import Intro from "@/components/main/intro";
import Projects from "@/components/main/projects";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
    </main>
  );
}
