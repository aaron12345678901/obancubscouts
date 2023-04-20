import { useEffect, useRef } from "react";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import training1 from "../../images/trainingimages/training1.png";
import training2 from "../../images/trainingimages/training2.png";
import training3 from "../../images/trainingimages/training3.png";
import training4 from "../../images/trainingimages/training4.png";

function Aduiltregtraining() {
  const date = useRef();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  console.log(date);

  useEffect(() => {
    date.current.innerHTML = monthNames[d.getMonth()];
  });

  return (
    <div className="Aduiltprofile-main">
      <div className="A-profile-align">
        <h1>Register for training </h1>
        <p>upcoming training events </p>

        <div className="A-profile-card-training">
          <div className="aduilt-training-page-control">
            <div className="aduilt-training-left-arrow">
              {" "}
              <img src={arrowleft} alt="" />
            </div>
            <div className="aduilt-training-left-arrow">
              {" "}
              <img src={arrowright} alt="" />
            </div>

            <div className="date-training">
              <p id="tdate" ref={date}>
                today
              </p>
              <p>3rd</p>
            </div>
          </div>
          <div className="training-alignment">
            <div className="training-event">
              <div className="training-date">
                <p>4 jul</p>
              </div>
              <div className="training-description">
                <p>
                  Young Leader Training Weekend Fri 4 – Scout Adventures
                  Lochgoilhead, Lochgoilhead Cairndow
                </p>
              </div>
              <div className="training-img">
                {" "}
                <img src={training1} alt="" />
              </div>
            </div>

            <div className="training-border"></div>

            <div className="training-event">
              <div className="training-date">
                <p>10 jul</p>
              </div>
              <div className="training-description">
                <p>Safeguarding Sat 10 – Dilston Scout Campsite</p>
              </div>
              <div className="training-img">
                {" "}
                <img src={training2} alt="" />
              </div>
            </div>

            <div className="training-border"></div>

            <div className="training-event">
              <div className="training-date">
                <p>14 jul</p>
              </div>
              <div className="training-description">
                <p>
                  Tools for the Role (Section Leaders) Sat 14 jul – Blanchland
                  Blanchland, Consett
                </p>
              </div>
              <div className="training-img">
                {" "}
                <img src={training3} alt="" />
              </div>
            </div>

            <div className="training-border"></div>

            <div className="training-event">
              <div className="training-date">
                <p>24 jul</p>
              </div>
              <div className="training-description">
                <p>
                  Tools for the Role Sat, 17:30 Scout Adventures Hawkhirst,
                  Plashetts Hexham
                </p>
              </div>
              <div className="training-img">
                {" "}
                <img src={training4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltregtraining;
