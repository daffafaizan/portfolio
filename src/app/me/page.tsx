"use client";

import AnimatedPage from "@/components/animations/animatedpage";
import AboutMe from "@/components/me/aboutme";

export default function Me() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <AboutMe />
      </main>
    </AnimatedPage>
  );
}
