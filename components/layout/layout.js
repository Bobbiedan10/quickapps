import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import ToggleSwitch from "../ui/toggle-switch";
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <Fragment>
      <Navbar />
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <motion.main
          key={router.pathname}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ duration: 0.3}} // Set the transition to linear
        >
          {props.children}
        </motion.main>
      </AnimatePresence>
      <ToggleSwitch />
      <Footer />
    </Fragment>
  );
}

export default Layout;
