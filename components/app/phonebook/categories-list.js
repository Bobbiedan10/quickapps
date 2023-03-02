import CategoryItem from "./category-item";
import classes from "./categories-list.module.css";
import CloseIcon from "../../icons/close-icon";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function CategoriesList(props) {
  const { items, func, hide } = props;
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      className={`col-span-2 absolute lg:static w-72 lg:w-full pt-16 h-full xl:h-screen pb-2 ${
        props.show ? "z-20" : ""
      }`}
    >
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={
            props.show ? classes.active : classes.standard + " dark:bg-gray-700"
          }
        >
          <div className="lg:hidden flex justify-end p-2 dark:bg-gray-700 bg-gray-50">
            <button
              name="close categories on mobile button"
              onClick={props.parentCallback}
            >
              <CloseIcon />
            </button>
          </div>
          <ul>
            <li className={"dark:bg-gray-700 bg-gray-50"}>
              <Link href="/apps/phonebook">
                <a>
                  <div
                    className={` px-4 py-2 text-lg dark:text-gray-300 border-b cursor-pointer font-light hover:border-orange-500 
              `}
                  >
                    All Categories
                  </div>
                </a>
              </Link>
            </li>
            {items?.map((category) => (
              <motion.div variants={item} key={category}>
                <CategoryItem
                  onClick={() => {
                    func(category);
                    hide(false);
                  }}
                  link={`/apps/phonebook/${category}`}
                  category={category}
                >
                  {category}
                </CategoryItem>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default CategoriesList;
