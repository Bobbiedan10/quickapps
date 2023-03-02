import Link from "next/link";

function AppListItem(props) {
  const { id, img, title, apple, android, web, setOpenApp } = props;
  const appLink = `/apps/${id}`;

  return (
    <div className="space-y-4">
      <div className="shadow-lg rounded-md overflow-hidden p-4 dark:bg-black transform transition hover:scale-105 ease-in-out duration-300">
        <div className="flex flex-col space-y-4">
          <div className="border rounded-md overflow-hidden bg-white dark:bg-gray-800">
            <img
              onClick={() => {
                setOpenApp(id);
              }}
              objectfit="contain"
              src={img}
              alt=""
              className="object-cover object-center rounded-md shadow-md"
            />
          </div>

          <h1 className="font-medium text-lg dark:text-gray-100">{title}</h1>
        </div>
        <div className="flex flex-col">
          <i className="dark:text-gray-100">Available on: </i>
          <div className="flex items-center">
            <div className="">
              <Link href={apple}>
                <a target="_blank">
                  <img
                    src="/img\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="download on app store"
                    className="hidden dark:block p-2"
                  />

                  <img
                    src="/img\Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                    alt="download on app store"
                    className=" dark:hidden p-2"
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href={android}>
                <a target="_blank">
                  <img
                    src="/img\google-play-badge.png"
                    alt="download on playstore"
                    className="w-40"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {web != "" ? (
        <div className="flex justify-center ">
          <Link href={web}>
            <a className="w-full text-center transform transition hover:scale-105 hover:bg-orange-400 cursor-pointer transistion ease-in-out duration-200 rounded-xl bg-orange-500 text-white py-2 px-4">
              Use Web App
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default AppListItem;
