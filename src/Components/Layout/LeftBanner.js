import classes from "./LeftBanner.module.css";

function LeftBanner(props) {
  return (
    <div className={classes.left_banner}>
      <div className={classes.content}><h1>Friend Face</h1></div>
    </div>
  );
}

export default LeftBanner;
