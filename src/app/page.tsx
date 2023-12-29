import Intro from "@/components/main/intro";
import Description from "@/components/main/description";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Intro />
      <Description />
    </main>
  );
}
