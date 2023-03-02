import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./mobile-nav.module.css";

function MobileNav(props) {
  const router = useRouter();
  return (
    <div className={`${props.show ? "" : "hidden"}`}>
      <div className={classes.mobile_nav}>
        <Link href='/'>
          <a
            onClick={props.onClick}
            className={router.pathname == "/" ? `${classes.active}` : ""}>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a
            onClick={props.onClick}
            className={router.pathname == "/about" ? `${classes.active}` : ""}>
            About
          </a>
        </Link>

        <Link href='/contact'>
          <a
            onClick={props.onClick}
            className={
              router.pathname == "/contact" ? `${classes.active}` : ""
            }>
            Contact
          </a>
        </Link>
        <Link href='/apps'>
          <a
            onClick={props.onClick}
            className={
              router.pathname.includes("apps") ||
              router.pathname.includes("businesses")
                ? `${classes.active}`
                : ""
            }>
            Apps
          </a>
        </Link>
        <Link href='/services'>
          <a
            onClick={props.onClick}
            className={
              router.pathname.includes("services") ? `${classes.active}` : ""
            }>
            Services
          </a>
        </Link>
      </div>
    </div>
  );
}
export default MobileNav;
