import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import ServiceRequest from "../../components/services/service-request";
function Services() {
  return (
    <div>
      <Head>
        <title>Services - QuickApps</title>
      </Head>
      <div className="pt-14 bg-white ">
        <div className="">
          <div className=' bg-[url("/img/support_background.png")] bg-cover md:h-64 md:bg-right  xl:bg-contain bg-no-repeat lg:h-80'>
            <div className="max-w-6xl h-full flex mx-auto lg:py-8 px-2 lg:px-8">
              <div className="md:w-80 lg:w-full xl:w-full h-full space-y-4 flex flex-col justify-center text-black">
                <h1 className="lg:text-4xl font-semibold text-left">
                  Get help with the services you need!
                </h1>
                <div className="sm:w-2/3 md:w-96 lg:w-1/2 lg:text-xl">
                  <p>
                    We want to help with your project but first give us a few
                    details so we can suggest the best possible solution.
                  </p>
                </div>
                <div className="py-4 xl:pt-8">
                  <Link href="#form">
                    <a className="py-2 px-8 rounded-full bg-blue-500 transition ease-in-out hover:bg-blue-400 text-white">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="form"
        className="lg:py-16 h-screen w-full flex flex-col items-center justify-center mx-auto px-4 pb-4 gap-8 lg:gap-16 bg-no-repeat bg-cover bg-center bg-opacity-50 dark:bg-gray-800"
      >
        <h1 className="text-2xl text-center lg:text-4xl font-light ">
          Give us the <i className="text-orange-500 underline">details</i> so we
          can give you the <i className="text-orange-500 underline">solution</i>
          .
        </h1>
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <ServiceRequest />
        </AnimatePresence>
      </div>
      {/* <div className='xl:h-screen grid md:grid-cols-5 gap-8 items-center pb-4 md:pt-40 lg:pt-44 pt-24 mx-auto max-w-6xl z-20 relative p-4'>
        <div className='col-span-2 space-y-6 '>
          <div className='dark:text-gray-50 capitalize xl:text-7xl lg:text-6xl text-4xl'>
            <h1 className='font-extralight tracking-wider'>Business</h1>
            <h1 className='font-semibold tracking-wide'>Services</h1>
          </div>
          <div>
            <p className='dark:text-gray-500 font-light lg:text-lg'>
              We combine technologies and passion to bring you the best results
              in web and app design. Join our community to start building your
              website and app.
            </p>
          </div>
          <button className='md:text-lg px-2 py-1 md:px-4 md:py-2 shadow rounded-full bg-orange-500 text-gray-50 border-2 border-gray-300 hover:bg-orange-400 transition ease-in-out duration-300 font-bold'>
            Learn More
          </button>
        </div>

        <div className='col-span-3 flex items-center justify-center w-full'>
          <img alt='' src='/img/builder.svg' />
        </div>
      </div>
      <div className='pt-24 mx-auto max-w-6xl'></div> */}
    </div>
  );
}

export default Services;
