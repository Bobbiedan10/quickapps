import Description from "../components/home/description";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.05,
        duration: 1.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: [-15, 15, -10, 5, 0] },
  };
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>QuickApps</title>
      </Head>
      <div className="space-y-4">
        <div className="h-screen flex bg-white items-center justify-center pt-20 px-4 relative bg-fixed">
          <div className="flex flex-col space-y-12 text-black md:space-y-0 xl:flex-row justify-center items-center">
            <AnimatePresence>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center space-y-6 justify-center"
                key={1}
              >
                <motion.h1 variants={item} className="text-4xl md:text-7xl">
                  Web.
                </motion.h1>
                <motion.p variants={item} className="text-xl md:text-4xl">
                  Meet QuickBusiness Book.
                </motion.p>
                <Link href="apps/phonebook">
                  <motion.a
                    variants={item}
                    className="bg-blue-500 cursor-pointer hover:bg-blue-400 transform hover:scale-105 transition ease-in-out duration-300 text-white py-2 px-8 rounded-full font-bold text-xl"
                  >
                    Launch
                  </motion.a>
                </Link>
              </motion.div>

              <Link key={2} href="/apps/phonebook">
                <motion.img
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 1,
                      duration: 1.5,
                    },
                  }}
                  alt="discover home"
                  src="/img/web display.png"
                  className="object-cover object-center text-center cursor-pointer"
                />
              </Link>
            </AnimatePresence>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center pt-20 bg-black px-4 relative bg-fixed">
          <div className=" grid grid-cols-1 xl:grid-cols-3 justify-center items-center gap-8">
            <div>
              <h1 className=" text-gray-100 text-xl lg:text-4xl xl:text-2xl text-center">
                Let&apos;s Go Beyond.
              </h1>
            </div>

            <div className="w-full flex justify-center">
              <Link href="/apps/quickbusiness-book">
                <img
                  alt="discover home"
                  src="/img/discover_home.png"
                  className="object-cover transform lg:w-1/2 xl:scale-125 xl:w-11/12 object-center w-full text-center cursor-pointer"
                />
              </Link>
            </div>

            <div>
              <h1 className="text-gray-100 text-2xl lg:text-4xl xl:text-2xl text-center">
                It&apos;s time to explore.
              </h1>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mx-auto py-20 bg-gray-200 px-4">
          <div className="max-w-6xl mx-auto flex flex-col justify-center space-y-16">
            <div className="mx-auto text-center">
              <h1 className="text-black text-5xl font-medium capitalize">
                a code.
                <br /> more powerful than you can imagine.
              </h1>
            </div>
            <Link href="/apps/quickbusiness">
              <img
                alt="quick code home"
                src="/img/quickcode_home.png"
                className="w-full object-cover object-center cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Description />
      </div>
    </div>
  );
}

export default Home;
