import { Fragment } from "react";
import AppListItem from "./app-list-item";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

function AppList(props) {
  const { apps } = props;
  const router = useRouter();
  const [openApp, setOpenApp] = useState("");
  const variants = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: [0, 0.4, 0.2, 5],
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <Fragment>
      <div className="max-w-6xl p-8 space-y-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {apps.map((oneapp) => (
            <div key={oneapp.id}>
              <AppListItem
                id={oneapp.id}
                img={oneapp.appLogo}
                title={oneapp.title}
                apple={oneapp.url.apple}
                android={oneapp.url.android}
                web={oneapp.url.web}
                setOpenApp={setOpenApp}
              />
              <AnimatePresence>
                <motion.div
                  key={oneapp.id}
                  variants={variants}
                  initial="hidden"
                  onAnimationComplete={() => {
                    router.push(`/apps/${oneapp.id}`);
                  }}
                  animate={openApp === oneapp.id ? "show" : ""}
                  className="fixed bg-gray-50 bg-opacity-75 backdrop-blur-lg aspect-square top-0 left-0 z-20 w-screen h-screen flex justify-center items-center"
                >
                  <img
                    objectfit="contain"
                    src={oneapp.appLogo}
                    alt=""
                    className="object-cover object-center rounded-md shadow-md"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default AppList;
