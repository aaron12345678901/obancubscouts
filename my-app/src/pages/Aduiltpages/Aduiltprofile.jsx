import placeholder from "../../images/profilepics/placeholderpic.png";
import tick from "../../images/tick.png";
import Aduiltnav from "../../components/Aduiltnav";

function Aduiltprofile() {
  return (

   <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Aduiltnav />
      </div>


    <div className="Aduiltprofile-main">
      <div className="A-profile-align">
        <h1>my profile </h1>
        <p>set your name bio and other public information </p>
       
        <div className="profile-head-elements">
          <h2>Profile</h2>
        </div>

        <div className="A-profile-card">
          <div className="A-inner-profile-card">
            <div className="profilepic-and-names">
              <div className="Aprofilepic">
                <img src={placeholder} alt="" />
                <p>click to change profile picture </p>
              </div>

              <div className="A-names">
                <form action="">
                  <input
                    type="text"
                    id="Afname"
                    name="Afname"
                    value="first name:"
                  ></input>{" "}
                  <br />
                  <input
                    type="text"
                    id="Asname"
                    name="Asname"
                    value="surname:"
                  ></input>
                </form>
              </div>
            </div>

            <div className="A-aboutme">
              <form action="">
                <input
                  type="text"
                  id="A-about"
                  name="A-about"
                  value="about me:"
                ></input>
              </form>
            </div>

            <div className="aduilt-pro-bottom-cont">
              <div className="A-passed-course">
                <ul>
                  <li>
                    disclosure: <img src={tick} alt="" />{" "}
                  </li>
                  <li id="no-underline">training attended</li>
                  <li>first aid level 3</li>
                  <li>group leader </li>
                  <li>water safety</li>
                  <li>intro to climbing </li>
                </ul>
              </div>

              <div className="aduilt-edit-btn-container">
                <button> click submit edits</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Aduiltprofile;
