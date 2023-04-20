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
            <li>Home</li>
            <li>Events</li>
            <li>Games</li>
            <li>Badges</li>
          </ul>
        </div>

        <div className="reg-login">
          {" "}
          <p>Log in/Register</p>
        </div>
      </div>


      <div className="header-second-line">
        <div className="header-main-img"></div>
      </div>
    </div>
  );
}

export default Header;
