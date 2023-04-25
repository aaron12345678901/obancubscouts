import profilepic from "../images/profilepics/aduilt-profile-pic.png";
import { Outlet, Link } from "react-router-dom";

function Aduiltnav() {
  return (
    <div className="Aduiltnav-main">
      <div className="profile-pic">
        <img src={profilepic} alt="" />
      </div>

      <div className="name-logout">
        <ul>
          <li>Jhon doe</li>
          <li id="Alogout">Log out</li>
        </ul>
      </div>

      <div className="nav-border"></div>

      <div className="Aduilt-nav-links">
        <ul>
          <li>
            {" "}
            <Link to="/Aduiltprofile">my profile </Link>
          </li>

          <li>
            {" "}
            <Link to="/Aduiltschildp"> my child</Link>
          </li>

          <li>
            {" "}
            <Link to="/Aduiltseventsreg">my events </Link>
          </li>

          <li>
            <Link to="/Aduiltreghelper">register as helper</Link>
          </li>

          <li>
            {" "}
            <Link to="/Aduiltregdisclosure">
              {" "}
              register for disclosure{" "}
            </Link>{" "}
          </li>

          <li>
            <Link to="/Aduiltregtraining">register for training </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aduiltnav;
