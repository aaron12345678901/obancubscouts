import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Aduiltnav from "../../components/Aduiltnav";
import ProfilePictureUploader from "../../components/ProfilePictureUploader";
import Aduilttraining from "../../components/Aduilttraining";

function Aduiltprofile() {
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);

  // getting id from local storage and converting to a javascript object to be used
  let id = JSON.parse(window.localStorage.getItem("id"));

  // getting users data from server using the id that was retrieved
  useEffect(() => {
    axios
      .get(`http://localhost/php-react/oban-scouts-php/getaduilt.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);

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


                  <ProfilePictureUploader></ProfilePictureUploader>


                  </div>


                  

                <div className="A-names">
                  <div className="A-names-seperates">
                    {loading
                      ? userData.map((data) => (
                          <>
                          <div className="profile-names">
                            <p>First Name: {data.first_name}</p>
                         </div>
                          </>
                        ))
                      : null}

                    {loading
                      ? userData.map((data) => (
                          <>
                          <div className="profile-names">
                            <p>Surname: {data.last_name}</p>
                            </div>
                          </>
                        ))
                      : null}
                  </div>
                </div>
              </div>

              <div className="A-aboutme">
                {loading
                  ? userData.map((data) => (
                      <>
                        <p>About me: {data.about_me}</p>
                      </>
                    ))
                  : null}
              </div>

              <div className="aduilt-pro-bottom-cont">
                <div className="A-passed-course">
                  <ul>
                    <li>
                      {loading
                        ? userData.map((data) => (
                            <>disclosure: {data.disclosure}</>
                          ))
                        : null}
                    </li>
                    <li id="no-underline">training attended</li>

                    <li>
                      {" "}
                      <Aduilttraining />{" "}
                    </li>
                  </ul>

       
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
