"use client";

import { useEffect } from "react";
import { AnimatePresence, Spring, motion } from "framer-motion";

const transitionSpringPhysics: Spring = {
  type: "spring",
  mass: 0.2,
  stiffness: 80,
  damping: 10,
};
function AnimatedPage({ children }: { children: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <motion.div
          className="fixed w-screen z-50 bottom-0 bg-black"
          transition={transitionSpringPhysics}
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
        />
        <motion.div
          className="fixed w-screen z-50 top-0 bg-blue-200"
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.2 } }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedPage;
