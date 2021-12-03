import Centered from "../UI/Centered";
import classes from "./Avatar.module.css";
function Avatar(props) {
  return (
    <img
      src={props.icon}
      alt="Avatar"
      className={classes.avatar}
      style={{ background: props.color, width: props.size, height: props.size }}
    ></img>
  );
}

export default Avatar;
