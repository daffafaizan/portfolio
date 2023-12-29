import Intro from "@/components/main/intro";
import Description from "@/components/main/description";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Navbar />
      <Intro />
      <Description />
    </main>
  );
}
