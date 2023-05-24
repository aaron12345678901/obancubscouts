import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Aduiltnav from "../../components/Aduiltnav";
import ProfilePictureUploader from "../../components/ProfilePictureUploader";
import Aduilttraining from "../../components/Aduilttraining";

function Aduiltprofile() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  let navigate = useNavigate();
  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    axios
      .get(`http://localhost/php-react/oban-scouts-php/getaduilt.php?id=${id}`)
      .then((response) => {
        setUserData(response.data);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);

  function edit(event) {
    event.preventDefault();
    const days = document.getElementById("days").value;
    const time = document.getElementById("time").value;
    navigate(`/Aduiltprofile`);
    setUpdating(true);

    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/aduiltedit.php?id=${id}&days=${days}&time=${time}`
      )
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) => {
            const newData = [...prevData];
            newData.forEach((data) => {
              data.days_available = days;
              data.times_available = time;
            });
            return newData;
          });
        } else {
          console.log("Failed to update availability");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setUpdating(false);
      });
  }

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
                <div className="Aprofilepic-container">
                  <ProfilePictureUploader />
                </div>

                <div className="A-names">
                  <div className="A-names-seperates">
                    {loading
                      ? userData.map((data) => (
                          <div className="profile-names" key={data.id}>
                            <p>First Name: {data.first_name}</p>
                          </div>
                        ))
                      : null}

                    {loading
                      ? userData.map((data) => (
                          <div className="profile-names" key={data.id}>
                            <p>Surname: {data.last_name}</p>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>

              <div className="A-aboutme">
                {loading
                  ? userData.map((data) => (
                      <p key={data.id}>About me: {data.about_me}</p>
                    ))
                  : null}
              </div>

              <div className="aduilt-pro-bottom-cont">
                <div className="A-passed-course">
                  <ul>
                    <li>
                      {loading
                        ? userData.map((data) => (
                            <span key={data.id}>
                              disclosure: {data.disclosure}
                            </span>
                          ))
                        : null}
                    </li>
                    <li id="no-underline">training attended</li>

                    <li>
                      <Aduilttraining />
                    </li>
                  </ul>
                </div>

                <div className="aduilt-avail">
                  <h2>Availability</h2>

                  {loading
                    ? userData.map((data) => (
                        <div key={data.id}>
                          <div className="day-time-seperator">
                            <label htmlFor="days">days:</label>
                            <input
                              id="days"
                              type="text"
                              defaultValue={data.days_available}
                              name="days"
                            />
                          </div>

                          <div className="day-time-seperator">
                            <label htmlFor="time">time:</label>
                            <input
                              id="time"
                              type="text"
                              defaultValue={data.times_available}
                              name="time"
                            />
                          </div>
                        </div>
                      ))
                    : null}

                  {updating ? (
                    <div>Loading...</div>
                  ) : (
                    <button onClick={edit}>Change Availability</button>
                  )}
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
