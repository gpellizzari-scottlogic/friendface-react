import LeftBanner from "./LeftBanner";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <div>
        <LeftBanner />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
