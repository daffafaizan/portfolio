import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MainDivAnim({ children }: { children: any }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.5, ease: [0.87, 0, 0.13, 1] },
    },
    hidden: { opacity: 0, y: -100 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
