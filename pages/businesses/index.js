import firebase from "../../utils/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import CategoriesList from "../../components/app/phonebook/categories-list";
import PhonebookSearch from "../../components/app/phonebook/phonebook-search";
import BusinessInfo from "../../components/app/phonebook/business-info";
import BusinessItem from "../../components/app/phonebook/business-item";

function ThisBusiness(props) {
  const { data, allData } = props;

  const [initialData, setInitialData] = useState(allData);

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState(false);

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
    allSubCategories.push(data.subCategory);
  });

  let subCategoryList = allSubCategories.filter((sc, index) => {
    return allSubCategories.indexOf(sc) === index;
  });

  let subcategories = subCategoryList.sort();

  const [subBusiness, showSubBusinesses] = useState(subcategories);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

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
        <div className="w-full lg:col-span-8 transform transition duration-300 ease-in-out">
          <PhonebookSearch
            parentCallback={handleClick}
            selected={selected}
            search={changeSearch}
            select={setSelected}
          />
          {search == "" ? (
            data.length == 0 ? (
              <div className="h-[530px] flex justify-center items-center text-2xl">
                &quot;Business Not Found&quot;
              </div>
            ) : (
              data.map((business) => (
                <div key={business.user_id} className="flex flex-col px-2">
                  <BusinessInfo category={business.subCategory} info={business}>
                    {business.image != "" ? (
                      <img
                        id={business.user_id}
                        className="object-cover w-full h-28 lg:h-36 object-center"
                        alt=""
                        src={`https://firebasestorage.googleapis.com/v0/b/quick-phonebook.appspot.com/o/${business.user_id}%2F${business.name}%2F${business.image}?alt=media`}
                      />
                    ) : (
                      <h1 className="dark:text-black text-7xl uppercase py-5">
                        {business.name.charAt(0)}
                      </h1>
                    )}
                  </BusinessInfo>
                </div>
              ))
            )
          ) : (
            <div className="overflow-y-auto space-y-10 w- overflow-x-hidden h-[520px] lg:h-[615px] scrollbar px-4">
              {subcategories?.map((subcategory, i) => (
                <div key={i}>
                  <h1 className="text-xl border-b border-orange-500 mb-4">
                    {subcategory}
                  </h1>
                  <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mb-4 px-4 md:px-0 gap-10 md:gap-5">
                    {initialData.map((eachBusiness, i) =>
                      eachBusiness.subCategory == subcategory ? (
                        <BusinessItem
                          select={setSelected}
                          key={i}
                          business={eachBusiness}
                          name={eachBusiness.name}
                        >
                          {eachBusiness.image != "" ? (
                            <img
                              id={eachBusiness.user_id}
                              src={`https://firebasestorage.googleapis.com/v0/b/quick-phonebook.appspot.com/o/${eachBusiness.user_id}%2F${eachBusiness.name}%2F${eachBusiness.image}?alt=media`}
                              className="relative object-center object-cover group w-full h-36 md:h-40 lg:h-44 xl:h-52"
                              alt={`${eachBusiness.image}`}
                            />
                          ) : (
                            <h1 className=" font-bold uppercase py-9 text-center">
                              {eachBusiness.name}
                            </h1>
                          )}
                        </BusinessItem>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThisBusiness;

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=3600"
  );

  const { query } = context;
  const id = query.id;

  const data = await firebase.getBusiness(id);

  const allData = await firebase.getData();

  return {
    props: {
      id: id,
      data: JSON.parse(JSON.stringify(data)),
      allData: JSON.parse(JSON.stringify(allData)),
    },
  };
}
