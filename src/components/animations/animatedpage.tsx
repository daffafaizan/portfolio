"use client";

import { useEffect } from "react";
import { AnimatePresence, Spring, motion } from "framer-motion";

export default function AnimatedPage({ children }: { children: any }) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <motion.div
          className="fixed flex justify-center items-center w-screen z-50 top-0 bg-[#F5F5F5]"
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{
            height: "0vh",
            transition: { duration: 1.5, ease: [0.87, 0, 0.13, 1] },
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
