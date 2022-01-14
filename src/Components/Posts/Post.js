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
    updateLikes(props.id, "like");
  }

  function onDislike() {
    updateLikes(props.id, "dislike");
  }

  function updateLikes(postID, action) {
    const url = "http://localhost:8080/userposts/"+ action +"/" + postID;
    fetch(
      url,
      {
        method: "PUT",
        body: JSON.stringify(postID),
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
