import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function FadeInRight(props) {
  const { children } = props;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{
        type: "spring",
        ease: "easeInOut",
        duration: 3,
        delay: 0.5,
      }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -100, opacity: 0 },
      }}>
      {children}
    </motion.div>
  );
}

export default FadeInRight;
