"use client";

import AnimatedPage from "@/components/animations/animatedpage";
import AllBlogs from "@/components/blog/allblogs";

export default function Blog() {
  return (
    <AnimatedPage>
      <main className="flex flex-col items-center p-4">
        <AllBlogs />
      </main>
    </AnimatedPage>
  );
}
