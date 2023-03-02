import { Fragment } from "react";
import { useRef } from "react";
import Button from "../ui/button";
function QuickSearch() {
  const searchInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const searchedApp = searchInputRef.current.value;

    
  }
  return (
    <Fragment>
      <form className='w-full flex space-x-4'>
        <div className='w-full '>
          <input
            type='text'
            id='search'
            ref={searchInputRef}
            className='w-full text-2xl py-2 px-4 rounded-md bg-gray-300 shadow-md dark:bg-gray-600 outline-none'
            placeholder='Quick Search!'
          />
        </div>
        <Button>Search</Button>
      </form>
    </Fragment>
  );
}

export default QuickSearch;
