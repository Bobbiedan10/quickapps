import Head from "next/head";
import Link from "next/link";
import FacebookIcon from "../../components/icons/facebook-icon";
import TwitterIcon from "../../components/icons/twitter-icon";
import InstagramIcon from "../../components/icons/instagram-icon";

function About() {
  return (
    <div className="">
      <Head>
        <title>About Us - QuickApps</title>
      </Head>
      <div className="xl:h-screen flex flex-col justify-center max-w-6xl mx-auto pt-16 space-y-4">
        <h1 className="text-5xl text-center max-w-6xl px-4 text-orange-600 font-medium">
          About Us
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-5 justify-center items-center space-y-4">
          <div className="col-span-5 flex flex-col items-center xl:items-start xl:col-span-3 space-y-4 dark:text-gray-100 px-4 mx-auto">
            <p className="text-lg font-medium">
              We bring amazing apps to amazing people.
            </p>
            <p className="text-lg font-light">
              We are a collective group of thinkers and doers. Located in
              Barbados, our team comprises of 4 dexterous developers - two
              application developers and two web developers. Motivated by
              Barbados’ mission to go digital, our team is always examining ways
              in which we can help transform, propel and innovate technology in
              Barbados. We believe the best technology always stem from the
              phrase “what if”. That’s why at QuickApps we study the different
              habits of people, with the common goal of assisting to make their
              life easier. Because learning from people implies we are learning
              from the best. With a keen eye on the future, we’re both willing
              excited to be a part of creating it.
            </p>
          </div>

          <div className="w-full col-span-5 xl:col-span-2 h-full flex justify-center">
            <img
              src="/img/QuickAppsLogo.svg"
              className="w-full h-full"
              alt="Quick Apps logo"
            />
          </div>
        </div>
      </div>

      {/* <div className='xl:h-screen flex flex-col justify-center max-w-6xl mx-auto pb-14 space-y-4 px-4'>
        <div className='mx-auto'>
          <h1 className='text-5xl font-medium dark:text-gray-100'>Our Team</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto justify-center items-center w-full gap-4'>
          <div className='w-full rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-600 dark:text-gray-100'>
            <div className='relative'>
              <img
                src='/img/pp2.jpg'
                className='w-full object-cover object-center'
                alt='profile picture Jelani Nicholls'
              />
              <h1 className='absolute bottom-1.5 dark:bg-white dark:text-gray-900 bg-black text-gray-100 p-2 rounded-tr-lg'>
                Jelani Nicholls
              </h1>
            </div>

            <div className='w-full p-4 space-y-2'>
              <div className='text-center'>
                <h1 className='font-light'>App Developer</h1>
              </div>
              <div className='flex justify-center space-x-4'>
                <Link href='https://facebook.com/quickappsbb'>
                  <a target='_blank'>
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href='https://www.twitter.com/_quickapps'>
                  <a target='_blank'>
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href='https://instagram.com/_quickapps?igshid=fc0u446pmp9'>
                  <a target='_blank'>
                    <InstagramIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-600 dark:text-gray-100'>
            <div className='relative'>
              <img
                src='/img/pp3.jpg'
                className='w-full object-cover object-center'
                alt='profile picture Tabari Rudder-Fields'
              />
              <h1 className='absolute bottom-1.5 dark:bg-white dark:text-gray-900 bg-black text-gray-100 p-2 rounded-tr-lg'>
                Tabari Rudder-Fields
              </h1>
            </div>

            <div className='w-full p-4 space-y-2'>
              <div className='text-center'>
                <h1 className='font-light'>App & Web Developer</h1>
              </div>
              <div className='flex justify-center space-x-4'>
                <Link href='https://facebook.com/quickappsbb'>
                  <a target='_blank'>
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href='https://www.twitter.com/_quickapps'>
                  <a target='_blank'>
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href='https://instagram.com/_quickapps?igshid=fc0u446pmp9'>
                  <a target='_blank'>
                    <InstagramIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-600 dark:text-gray-100'>
            <div className='relative'>
              <img
                src='/img/pp1.jpg'
                className='w-full object-cover object-center'
                alt='profile picture Ramon Dalrymple'
              />
              <h1 className='absolute bottom-1.5 dark:bg-white dark:text-gray-900 bg-black text-gray-100 p-2 rounded-tr-lg'>
                Ramon Dalrymple
              </h1>
            </div>

            <div className='w-full p-4 space-y-2'>
              <div className='text-center'>
                <h1 className='font-light'>Web Developer</h1>
              </div>
              <div className='flex justify-center space-x-4'>
                <Link href='https://facebook.com/quickappsbb'>
                  <a target='_blank'>
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href='https://www.twitter.com/_quickapps'>
                  <a target='_blank'>
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href='https://instagram.com/_quickapps?igshid=fc0u446pmp9'>
                  <a target='_blank'>
                    <InstagramIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full rounded-2xl shadow overflow-hidden bg-white dark:bg-gray-600 dark:text-gray-100'>
            <div className='relative'>
              <img
                src='/img/pp4.jpg'
                className='w-full object-cover object-center'
                alt='profile picture Aron Banfield'
              />
              <h1 className='absolute bottom-1.5 dark:bg-white dark:text-gray-900 bg-black text-gray-100 p-2 rounded-tr-lg'>
                Aron Banfield
              </h1>
            </div>

            <div className='w-full p-4 space-y-2'>
              <div className='text-center'>
                <h1 className='font-light'>Web Developer</h1>
              </div>
              <div className='flex justify-center space-x-4'>
                <Link href='https://facebook.com/quickappsbb'>
                  <a target='_blank'>
                    <FacebookIcon />
                  </a>
                </Link>
                <Link href='https://www.twitter.com/_quickapps'>
                  <a target='_blank'>
                    <TwitterIcon />
                  </a>
                </Link>
                <Link href='https://instagram.com/_quickapps?igshid=fc0u446pmp9'>
                  <a target='_blank'>
                    <InstagramIcon />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
