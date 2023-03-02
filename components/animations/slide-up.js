import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function SlideUp(props) {
  const { children } = props;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.09 });

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
        ease: "easeIn",
        duration: 2.5,
        delay: 0.4,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}>
      {children}
    </motion.div>
  );
}

export default SlideUp;
