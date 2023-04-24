import { Outlet, Link } from "react-router-dom";

import logo from "../images/fleur-logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="header-first-line">
        <div className="headerlogo">
          <div className="header-img">
            <img src={logo} alt="" />
          </div>
          <div className="header-logo-text">
            <p>oban cub scouts</p>
          </div>
        </div>
        <div className="header-border"></div>

        <div className="first-header-links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="Homeevents">
              <li>Events</li>
            </Link>

            <Link to="Games">
              <li>Games</li>
            </Link>

            <Link to="Badges">
              <li>Badges</li>
            </Link>
          </ul>
        </div>

        <div className="reg-login">

        <Link to="Login">
          <p>Log in/Register</p>
          </Link>
        </div>
      </div>

      <div className="header-second-line">
        <div className="header-main-img"></div>
      </div>
    </div>
  );
}

export default Header;
