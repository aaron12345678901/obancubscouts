import logo from "../images/fleur-logo.png";

function Childrensheader() {
  return (
    <div className="Header">
      <div className="header-first-line">
        {/* Logo and text */}
        <div className="headerlogo">
          <div className="header-img">
            {/* Display the logo image */}
            <img src={logo} alt="" />
          </div>
          <div className="header-logo-text">
            <p>oban cub scouts</p>
          </div>
        </div>

        {/* First line header links */}
        <div className="first-header-links">
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Games</li>
            <li>Badges</li>
          </ul>
        </div>

        {/* Registration and login section */}
        <div className="reg-login">
          <p id="photo">photo gallery</p>
          <p>log out</p>
        </div>
      </div>

      {/* Second line header */}
      <div className="header-second-line">
        <div className="header-main-img"></div>
      </div>
    </div>
  );
}

export default Childrensheader;