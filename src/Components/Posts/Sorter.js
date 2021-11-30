import { useRef } from "react";

function Sorter(props) {
  const sorterRef = useRef();

  function sortHandler() {
    const chosenOption = sorterRef.current.value;
    console.log(chosenOption);
    props.onSort(chosenOption);
  }

  return (
    <div>
      <label>Sort by:</label>
      <select
        id="sort-option"
        className="dropdown"
        onChange={sortHandler}
        ref={sorterRef}
      >
        <option value="date-posted">Date posted</option>
        <option value="author">Author</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  );
}

export default Sorter;
