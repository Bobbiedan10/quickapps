function Button(props) {
  return (
    <button
      className='py-1 px-2 lg:py-2 lg:px-4   shadow-md bg-orange-500 rounded-md text-white font-bold'
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
