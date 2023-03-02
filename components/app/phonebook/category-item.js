import Link from "next/link";
import { useRouter } from "next/router";
function CategoryItem(props) {
  const { category, onClick, link } = props;
  const router = useRouter();
  return (
    <li
      onClick={onClick}
      className={
        router.pathname.includes(`/apps/phonebook/${category}`)
          ? "bg-orange-500 "
          : " dark:bg-gray-700 bg-gray-50"
      }>
      <Link href={link}>
        <a>
          <div
            className={`px-4 py-2 text-lg  border-b cursor-pointer font-light hover:border-orange-500 dark:text-gray-300
            `}>
            {props.children}
          </div>
        </a>
      </Link>
    </li>
  );
}

export default CategoryItem;
