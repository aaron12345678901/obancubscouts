import { Link } from "react-router-dom";
import Logout from "./Logout";

function Adminnav() {
  return (
    <div className="Aduiltnav-main">
      <div className="name-logout">
        {/* Render the logout component */}
        <Logout />
      </div>

      <div className="nav-border"></div>

      <div className="Aduilt-nav-links">
        <ul>
          <li>
            {/* Create a link to the "Adminregaduilts" route */}
            <Link to="/Adminregaduilts">registered adults/carers</Link>
          </li>

          <li>
            {/* Create a link to the "Adminchildren" route */}
            <Link to="/Adminchildren">registered children</Link>
          </li>

          <li>
            {/* Create a link to the "Admingallery" route */}
            <Link to="/Admingallery">gallery</Link>
          </li>

          <li>
            {/* Create a link to the "AdminEvents" route */}
            <Link to="/AdminEvents">events</Link>
          </li>

          <li>
            {/* Create a link to the "Admintrainingevents" route */}
            <Link to="/Admintrainingevents">trainingevents</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Adminnav;