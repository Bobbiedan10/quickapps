import Link from "next/link";
import SlideDown from "../../components/animations/slide-down";
import SlideUp from "../../components/animations/slide-up";
import FadeInRight from "../../components/animations/fade-in-right";
import FadeIn from "../../components/animations/fade-in";
import Head from "next/head";

function QuickBusiness() {
  return (
    <div>
      <Head>
        <title>QuickBusiness - QuickApps</title>
        <meta
          name='apple-itunes-app'
          content='app-id=1521897277, app-argument=https://apps.apple.com/us/app/quickbusiness/id1521897277'
        />
      </Head>
      <div>
        <div className='xl:h-screen flex flex-col items-center justify-center mx-auto pt-16 dark:bg-black bg-white'>
          <div className='grid max-w-6xl grid-cols-1 lg:grid-cols-2 pt-4 xl:pt-24 items-center gap-4'>
            <div className='order-last xl:order-none'>
              <SlideUp>
                <div className=' dark:block hidden'>
                  <img
                    alt='quick card'
                    src='/img/quickcard_orange_new_dark.png'
                    className='w-9/12 mx-auto dark:block hidden'
                  />
                </div>
                <div className='dark:hidden'>
                  <img
                    alt='quick card'
                    src='/img/quickcard_orange_new.png'
                    className='w-9/12 mx-auto '
                  />
                </div>
              </SlideUp>
            </div>

            <div className='text-center space-y-2'>
              <div className='dark:hidden'>
                <img
                  alt='Quick card logo'
                  src='/img/QuickCard Logo.png'
                  className=' w-52 xl:w-72 mx-auto'
                />
              </div>
              <div className='hidden dark:block'>
                <img
                  alt='Quick card logo'
                  src='/img/QuickCard Logo_dark.png'
                  className=' w-52 xl:w-72 mx-auto'
                />
              </div>
              <h1 className='text-2xl xl:text-3xl font-light text-center dark:text-gray-100'>
                A new kind of business card. <br />
                Designed by QuickBusiness.
              </h1>

              <div className='flex justify-center items-center'>
                <div className=''>
                  <Link href='https://apps.apple.com/bb/app/quickbusiness/id1521897277'>
                    <a target='_blank'>
                      <div className='hidden dark:block'>
                        <img
                          alt='download on app store'
                          src='/img\Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
                          className=' p-2'
                        />
                      </div>
                      <div className='dark:hidden'>
                        <img
                          alt='download on app store'
                          src='/img\Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg'
                          className=' p-2'
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href='https://play.google.com/store/apps/details?id=com.quickapps.phonebook_business&hl=en&gl=US'>
                    <a target='_blank'>
                      <img
                        src='/img\google-play-badge.png'
                        alt=''
                        className='w-40'
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <Link href='#discover'>
                  <a className='text-blue-600 rounded-full px-4 py-2 underline text-xl'>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id='discover'
          className='xl:h-screen flex flex-col lg:flex-row justify-between max-w-6xl items-center mx-auto py-14 space-y-4'>
          <div className='xl:pb-2'>
            <SlideUp>
              <div className=' dark:hidden'>
                <img
                  alt='quick card'
                  src='/img/quickcard_orange.png'
                  className='dark:hidden w-80 h-full object-contain '
                />
              </div>
              <div className=' dark:block hidden'>
                <img
                  alt='quick card'
                  src='/img/quickcard_orange_dark.png'
                  className='hidden dark:block w-80 h-full object-contain '
                />
              </div>
            </SlideUp>
          </div>

          <div>
            <h1 className='text-2xl xl:text-3xl font-light text-center dark:text-gray-100 w-full'>
              Designed by QuickBusiness.
              <br />
              All on your phone.
            </h1>
          </div>
          <div className='xl:pt-32'>
            <SlideDown>
              <img
                alt='quick code orange'
                src='/img/quickcode_orange.png'
                className='w-80 h-full object-contain '
              />
            </SlideDown>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center max-w-6xl mx-auto lg:pt-16 space-y-4'>
          <h1 className='flex bg-gradient-to-tl from-red-300 to-blue-600 font-medium bg-clip-text text-4xl lg:text-6xl text-transparent'>
            Quickcodes
          </h1>
          <p className='text-xl xl:text-3xl font-light text-center dark:text-gray-100 pb-2'>
            Your business. Your code. Your presence.
          </p>
        </div>
        <div className='xl:h-screen grid lg:grid-cols-3  justify-between items-center mx-auto gap-2 px-4 '>
          <div className=' col-span-3 lg:col-span-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-green-300 dark:bg-gray-800 gap-4 py-14 rounded-2xl relative group'>
            <img
              alt='quick code blue'
              src='/img/quickcode_blue.png'
              className=' object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto'
            />
            <div className='hidden absolute bottom-4 group-hover:block'>
              <h1 className=' font-semibold text-2xl'>Scan Me!</h1>
            </div>
          </div>

          <div className=' col-span-3 lg:col-span-1 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-600 to-yellow-400 dark:bg-gray-800 gap-4 rounded-2xl py-14 group relative'>
            <img
              alt='quick code orange'
              src='/img/quickcode_orange.png'
              className=' object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto'
            />
            <div className='hidden absolute bottom-4 group-hover:block'>
              <h1 className=' font-semibold text-2xl'>Scan Me!</h1>
            </div>
          </div>

          <div className=' col-span-3 lg:col-span-1 flex flex-col items-center justify-center bg-gradient-to-b from-red-300 to-red-100 dark:bg-gray-800 gap-4 py-14 rounded-2xl relative group'>
            <img
              alt='quick code pink'
              src='/img/quickcode_pink.png'
              className=' object-cover object-center
              lg:w-60 xl:w-72 md:w-96 mx-auto'
            />
            <div className='hidden absolute bottom-4 group-hover:block'>
              <h1 className='font-semibold text-2xl'>Scan Me!</h1>
            </div>
          </div>
        </div>
        <div className='h-96 md:h-auto xl:h-screen flex flex-col justify-center max-w-6xl items-center mx-auto md:py-14 px-4  '>
          <div className='flex justify-center items-center '>
            <img
              alt='quick card reversed'
              src='/img/quickcard_reverse.png'
              className='object-cover object-center md:w-3/5  xl:w-4/5 shadow-md rounded-xl xl:rounded-3xl'
            />
          </div>
        </div>
        <div className='flex flex-col items-center mx-auto max-w-6xl pb-8 space-y-4 px-4'>
          <h1 className='flex bg-gradient-to-tl from-blue-400 to-green-200 font-medium bg-clip-text text-3xl lg:text-6xl text-transparent text-center'>
            One code. All your information.
          </h1>
          <p className='text-xl xl:text-2xl font-light text-center dark:text-gray-100 max-w-3xl md:w-96 lg:w-full mx-auto'>
            Your QuickCode goes on the back of your QuickCard. One scan and
            customers are on your Business Profile.
          </p>
        </div>

        <div className='xl:h-screen flex flex-col items-center justify-center mx-auto pt-16 px-4'>
          <div className='grid max-w-6xl grid-cols-1 lg:grid-cols-5 items-center lg:gap-8 justify-between space-y-4'>
            <div className='col-span-1 lg:col-span-2 space-y-8 dark:text-gray-100'>
              <h1 className='text-center text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium'>
                Your Information. <br /> Your Way.
              </h1>
              <p className='text-center md:w-96 lg:w-full text-xl font-light mx-auto'>
                You build your Business Profile, making it easy to make edits
                quickly, effectively and effortlessly.
              </p>
            </div>

            <div className='flex flex-col md:flex-row col-span-3'>
              <FadeIn>
                <div className='dark:hidden'>
                  <img
                    alt='QuickBusiness business form'
                    src='/img/quickbusiness_business_form.png'
                  />
                </div>
                <div className='hidden dark:block'>
                  <img
                    alt='QuickBusiness business form'
                    src='/img/quickbusiness_business_form_dark.png'
                    className=''
                  />
                </div>
              </FadeIn>
              <FadeInRight>
                <div className='dark:hidden'>
                  <img
                    alt='QuickBusiness business profile'
                    src='/img/quickbusiness_business_profile_front.png'
                    className='dark:hidden'
                  />
                </div>
                <div className='hidden dark:block'>
                  <img
                    alt='QuickBusiness business profile'
                    src='/img/quickbusiness_business_profile_front_dark.png'
                    className=''
                  />
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>

        <div className='xl:h-screen grid lg:grid-cols-2 items-center justify-center mx-auto pt-14 gap-x-4'>
          <div className='flex justify-center items-center h-full bg-black relative'>
            <img
              alt='isometric view'
              src='/img/isometric_view.png'
              className='w-full h-full object-cover object-center'
            />
            <div className='absolute bottom-8 md:bottom-20 lg:bottom-8 xl:bottom-20 mx-auto text-center'>
              <Link href='#'>
                <a className='text-lg underline text-blue-700'>Sign up today</a>
              </Link>
              <h1 className='text-gray-100 text-2xl font-medium'>
                Make Your Business Stand Out.
              </h1>
            </div>
          </div>
          <div className='flex justify-center items-center bg-gradient-to-tr from-indigo-200 to-purple-700 h-full py-8'>
            <img
              alt='QuickBusiness business profile'
              src='/img/quickbusiness_business_profile.png'
              className='w-3/5 object-cover object-center'
            />
          </div>
        </div>

        <div className=' flex flex-col items-center justify-center mx-auto py-14 bg-white dark:bg-transparent relative shadow-sm px-4'>
          <div className='max-w-6xl mx-auto flex flex-col items-center justify-center space-y-8'>
            <h1 className='flex font-medium italic text-5xl lg:text-6xl dark:text-gray-100 text-center'>
              Know The Little Things
            </h1>
            <div className='grid xl:grid-cols-2 gap-4 items-start dark:text-gray-100'>
              <div className='flex items-center gap-8'>
                <img
                  alt='notify'
                  src='/img/notify.png'
                  className='w-12 dark:hidden'
                />

                <img
                  alt='notify'
                  src='/img/notify_dark.png'
                  className='w-12 hidden dark:block'
                />

                <div>
                  <h1 className='text-xl font-bold'>Stay in the know</h1>
                  <p className='text-lg font-light'>
                    QuickBusiness sends notifications about your Business
                    Profile when it requires your attention. Notifications keep
                    you updated on your business&apos;s review status as well.{" "}
                    <br />
                    <i className='text-base'>
                      * Push Notifications are only available on iOS.
                    </i>
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <img
                  alt='code'
                  src='/img/code.png'
                  className='w-12 dark:hidden'
                />

                <img
                  alt='code'
                  src='/img/code_dark.png'
                  className='w-12 hidden dark:block'
                />

                <div>
                  <h1 className='text-xl font-bold'>
                    One code to rule all your business information
                  </h1>
                  <p className='text-lg font-light'>
                    QuickCodes are QR codes which represents your presence in
                    our Phonebook. Create your code and share your code so your
                    customers can scan and easily find you Business Profile in
                    our Phonebook.
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <img
                  alt='categories'
                  src='/img/categories.png'
                  className='w-12 dark:hidden'
                />
                <img
                  alt='categories'
                  src='/img/categories_dark.png'
                  className='w-12 hidden dark:block'
                />
                <div>
                  <h1 className='text-xl font-bold'>
                    Many categories to choose from
                  </h1>
                  <p className='text-lg font-light'>
                    We provide a wide range of subcategories to list your
                    business in, with new subcategories added.
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <img
                  alt='secure'
                  src='/img/secure.png'
                  className='w-12
                dark:hidden'
                />
                <img
                  alt='secure'
                  src='/img/secure_dark.png'
                  className='w-12 hidden dark:block'
                />
                <div>
                  <h1 className='text-xl font-bold'>Your Data. Protected.</h1>
                  <p className='text-lg font-light'>
                    Your business information stays safe on your phone,
                    requiring Face ID or Touch ID to access and edit your
                    information.
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <img
                  alt='fast'
                  src='/img/fast.png'
                  className='w-12 dark:hidden'
                />

                <img
                  alt='fast'
                  src='/img/fast_dark.png'
                  className='w-12 hidden dark:block'
                />

                <div>
                  <h1 className='text-xl font-bold'>Sign up in 2 minutes.</h1>
                  <p className='text-lg font-light'>
                    With our sign up form, it only takes 2 minutes to sign up
                    your business.
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <img
                  alt='brain'
                  src='/img/brain.png'
                  className='w-12 dark:hidden'
                />

                <img
                  alt='brain'
                  src='/img/brain_dark.png'
                  className='w-12 hidden dark:block'
                />
                <div>
                  <h1 className='text-xl font-bold'>
                    Ground breaking technology
                  </h1>
                  <p className='text-lg font-light'>
                    With technology advancing daily, so does our app.
                    QuickBusiness like our Phonebook includes many features, you
                    wouldn&apos;t find in most Barbadian apps.
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

export default QuickBusiness;
