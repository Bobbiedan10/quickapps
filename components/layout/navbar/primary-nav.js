const navlinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Apps", path: "/apps" },
];

import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./primary-nav.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
function PrimaryNav() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(navlinks[0]);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    duration: 1,
  };
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <ul className={classes.navigation}>
      {navlinks.map((link, i) => (
        <motion.li
          custom={i}
          animate="visible"
          variants={variants}
          key={link.name}
          onClick={() => setSelectedTab(link)}
        >
          <Link href={link.path}>
            <a className="relative flex-1">
              {link.name}
              {selectedTab === link ? (
                <motion.div
                  initial={false}
                  transition={{ spring, duration: 0.25 }}
                  layoutId="underline"
                  className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                />
              ) : router.pathname.includes(link.name.toLowerCase()) ? (
                <motion.div
                  initial={false}
                  transition={{ spring, duration: 0.25 }}
                  layoutId="underline"
                  className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                />
              ) : null}
            </a>
          </Link>
        </motion.li>
      ))}
      {/* <li onClick={() => setSelectedTab(0)}>
        <Link href="/">
          <a className="relative flex-1">
            Home
            {selectedTab === 0 && router.pathname == "/" ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : null}
          </a>
        </Link>
      </li>
      <li onClick={() => setSelectedTab(1)}>
        <Link href="/about">
          <a className=" flex-1 relative">
            About
            {selectedTab === 1 && router.pathname == "/about" ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : null}
          </a>
        </Link>
      </li>
      <li onClick={() => setSelectedTab(2)}>
        <Link href="/contact">
          <a className="relative flex-1">
            Contact
            {selectedTab === 2 && router.pathname == "/contact" ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : null}
          </a>
        </Link>
      </li>
      <li onClick={() => setSelectedTab(3)}>
        <Link href="/apps">
          <a className="relative flex-1">
            Apps
            {selectedTab == 3 && router.pathname.includes("apps") ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : selectedTab === 3 && router.pathname == "businesses" ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : null}
          </a>
        </Link>
      </li>
      <li onClick={() => setSelectedTab(4)}>
        <Link href="/services">
          <a className="relative flex-1">
            Services
            {selectedTab == 4 && router.pathname == "/services" ? (
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 border-b-4 border-orange-500"
                layoutId="underline"
              />
            ) : null}
          </a>
        </Link>
      </li> */}
    </ul>
  );
}

export default PrimaryNav;
