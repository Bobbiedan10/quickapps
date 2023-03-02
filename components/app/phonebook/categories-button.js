import CollectionIcon from "../../icons/collectrion-icon";

function CategoriesButton(props) {
  return (
    <div className=' lg:hidden'>
      <button name='show categories on mobile button' onClick={props.click}>
        <CollectionIcon />
      </button>
    </div>
  );
}
export default CategoriesButton;
