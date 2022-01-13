import Card from "../UI/Card";
import classes from "./Post.module.css";
import LikeButton from "./LikeButton";
import icon from "../../Images/user_icon.png";
import ProfileContext from "../../Store/profile-context";
import { useContext } from "react/cjs/react.development";
import Avatar from "../Profile/Avatar";

function Post(props) {
  const profileCtx = useContext(ProfileContext);
  function onLike() {
    console.log("like arrived to Post element!!!");
    updateLikes(props.id, props.likes + 1);
  }

  function onDislike() {
    console.log("removing like ");
    updateLikes(props.id, props.likes);
  }

  function updateLikes(postID, updatedLikes) {
    console.log("Adding " + updatedLikes + " likes to " + postID);
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
        postID +
        "/likes.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedLikes),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("like update successful");
    });
  }

  return (
    <Card>
      <div className={classes.item}>
        <div className={classes.post_header}>
          <div className={classes.icon}>
            <Avatar icon={icon} color={props.color} size="50px"/>
          </div>
          <div className={classes.author}>
            <p>{props.author}</p>
          </div>
          <div className={classes.date}>
            <p>{props.date}</p>
          </div>
        </div>
        <div>
          <div className={classes.content}>
            <p>{props.content}</p>
          </div>
          <div className={classes.actions}>
            <LikeButton
              likes={props.likes}
              onLike={onLike}
              onDislike={onDislike}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Post;
