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

        <div className="header-links-layout">
          <div className="first-header-links">
            <ul>
              {/* Creating links to different routes */}
              <Link to="/">
                <li>
                  <button>Home</button>
                </li>
              </Link>

              <Link to="Homeevents">
                <li>
                  <button>Events</button>
                </li>
              </Link>

              <Link to="Games">
                <li>
                  <button>Games</button>
                </li>
              </Link>

              <Link to="Badges">
                <li>
                  <button>Badges</button>
                </li>
              </Link>

              <Link to="Gallery">
                <li>
                  <button>gallery</button>
                </li>
              </Link>
            </ul>
          </div>

          <div className="reg-login">
            <Link to="Login">
              {/* Creating a link to the Login route */}
              <p>
                <button>Log in/Register</button>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-second-line">
        <div className="header-main-img"></div>
      </div>
    </div>
  );
}

export default Header;