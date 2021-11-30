import Card from "../UI/Card";
import classes from "./Post.module.css";
function Post(props) {
  return (
    <Card>
    <div className={classes.item}>
      <div className={classes.post_header}>
        <div className={classes.icon}>Icon</div>
        <div className={classes.author}>{props.author}</div>
        <div className={classes.date}>{props.date}</div>
      </div>
      <div>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.actions}>
          <button type="button">like</button>
          <div>{props.likes}</div>
        </div>
      </div>
    </div>
    </Card>
    
  );
}

export default Post;
