import { Outlet, Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";
import Logout from "./Logout";
function Adminnav() {
  return (
    <div className="Aduiltnav-main">
      <div className="name-logout">
        <Logout />
      </div>

      <div className="nav-border"></div>

      <div className="Aduilt-nav-links">
        <ul>
          <li>
            {" "}
            <Link to="/Adminregaduilts">registered adults/carers</Link>
          </li>

          <li>
            {" "}
            <Link to="/Adminchildren">registered children</Link>
          </li>

          <li>
            {" "}
            <Link to="/Admingallery">gallery</Link>
          </li>

          <li>
            {" "}
            <Link to="/AdminEvents">events</Link>
          </li>

          <li>
            {" "}
            <Link to="/Admintrainingevents">trainingevents</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Adminnav;
