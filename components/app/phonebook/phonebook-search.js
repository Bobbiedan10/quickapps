import CategoriesButton from "./categories-button";
import { useRef } from "react";
function PhonebookSearch(props) {
  const { search, selected, select } = props;

  const searchRef = useRef();

  if (selected) {
    searchRef.current.value = "";
    select(false);
    search("");
  }

  return (
    <div className="w-full flex items-center pt-16 gap-x-4 pl-4 lg:pl-0">
      <CategoriesButton click={props.parentCallback} />

      <div className="relative w-full pr-2">
        <div className="flex items-center justify-center">
          <input
            autoFocus
            ref={searchRef}
            type="text"
            onChange={(e) => {
              search(e.target.value);
            }}
            className="relative text-lg sm:text-2xl w-full rounded-md py-2 px-4 bg-gray-200 dark:bg-gray-700 focus:outline-none shadow"
            placeholder="Find a Business!"
          />
        </div>
      </div>
    </div>
  );
}

export default PhonebookSearch;
