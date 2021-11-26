import LeftBanner from "./LeftBanner";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <Navigation />
      <div className={classes.body_wrapper}>
        <LeftBanner />
        <div className={classes.page_content_wrapper}>
          <div className={classes.page_content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
