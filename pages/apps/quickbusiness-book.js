import Link from "next/link";
import SlideUp from "../../components/animations/slide-up";
import SlideDown from "../../components/animations/slide-down";
import FadeInText from "../../components/animations/fade-in-text";
import Head from "next/head";

function QuickBusinessBook() {
  return (
    <div>
      <Head>
        <title>QuickBusiness Book - QuickApps</title>
        <meta
          name="apple-itunes-app"
          content="app-id=1522587006, app-argument=https://apps.apple.com/bb/app/quickbusiness-book/id1522587006"
        />
      </Head>
      <div>
        <div className="h-screen md:h-auto xl:h-screen  flex flex-col items-center justify-center bg-gray-100 mx-auto md:pt-20 2xl:pt-28">
          <img
            alt=""
            src="/img/discoverability_by_design.png"
            className="hidden md:block w-full h-full object-contain md:object-contain md:object-center"
          />
          <img
            src="/img/discoverability_by_design_mobile_2.png"
            alt=""
            className="md:hidden object-center object-contain"
          />
          <div className=" xl:absolute xl:bottom-8 w-full flex justify-center md:pb-8 xl:pb-0">
            <h1 className="-mt-4 md:-mt-12 xl:-mt-0 text-black text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold md:pr-12 lg:pr-20 xl:pr-28">
              Discoverability by design.
            </h1>
          </div>
        </div>
        <div className="xl:h-screen flex flex-col items-center justify-center mx-auto pt-20 2xl:pt-16 bg-black z-0">
          <div className="flex text-center max-w-6xl">
            <h1 className="inline bg-gradient-to-tr from-yellow-300 to-yellow-600 font-medium bg-clip-text text-5xl lg:text-6xl text-transparent">
              Businesses. Discovered.
            </h1>
          </div>
          <div className="grid max-w-6xl lg:grid-cols-2 pt-8 items-center">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-light text-center px-4 text-gray-100">
                Discover is the best way for you to find businesses you never
                even knew about.
              </h1>

              <div className="flex justify-center items-center">
                <div className="">
                  <Link href="https://apps.apple.com/bb/app/quickbusiness-book/id1522587006">
                    <a target="_blank">
                      <div className="hidden dark:block">
                        <img
                          alt="download on app store"
                          src="/img\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                          className=" p-2"
                        />
                      </div>
                      <div className="dark:hidden">
                        <img
                          alt="download on app store"
                          src="/img\Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                          className=" p-2"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="https://play.google.com/store/apps/details?id=com.quickservices.quickbusiness_book&hl=en&gl=US">
                    <a target="_blank">
                      <img
                        src="/img\google-play-badge.png"
                        alt=""
                        className="w-40"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <Link href="#discover">
                  <a className="text-blue-600 rounded-full px-4 py-2 underline text-xl">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
            <div className="mx-auto px-2 z-0">
              <SlideUp>
                <img
                  src="/img/Discover.png"
                  className="w-10/12 mx-auto pb-2"
                  alt="Discover app screenshot"
                />
              </SlideUp>
            </div>
          </div>
        </div>
        <div className=" xl:h-screen grid md:grid-cols-2 py-14 px-10 md:px-8 justify-center items-center z-10">
          <div className=" flex items-center justify-center z-10">
            <FadeInText>
              <div className="dark:hidden">
                <img
                  src="/img/quickbusiness_book.png"
                  className=" object-cover object-center
          lg:w-80 mx-auto"
                  alt="quick business book app screenshot"
                />
              </div>
              <div className="dark:block hidden">
                <img
                  src="/img/quickbusiness_book_dark.png"
                  className=" object-cover object-center
          lg:w-80 mx-auto"
                  alt="quick business book app screenshot"
                />
              </div>
            </FadeInText>
          </div>
          <div className="flex flex-col lg:items-start justify-center space-y-4">
            <div className="text-center lg:space-y-10 space-y-4">
              <h1 className="dark:text-gray-300 font-semibold text-3xl lg:text-5xl">
                QuickBusiness Book
              </h1>
              <h3 className="italic text-2xl font-light dark:text-gray-100">
                The most innovative phonebook app
              </h3>
              <div className="text-3xl lg:text-5xl xl:text-6xl font-medium bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600  text-transparent inline-block">
                <h1>
                  Everyone&apos;s Business.
                  <br />
                  You Should Know It.
                </h1>
              </div>

              <div>
                <Link href="">
                  <a className="bg-blue-600 rounded-full px-4 py-2 text-white">
                    Why QuickBusiness Book?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="xl:h-screen flex flex-col items-center justify-start mx-auto pt-14 bg-white dark:bg-black relative shadow-sm z-0"
          id="discover"
        >
          <div className="flex flex-col items-center text-center max-w-6xl space-y-4 pb-8 lg:pt-20 lg:mb-80">
            <div className="text-center flex flex-col items-center">
              <h1 className="flex bg-gradient-to-tr from-yellow-600 to-yellow-300 font-medium bg-clip-text text-5xl lg:text-6xl text-transparent ">
                Discover.
              </h1>
              <p className="text-xl font-light dark:text-gray-100">
                The most innovative way to find Barbadian Businesses.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center px-4 lg:p-0 text-center md:w-96 lg:w-3/12 space-y-4 lg:absolute lg:bottom-0 ">
            <SlideUp>
              <div className="hidden dark:block">
                <img
                  src="/img/discover__feature_dark.png"
                  className="hidden dark:block  object-cover object-center
              lg:w-80 2xl:w-full mx-auto"
                  alt="discover app screenshot"
                />
              </div>
              <div className="dark:hidden ">
                <img
                  src="/img/discover_feature.png"
                  className="dark:hidden object-cover object-center
          lg:w-80 2xl:w-full mx-auto"
                  alt="discover app screenshot"
                />
              </div>
            </SlideUp>
          </div>
        </div>
        <div className=" grid lg:grid-cols-2  justify-between items-center mx-auto gap-2 z-10 ">
          <div className=" col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-white dark:bg-gray-800 gap-4 py-14 z-10">
            <SlideDown>
              <div className="dark:hidden">
                <img
                  src="/img/quickpeek.png"
                  className="block dark:hidden object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto min-w-full"
                  alt="quick peek app screenshot"
                />
              </div>
              <div className="hidden dark:block ">
                <img
                  src="/img/quickpeek_dark.png"
                  className="object-cover object-center md:w-96
              lg:w-60 xl:w-72 mx-auto"
                  alt="quick peek app screenshot"
                />
              </div>
            </SlideDown>
            <FadeInText>
              <div className="text-center">
                <h1 className="text-2xl font-bold bg-gradient-to-br from-purple-900 to-yellow-600 text-transparent bg-clip-text">
                  Know Everything With Just A Peek
                </h1>
                <p className="text-xl dark:text-gray-100">
                  Quick look at Business Profiles.
                </p>
              </div>
            </FadeInText>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-800 py-14 z-10">
            <FadeInText>
              <div className="text-center">
                <h1 className="text-2xl font-bold bg-gradient-to-br from-purple-900 to-yellow-600 text-transparent bg-clip-text">
                  Tap. Tap. Tap Away.
                </h1>
                <p className="text-xl dark:text-gray-100 text-center">
                  Every tap has a purpose.
                </p>
              </div>
            </FadeInText>
            <SlideUp>
              <div className="dark:hidden">
                <img
                  src="/img/business_profile.png"
                  className="block dark:hidden object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto"
                  alt="business profile app screenshot"
                />
              </div>
              <div className="hidden dark:block">
                <img
                  src="/img/business_profile_dark.png"
                  className="hidden dark:block object-cover object-center
          lg:w-72 md:w-96 mx-auto"
                  alt="business profile app screenshot"
                />
              </div>
            </SlideUp>
          </div>

          <div className=" col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-white dark:bg-gray-800 gap-4 py-14">
            <SlideDown>
              <div className=" dark:hidden">
                <img
                  src="/img/more_information.png"
                  className="block dark:hidden object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto"
                  alt="more information app screenshot"
                />
              </div>
              <div className="hidden dark:block">
                <img
                  src="/img/more_information_dark.png"
                  className="hidden dark:block object-cover object-center md:w-96
              lg:w-60 xl:w-72 mx-auto"
                  alt="more information app screenshot"
                />
              </div>
            </SlideDown>
            <FadeInText>
              <div className="text-center">
                <h1 className="text-2xl font-bold bg-gradient-to-br from-purple-900 to-yellow-600 text-transparent bg-clip-text">
                  More information.
                </h1>
                <p className="text-xl dark:text-gray-100">
                  Information that matters.
                </p>
              </div>
            </FadeInText>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-800 py-14">
            <FadeInText>
              <div className="text-center">
                <h1 className="text-2xl font-bold bg-gradient-to-br from-purple-900 to-yellow-600 text-transparent bg-clip-text">
                  So. So. So. Organised.
                </h1>
                <p className="text-xl dark:text-gray-100 text-center">
                  Makes searching easier.
                </p>
              </div>
            </FadeInText>
            <SlideUp>
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="dark:hidden">
                  <img
                    src="/img/cosmetics.png"
                    className="block dark:hidden object-cover object-center
          lg:w-60 xl:w-72 md:w-96 mx-auto"
                    alt="cosmetics app screenshot"
                  />
                </div>
                <div className="dark:hidden">
                  <img
                    src="/img/food_and_beverage.png"
                    className="block dark:hidden object-cover object-center
          lg:w-60 xl:w-72 md:w-96 mx-auto"
                    alt="food and beverage app screenshot"
                  />
                </div>
                <div className="hidden dark:block">
                  <img
                    src="/img/cosmetics_dark.png"
                    className="hidden dark:block object-cover object-center
          lg:w-60 xl:w-72 md:w-96 mx-auto"
                    alt="cosmetics app screenshot"
                  />
                </div>
                <div className="hidden dark:block">
                  <img
                    src="/img/food_and_beverage_dark.png"
                    className="hidden dark:block object-cover object-center
          lg:w-60 xl:w-72 md:w-96 mx-auto"
                    alt="food and beverage app screenshot"
                  />
                </div>
              </div>
            </SlideUp>
          </div>
        </div>

        <div className="xl:h-screen flex flex-col items-center justify-center mx-auto py-14 bg-white dark:bg-transparent relative shadow-sm px-4">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8">
            <h1 className="flex font-medium italic text-5xl lg:text-6xl dark:text-gray-100 ">
              There&apos;s More...
            </h1>
            <div className="grid xl:grid-cols-2 gap-4 dark:text-gray-100">
              <div className="flex items-center gap-8">
                <img
                  src="/img/no-wifi.png"
                  className="w-12 dark:hidden"
                  alt="no wifi"
                />

                <img
                  src="/img/no-wifi_dark.png"
                  className="w-12 hidden dark:block"
                  alt="no wifi"
                />

                <div>
                  <h1 className="text-xl font-bold">No WiFi, No Problem</h1>
                  <p className="text-lg font-light">
                    Don&apos;t have access to WiFi or network coverage?
                    QuickBusiness Book caches businesses on your phone, so you
                    can still access businesses and find a service you require.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <img
                  src="/img/social-media.png"
                  className="w-12 dark:hidden"
                  alt="social media"
                />

                <img
                  src="/img/social-media_dark.png"
                  className="w-12 hidden dark:block"
                  alt="social media"
                />

                <div>
                  <h1 className="text-xl font-bold">Social Media Platforms</h1>
                  <p className="text-lg font-light">
                    QuickBusiness Book allows you to visit businesses&apos;
                    social media platforms all from their Business Profiles.
                    Saves you the time of having to search for them.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <img
                  src="/img/chat.png"
                  className="w-12 dark:hidden"
                  alt="chat"
                />
                <img
                  src="/img/chat_dark.png"
                  className="w-12 hidden dark:block"
                  alt="chat"
                />
                <div>
                  <h1 className="text-xl font-bold">
                    Jump right in a WhatsApp chat
                  </h1>
                  <p className="text-lg font-light">
                    Having a Phonebook with business numbers is normal,
                    we&apos;ve went a step ahead. Tap on numbers and jump
                    directly into a WhatsApp chat with them.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <img
                  src="/img/location.png"
                  className="w-12 dark:hidden"
                  alt="location"
                />

                <img
                  src="/img/location_dark.png"
                  className="w-12 hidden dark:block"
                  alt="location"
                />

                <div>
                  <h1 className="text-xl font-bold">Location, Location ..</h1>
                  <p className="text-lg font-light">
                    Tap on a business&apos;s store address and you&apos;ll be
                    taken to Apple Maps so you can get directions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <img
                  src="/img/organised.png"
                  className="w-12 dark:hidden"
                  alt="organised"
                />

                <img
                  src="/img/organised_dark.png"
                  className="w-12 hidden dark:block "
                  alt="organised"
                />

                <div>
                  <h1 className="text-xl font-bold">Organised.</h1>
                  <p className="text-lg font-light">
                    Businesses are organised in subcategories. Subcategories
                    narrow down your requirement, which makes it easier to find
                    the right business for your need.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <img
                  src="/img/light-bulb.png"
                  className="w-12 dark:hidden"
                  alt="light bulb"
                />

                <img
                  src="/img/light-bulb_dark.png"
                  className="w-12 hidden dark:block"
                  alt="light bulb"
                />

                <div>
                  <h1 className="text-xl font-bold">Ahead of the pack</h1>
                  <p className="text-lg font-light">
                    QuickBusiness Book is the most innovative way to find
                    businesses around the island. Taking advantage of your phone
                    in the right way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickBusinessBook;
