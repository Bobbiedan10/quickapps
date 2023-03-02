import { useState } from "react";
import { defaultLogo } from "../../../../public/img/QBB.png";
import Image from "next/image";
import Head from "next/head";
import PhonebookSearch from "../../../../components/app/phonebook/phonebook-search";
import BusinessItem from "../../../../components/app/phonebook/business-item";
import firebase from "../../../../utils/firebase";
import CategoriesList from "../../../../components/app/phonebook/categories-list";
import { AnimatePresence } from "framer-motion";

function CategoriesIndex(props) {
  const { allData, category } = props;

  const [active, setActive] = useState(false);

  const [initialData, setInitialData] = useState(allData);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(false);

  const [selected, setSelected] = useState(false);

  const handleImageLoad = (e) => {
    if (e.target.currentSrc.includes("[object%20Promise]")) {
      setImage(true);
    }
  };

  const changeSearch = (val) => {
    setSearch(val);
    let tag;
    if (val != "") {
      let newArray = initialData.filter((business) => {
        for (var i = 0; i < business.tags.length; i++) {
          if (business.tags[i].toLowerCase().match(val.toLowerCase())) {
            tag = business.tags[i];
            return business.tags[i].includes(val.toLowerCase());
          }
        }
        return (
          business.name.toLowerCase().includes(val.toLowerCase()) ||
          business.category.toLowerCase().includes(val.toLowerCase()) ||
          business.subCategory.toLowerCase().includes(val.toLowerCase())
        );
        //same other fields added by following OR
      });
      setInitialData(newArray);
    } else {
      setInitialData(allData);
    }
  };

  //List categories
  let allCategories = [];
  allData.map((data) => {
    allCategories.push(data.category);
  });
  let categoryList = allCategories.filter((c, index) => {
    return allCategories.indexOf(c) === index;
  });
  let categories = categoryList.sort();

  //list subcategories
  let allSubCategories = [];
  initialData.map((data) => {
    if (search == "") {
      if (data.category == category) {
        allSubCategories.push(data.subCategory);
      }
    } else {
      allSubCategories.push(data.subCategory);
    }
  });

  let subCategoryList = allSubCategories.filter((sc, index) => {
    return allSubCategories.indexOf(sc) === index;
  });

  let subcategories = subCategoryList.sort();

  const [subBusiness, showSubBusinesses] = useState(subcategories);

  const handleClick = () => {
    setActive(!active);
  };

  if (!allData) {
    return (
      <div className="h-screen w-screen flex justify-center">
        <div className="flex gap-2">
          <div className="p-4 bg-orange-300 animate-bounce transition "></div>
          <div className="p-4 bg-orange-500 animate-bounce transition delay-100"></div>
          <div className="p-4 bg-orange-700 animate-bounce transition delay-200"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>QuickBusiness Book - QuickApps</title>
        <meta
          name="apple-itunes-app"
          content="app-id=1522587006, app-argument=https://apps.apple.com/bb/app/quickbusiness-book/id1522587006"
        />
      </Head>

      <div className="w-full relative flex lg:grid lg:grid-cols-10 gap-2">
        <CategoriesList
          func={showSubBusinesses}
          subCats={subcategories}
          parentCallback={handleClick}
          hide={setActive}
          show={active}
          items={categories}
        />
        <div className="space-y-4 w-full lg:col-span-8 transform transition duration-300 ease-in-out pr-2">
          <PhonebookSearch parentCallback={handleClick} search={changeSearch} />
          <div className="overflow-y-auto overflow-x-hidden h-[500px] lg:h-[615px] scrollbar-none pb-4 px-4">
            {subcategories?.map((subcategory, i) => (
              <div key={i}>
                <h1 className="text-xl border-b border-orange-500 mb-4">
                  {subcategory}
                </h1>
                <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-4 px-4 md:px-0 gap-10 md:gap-5">
                  {initialData.map((eachBusiness, i) =>
                    eachBusiness.subCategory == subcategory ? (
                      <AnimatePresence key={i}>
                        <BusinessItem
                          select={setSelected}
                          business={eachBusiness}
                          name={eachBusiness.name}
                        >
                          {eachBusiness.image != "" ? (
                            <img
                              id={eachBusiness.user_id}
                              src={`https://firebasestorage.googleapis.com/v0/b/quick-phonebook.appspot.com/o/${eachBusiness.user_id}%2F${eachBusiness.name}%2F${eachBusiness.image}?alt=media`}
                              className="relative object-center object-cover group w-full h-36 md:h-40 lg:h-44 xl:h-52"
                              alt=""
                            />
                          ) : (
                            <div className="aspect-square flex justify-center items-center w-full">
                              <h1 className="text-[3.6vw] md:text-[1.5vw] xl:text-[1vw]  font-bold uppercase py-9 text-center">
                                {eachBusiness.name}
                              </h1>
                            </div>
                          )}
                        </BusinessItem>
                      </AnimatePresence>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=60, stale-while-revalidate=3600"
  );
  const { params } = context;
  const category = params.category;
  const data = await firebase.getData();
  const sortedData = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  console.log(sortedData);

  return {
    props: {
      allData: JSON.parse(JSON.stringify(sortedData)),
      category: category,
    },
  };
}

export default CategoriesIndex;
