import Link from "next/link";
import { Fragment } from "react";
import ArrowRightIcon from "../icons/arrow-right-icon";
import CursorClickIcon from "../icons/cursor-click-icon";
import QrCodeIcon from "../icons/qr-code-icon";
import SparkleIcon from "../icons/sparkle-icon";
import TemplateIcon from "../icons/template-icon";

function Description() {
  return (
    <Fragment>
      <div className='max-w-6xl mx-auto xl:h-screen flex space-y-2 flex-col justify-center px-4 py-14'>
        <div className='flex-col lg:flex-row flex items-center gap-4'>
          <div className='flex justify-center items-center lg:w-6/12'>
            <img
              alt='Quick Apps logo'
              src='/img/QuickAppsLogo.svg'
              className='lg:w-full'
            />
          </div>
          <div className='flex flex-col md:col-span-2 lg:col-span-1 items-center justify-center space-y-6 lg:w-6/12'>
            <div className='flex flex-col space-y-4'>
              <h1 className='font-bold text-4xl lg:text-5xl text-center lg:text-left dark:text-gray-50'>
                Amazing Apps
              </h1>
              <div className='w-full'>
                <p className='text-xl font-light text-center lg:text-left md:mx-16 lg:mx-0 lg:w-full dark:text-gray-300'>
                  Building apps to make your life easier. Our apps stand apart
                  with excellent user interface and innovative technology.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:w-full lg:w-full justify-center md:justify-center lg:justify-start '>
              <div className=' space-y-2 '>
                <p className='flex items-center font-semibold dark:text-gray-300'>
                  <TemplateIcon /> Stunning Layouts
                </p>
                <p className='flex items-center font-semibold dark:text-gray-300'>
                  <CursorClickIcon /> Easy Navigation
                </p>
                <p className='flex items-center font-semibold dark:text-gray-300'>
                  <QrCodeIcon /> Problem solving algorithms
                </p>
                <p className='flex items-center font-semibold dark:text-gray-300'>
                  <SparkleIcon /> Innovation
                </p>
              </div>
              <div className='flex-col col-span-1 space-y-2'>
                <p className='flex items-center font-normal dark:text-gray-300'>
                  <ArrowRightIcon /> Eye catching designs
                </p>
                <p className='flex items-center font-normal dark:text-gray-300'>
                  <ArrowRightIcon /> Find your way around
                </p>
                <p className='flex items-center font-normal dark:text-gray-300'>
                  <ArrowRightIcon /> Quick solutions
                </p>
                <p className='flex items-center font-normal dark:text-gray-300'>
                  <ArrowRightIcon /> Advanced technology
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <Link href='/contact'>
            <a className='text-2xl border-4 rounded-full py-1 px-2 md:py-3 md:px-6  bg-clip-padding dark:border-orange-50 text-orange-50 font-extrabold bg-gradient-to-tr transform hover:scale-105 transition ease-in-out duration-300 from-orange-500 to-orange-600'>
              Get In Touch!
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Description;
