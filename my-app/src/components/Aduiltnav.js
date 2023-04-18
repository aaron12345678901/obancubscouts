import profilepic from "../images/profilepics/aduilt-profile-pic.png";

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
          <li>my profile </li>
          <li>my child </li>
          <li>my events </li>
          <li>register as helper</li>
          <li>register for disclosure </li>
          <li>register for training  </li>
        </ul>

       </div>

    </div>
  );
}

export default Aduiltnav;
