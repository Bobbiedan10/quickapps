import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
function Banner(props) {
  const { title } = props;

  const variants = {
    initial: {
      x: "-100",
      opacity: 0,
    },

    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    initial: {
      x: "-100",
      opacity: 0,
    },

    show: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <Fragment>
      <div className="py-4 bg-black">
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            className="max-w-6xl flex items-center mx-auto  "
          >
            <motion.img
              variants={item}
              src="/img/QuickApps Logo-white.png"
              alt="logo"
              className="w-16"
            />
            <motion.h1
              variants={item}
              className="text-4xl font-bold  text-gray-50"
            >
              {title}
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </Fragment>
  );
}

export default Banner;
