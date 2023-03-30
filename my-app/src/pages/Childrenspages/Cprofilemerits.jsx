import cprofile from "../../images/profilepics/cprofilepic.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";







function Cprofilemerits() {
  return (
    <div className="childrens-profile">
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

          <div className="cprofile-badge"><p>first1</p></div>
          <div className="cprofile-badge">first2</div>
          </div>
          <div className="cprofile-badge-order">

          <div className="cprofile-badge">second2</div>
          <div className="cprofile-badge">second2</div>
          </div>
          <div className="cprofile-badge-order">

          <div className="cprofile-badge"><p>third1</p></div>
          <div className="cprofile-badge"><p>third2</p></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cprofilemerits;
