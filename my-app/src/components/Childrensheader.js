import logo from "../images/fleur-logo.png";

function Childrensheader() {
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

        <div className="first-header-links">
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Games</li>
            <li>Badges</li>
          </ul>
        </div>

        <div className="reg-login">
          <p id="photo">photo gallery</p>

          <p>log out</p>
        </div>
      </div>

      <div className="header-second-line">
        <div className="header-main-img"></div>
      </div>
    </div>
  );
}

export default Childrensheader;
