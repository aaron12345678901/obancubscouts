import cprofile from "../../images/profilepics/cprofilepic.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import badge3 from "../../images/Badges/badge3.png";
import badge2 from "../../images/Badges/badge2.png";
import badge5 from "../../images/Badges/badge5.png";
import badge6 from "../../images/Badges/badge6.png";
import badge8 from "../../images/Badges/badge8.png";
import badge9 from "../../images/Badges/badge9.png";

function Aduiltchildmerits() {
  return (
    <div className="Aduilt-child-merits">
      <div className="aduilt-childrens-profile">
        <div className="aduilts-child-p-heading">
          <h1>my child</h1>
        </div>
        <div className="profile-container">
          <div className="cprofile-first-line">
            <div className="profile-img">
              <img src={cprofile} alt="" />
            </div>

            <div className="cfirst-details">
              <p>Name: child 1</p>
              <p>Rank: scout leader</p>
              <p>Term of service: 2y 10 m</p>
            </div>
          </div>
          <div className="merit-counter">
            <p>17 out of 200</p>
            <p>merit badges achieved </p>
          </div>
          <div className="arrow-container">
            <div className="arrow-1">
              {" "}
              <img src={arrowleft} alt="" />
            </div>
            <div className="arrow-2">
              {" "}
              <img src={arrowright} alt="" />
            </div>
          </div>

          <div className="cprofile-badges-container">
            <div className="cprofile-badge-order">
              <div className="cprofile-badge">
                {" "}
                <img src={badge3} alt="" />
                <p id="badgep">bush</p>
              </div>
              <div className="cprofile-badge">
                {" "}
                <img src={badge2} alt="" />
                <p id="badgep">Air Researcher</p>
              </div>
            </div>
            <div className="cprofile-badge-order">
              <div className="cprofile-badge">
                {" "}
                <img src={badge5} alt="" />
                <p id="badgep">community aid </p>
              </div>
              <div className="cprofile-badge">
                {" "}
                <img src={badge6} alt="" />
                <p id="badgep">instructor</p>
              </div>
            </div>
            <div className="cprofile-badge-order">
              <div className="cprofile-badge">
                <p>
                  {" "}
                  <img src={badge8} alt="" />
                  <p id="badgep">craft</p>
                </p>
              </div>
              <div className="cprofile-badge">
                <p>
                  {" "}
                  <img src={badge9} alt="" />
                  <p id="badgep"> Seat Rowing</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltchildmerits;
