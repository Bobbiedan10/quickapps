import Link from "next/link";
import FacebookIcon from "../../icons/facebook-icon";
import InstagramIcon from "../../icons/instagram-icon";
import EnvelopeIcon from "../../icons/mail-icon";
import TwitterIcon from "../../icons/twitter-icon";
import WhatsappIcon from "../../icons/whatsapp-icon";
function Footer() {
  return (
    <div
      className='relative bg-gray-300 dark:bg-black p-14 
    space-y-10 text-center lg:text-left '>
      <div className='max-w-6xl mx-auto'>
        <h1 className='font-semibold text-xl dark:text-gray-100 '>QuickApps</h1>
        <p className='dark:text-gray-400 text-gray-700'>
          Building amazing apps for amazing people.
        </p>
      </div>
      <div className='grid md:grid-cols-4 max-w-6xl mx-auto gap-4'>
        <div>
          <h1 className='font-semibold text-xl dark:text-gray-100 '>
            Services
          </h1>
          <div>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>
                <Link href='/services'>App Development</Link>
              </li>
              <li>
                <Link href='/services'>Web Development</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-xl dark:text-gray-100 '>
            Useful Links
          </h1>
          <div>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li>
                <Link href='/apps'>Apps</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/guidelines'>Guidelines</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-xl dark:text-gray-100'>Legal</h1>
          <div>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>
                <Link href='/terms'>Terms & Conditions</Link>
              </li>
              <li>
                <Link href='/privacypolicy'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-xl dark:text-gray-100'>
            I Own A Business
          </h1>
          <div>
            <ul className='dark:text-gray-400 text-gray-700'>
              <li>
                <Link href='/apps/quickbusiness'>Download QuickBusiness</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-col items-center gap-4'>
        <div className='flex items-center justify-center dark:text-gray-400 text-gray-700 space-x-10'>
          <Link href='https://wa.me/13045641223'>
            <a target='_blank'>
              <WhatsappIcon />
            </a>
          </Link>
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
          <Link href='mailto:support@quickservicesapps.com'>
            <a target='_blank'>
              <EnvelopeIcon />
            </a>
          </Link>
        </div>
        <div className='dark:text-gray-400 text-gray-700'>QuickApps © 2022</div>
      </div>
    </div>
  );
}

export default Footer;
