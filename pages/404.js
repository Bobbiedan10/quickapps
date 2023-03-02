// pages/404.js
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page Couldn&apos;t Be Found - QuickApps</title>
      </Head>
      <div className='h-screen pt-20 flex flex-col justify-center items-center'>
        <img
          alt='Quick Apps logo'
          src='/img/QuickAppsLogo.svg'
          className='lg:w-96'
        />
        <div className='space-y-4 max-w-6xl mx-auto dark:text-gray-100 px-4 flex flex-col items-center'>
          <h3 className='text-2xl dark:text-gray-100 font-medium'>
            This page couldn&apos;t be found...
          </h3>
          <h3 className='text-2xl'>
            <Link href='/'>
              <a className='font-bold bg-clip-text bg-gradient-to-tr from-yellow-500 via-yellow-200 to-red-500 text-transparent'>
                Back to home
              </a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
