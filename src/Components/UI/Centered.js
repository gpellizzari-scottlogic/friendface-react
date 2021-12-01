import classes from "./Centered.module.css";

function Centered(props) {
  return <div className={classes.main}>{props.children}</div>;
}

export default Centered;
