import { Outlet, Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import Logout from "./Logout";
function Aduiltnav() {
  return (
    <div className="Aduiltnav-main">
      <div className="profile-pic">
        {/* <img src={profilepic} alt="" /> */}
        <ProfilePicture />
      </div>

      <div className="name-logout">
        <Logout />
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
            <Link to="/Aduiltregtraining">registerd training </Link>{" "}
          </li>

          <li>
            <Link to="/Aduiltgallery">gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aduiltnav;
