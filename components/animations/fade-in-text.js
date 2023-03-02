import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function FadeInText(props) {
  const { children } = props;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

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
        duration: 1.5,
        delay: 1,
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}>
      {children}
    </motion.div>
  );
}

export default FadeInText;
