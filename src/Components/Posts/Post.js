import Card from "../UI/Card";
import classes from "./Post.module.css";
import LikeButton from "./LikeButton";
import icon from "../../Images/user_icon.png";
function Post(props) {

  function onLike() {
    console.log("like arrived to Post element!!!");
    updateLikes(props.id, props.likes+1);
  }

  function onDislike(){
    console.log("removing like ");
    updateLikes(props.id, props.likes-1);
  }

  function updateLikes(postID, updatedLikes) {
    console.log("Adding " + updatedLikes + " likes to " + postID);
    fetch(
      "https://friendface-react-90972-default-rtdb.europe-west1.firebasedatabase.app/posts/"+postID+"/likes.json",
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
          <div className={classes.icon}><p><img src={icon} alt="Avatar" className={classes.avatar}></img></p></div>
          <div className={classes.author}><p>{props.author}</p></div>
          <div className={classes.date}><p>{props.date}</p></div>
        </div>
        <div>
          <div className={classes.content}><p>{props.content}</p></div>
          <div className={classes.actions}>
            <LikeButton likes={props.likes} onLike={onLike} onDislike={onDislike} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Post;
