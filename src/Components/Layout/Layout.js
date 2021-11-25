import LeftBanner from "./LeftBanner";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <Navigation />
      <div className={classes.body_wrapper}>
        <LeftBanner />
        <div className={classes.page_content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
