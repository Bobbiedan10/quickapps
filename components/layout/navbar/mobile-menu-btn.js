import HamburgerIcon from "../../icons/hamburger-icon";

function MobileMenuBtn(props) {
  return (
    <button name="mobile navigation button"
      className='md:hidden flex items-center px-2 focus:outline-none'
      onClick={props.onClick}>
      <HamburgerIcon />
    </button>
  );
}

export default MobileMenuBtn;
