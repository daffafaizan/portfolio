"use client";

import AnimatedPage from "@/components/animations/pageanim";
import UnderConstruction from "@/components/misc/construction";

export default function Blog() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <UnderConstruction />
      </main>
    </AnimatedPage>
  );
}
