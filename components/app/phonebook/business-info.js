import Link from "next/link";
import { useState } from "react";
import BadgeIcon from "../../icons/badge-icon";
import FacebookIcon from "../../icons/facebook-icon";
import InstagramIcon from "../../icons/instagram-icon";
import classes from "./business-info.module.css";
import TwitterIcon from "../../icons/twitter-icon";
import WhatsappIcon from "../../icons/whatsapp-icon";

function BusinessInfo(props) {
  const [copy, setCopy] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { info, category } = props;

  function locations(obj) {
    let count = 1;
    for (var key in obj) {
      var val = obj[key];
      return (
        <div className='flex flex-col border-b'>
          <h1 className='text-orange-500'>Store {count}</h1>
          <h1>
            {val.address_line1 +
              `, ` +
              (val.address_line2 ? val.address_line2 + ", " : "") +
              val.parish}
          </h1>
        </div>
      );
    }
  }

  function fixSocial(acc) {
    let fix = acc.replace("@", "");
    return fix;
  }

  function fixPhoneNumber(num) {
    let fix = num.replace(/[- )(]/g, "");
    return fix;
  }

  return (
    <div
      onClick={() => {
        showAbout ? setShowAbout(false) : null;
        showOptions ? setShowOptions(false) : null;
      }}
      className='pb-2 space-y-4 relative'>
      <div
        className={showAbout ? classes.about_active : classes.about_inactive}>
        <div className='flex justify-between px-4 py-2 border-b bg-gray-100 dark:bg-gray-700'>
          <h1 className='text-orange-500 font-bold text-lg'>About</h1>
        </div>
        <div className='p-4 h-full bg-gray-100 dark:bg-gray-700'>
          {info.about}
        </div>
      </div>
      <div
        className={
          showOptions ? classes.whatsapp_active : classes.whatsapp_inactive
        }>
        <div className='bg-white dark:bg-gray-600 rounded-xl'>
          <h1 className='p-4 border rounded-t-xl'>
            Start a Chat With <i className='text-orange-500'>{info.name}</i> in
            Whatsapp or copy number.
          </h1>
          <div className='grid grid-cols-2 w-full'>
            <Link
              href={`https://wa.me/1${fixPhoneNumber(info.whatsapp_number)}`}>
              <a
                target='_blank'
                className='p-4 text-green-500 font-bold text-center border rounded-bl-xl'>
                <WhatsappIcon /> Whatsapp
              </a>
            </Link>
            <button
              className='p-4 text-center border rounded-br-xl'
              onClick={() => {
                setCopy("Number Copied");
                navigator.clipboard.writeText(info.whatsapp_number);
              }}>
              Copy number
            </button>
          </div>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='rounded-full w-28 lg:w-36  flex items-center justify-center border border-black dark:border-0 bg-gray-50 overflow-hidden'>
          {props.children}
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='flex items-center text-lg lg:text-2xl font-bold text-orange-500'>
            {info.name}&nbsp;
            {info.CAIPO == true ? <BadgeIcon /> : null}
          </h1>
          <h1 className='text-gray-500 text-lg'>{category}</h1>
          <h1 className=' text-sm font-light'>Since {info.est_year}</h1>
          <h1
            className=' cursor-pointer underline text-sm font-light lg:w-96'
            onClick={() => {
              showAbout ? setShowAbout(false) : setShowAbout(true);
            }}>
            About
          </h1>
        </div>
      </div>
      {info.twitter == "" && info.instagram == "" && info.facebook == "" ? (
        <div className='font-bold'>No Social Media 😅</div>
      ) : (
        <div className='flex gap-x-4 whitespace-nowrap overflow-x-auto'>
          {info.twitter != "" ? (
            <Link href={`https://www.twitter.com/${fixSocial(info.twitter)}`}>
              <a
                target='_blank'
                className='bg-black text-gray-50 dark:bg-gray-100 dark:text-black rounded-lg py-1 px-2 font-bold'>
                <TwitterIcon /> Visit us on Twitter
              </a>
            </Link>
          ) : null}

          {info.instagram != "" ? (
            <Link
              href={`https://www.instagram.com/${fixSocial(info.instagram)}`}>
              <a
                target='_blank'
                className='bg-black text-gray-50 dark:bg-gray-100 dark:text-black rounded-lg py-1 px-2 font-bold'>
                <InstagramIcon /> Visit us on Instagram
              </a>
            </Link>
          ) : null}

          {info.facebook != "" ? (
            <Link href={`https://www.facebook.com/${fixSocial(info.facebook)}`}>
              <a
                target='_blank'
                className='bg-black text-gray-50 dark:bg-gray-100 dark:text-black rounded-lg py-1 px-2 font-bold'>
                <FacebookIcon /> Visit us on Facebook
              </a>
            </Link>
          ) : null}
        </div>
      )}
      <div className='grid lg:grid-cols-3 gap-y-4 gap-x-8'>
        <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            whatsapp number
          </h1>
          <h1
            className='font-semibold text-blue-600 lg:text-lg cursor-pointer'
            onClick={() => {
              showOptions ? setShowOptions(false) : setShowOptions(true);
            }}>
            {info.whatsapp_number}
          </h1>
          {copy ? (
            <h1 className='text-white bg-gray-500 py-1 px-2 w-32 rounded-lg'>
              {copy}
            </h1>
          ) : null}
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            email
          </h1>
          <Link href={`mailto:${info.business_email}`}>
            <a className='text-blue-600 lg:text-lg '>{info.business_email}</a>
          </Link>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            website
          </h1>
          <Link href={info.website ? info.website : "#"}>
            <a target='_blank' className=' truncate text-blue-600 lg:text-lg '>
              {info.website}
            </a>
          </Link>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            Hours of operation
          </h1>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <h1>Sunday</h1>
              {info.working_hours.Sunday ? (
                <h1>
                  {info.working_hours.Sunday.opening} -
                  {" " + info.working_hours.Sunday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Monday</h1>
              {info.working_hours.Monday ? (
                <h1>
                  {info.working_hours.Monday.opening} -
                  {" " + info.working_hours.Monday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Tuesday</h1>
              {info.working_hours.Tuesday ? (
                <h1>
                  {info.working_hours.Tuesday.opening} -
                  {" " + info.working_hours.Tuesday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Wednesday</h1>
              {info.working_hours.Wednesday ? (
                <h1>
                  {info.working_hours.Wednesday.opening} -
                  {" " + info.working_hours.Wednesday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Thursday</h1>
              {info.working_hours.Thursday ? (
                <h1>
                  {info.working_hours.Thursday.opening} -
                  {" " + info.working_hours.Thursday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Friday</h1>
              {info.working_hours.Friday ? (
                <h1>
                  {info.working_hours.Friday.opening} -
                  {" " + info.working_hours.Friday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
            <div className='flex justify-between'>
              <h1>Saturday</h1>
              {info.working_hours.Saturday ? (
                <h1>
                  {info.working_hours.Saturday.opening} -
                  {" " + info.working_hours.Saturday.closing}
                </h1>
              ) : (
                <h1>Closed</h1>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            storefront locations
          </h1>
          {/* <div key={index} className='flex justify-between'>
            <h1>Store {index + 1}</h1>
            <h1>
              {stores.address_line1 +
                ", " +
                stores.address_line2 +
                ", " +
                stores.parish}
            </h1>
          </div> */}
          <div>{locations(info.addresses)}</div>
        </div>

        {/* <div className='flex flex-col gap-1'>
          <h1 className='capitalize font-light lg:text-lg dark:text-gray-300'>
            business profile actions
          </h1>
          <button
            className='text-left text-blue-600 lg:text-lg '
            onClick={() => {
              setCopy("Profile Copied");
              navigator.clipboard.writeText(
                `https://qbb.page.link/?link=https://www.quickservicesapps.com/businesses?id=${info.user_id}&apn=com.quickservices.digitalphonebook&afl=https://www.quickservicesapps.com/businesses?&id=${info.user_id}&ibi=&ifl=https://www.quickservicesapps.com/businesses?id=${info.user_id}&ofl=https://www.quickservicesapps.com/businesses?id=${info.user_id}
                `
              );
            }}>
            Share Business Profile
          </button>
          {copy ? (
            <i className='text-white bg-gray-500 py-1 px-2 flex w-28 rounded-lg'>
              {copy}
            </i>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}
export default BusinessInfo;
