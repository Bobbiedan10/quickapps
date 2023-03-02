import { useRouter } from "next/router";
import { motion } from "framer-motion";

function BusinessItem(props) {
  const { business, select } = props;
  const name = business.name;
  const router = useRouter();

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      borderRadius: "100%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      borderRadius: "15%",
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "200px" }}
      className="shadow-md rounded-xl overflow-hidden relative group cursor-pointer hover:shadow-lg hover:border-yellow-500 border  dark:bg-gray-500"
      onClick={() => {
        select(true);
        router.push(`/businesses?id=${business.unique_id}`);
      }}
    >
      <div className="h-full w-full flex items-center justify-center">
        {props.children}
      </div>
      <div className=" opacity-0 mx-auto  group-hover:opacity-100 w-full">
        <h1 className=" opacity-90 bg-gradient-to-tr from-orange-500 to-orange-300 flex justify-center items-center text-center text-white font-bold p-2 bottom-0 absolute h-full w-full rounded-bl-xl rounded-br-xl rounded-tr-xl">
          {name}
        </h1>
      </div>
    </motion.div>
  );
}

export default BusinessItem;
