import { Link } from "react-router-dom";
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <div className={classes.nav_wrapper}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
