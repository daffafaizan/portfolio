import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedDivProps {
  children: React.ReactNode;
  className: string;
}
export default function AnimatedDiv({ children, className }: AnimatedDivProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: [0.87, 0, 0.13, 1] },
    },
    hidden: { opacity: 0, y: 100 },
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
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
