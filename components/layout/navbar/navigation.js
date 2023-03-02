import classes from "./navigation.module.css";
import Link from "next/link";
import PrimaryNav from "./primary-nav";
import Image from "next/image";
import MobileMenuBtn from "./mobile-menu-btn";

function Navigation(props) {
  return (
    <div className={classes.navigation}>
      <div className={classes.logo}>
        <Link href='/'>
          <a className='h-14 w-14 sm:w-20'>
            <Image
              alt='Quick Apps logo'
              width={60}
              height={60}
              src='/img/QA_Logo.svg'
            />
          </a>
        </Link>
      </div>
      <PrimaryNav />
      <MobileMenuBtn onClick={props.parentCallback} />
    </div>
  );
}

export default Navigation;
