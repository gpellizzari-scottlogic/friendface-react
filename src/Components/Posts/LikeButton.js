import { useState } from "react";
import classes from "./LikeButton.module.css";

function LikeButton(props) {
  const [liked, setLiked] = useState(false);

  function clickHandler() {
    console.log("like button pressed");
    if (liked) {
      setLiked(false);
      props.onDislike();
    } else {
      setLiked(true);
      props.onLike();
    }
  }

  return (
    <div className={classes.container}>
        <p className={classes.likes}>{liked ? props.likes+1 : props.likes}</p>
      <button
        type="button"
        className={liked ? classes.active : classes.inActive}
        onClick={clickHandler}
      ></button>
    </div>
  );
}
export default LikeButton;
