import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Adminnav from "../../components/Adminnav";
import Admingetaduilttraining from "../../components/Admingetaduilttraining";
import ProfilePicture from "../../components/ProfilePicture";

function Adminregprofile() {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost/php-react/oban-scouts-php/getaduilt.php?id=${id}`)
      .then((response) => {
        setUserData(response.data);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost/php-react/oban-scouts-php/aduiltProfilepic.php?id=${id}`,
        { responseType: "blob" }
      )
      .then((response) => {
        // Convert the image data to a URL and set it as the state variable
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setImageSrc(url);
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }, []);

  // test //////////////////////////

  // test //////////////////////////

  function edit(event) {
    event.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const disclosure = document.getElementById("disclosure").value;
    const about_me = document.getElementById("about_me").value;

    navigate(`/Adminregaduilts`);
    setUpdating(true);

    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/Adminaduiltedit.php?id=${id}&first_name=${first_name}&last_name=${last_name}&disclosure=${disclosure}&about_me=${about_me}`
      )
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) => {
            const newData = [...prevData];
            newData.forEach((data) => {
              data.first_name = first_name;
              data.last_name = last_name;
              data.disclosure = disclosure;
              data.about_me = about_me;
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
        <Adminnav />
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
                <div className="Aprofilepic-container-admin">
                  {imageSrc && <img src={imageSrc} alt="Database Image" />}
                  {!imageSrc && <p>Loading...</p>}
                </div>

                <div className="A-names">
                  <div className="A-names-seperates">
                    {loading
                      ? userData.map((data) => (
                          <div className="profile-names-admin" key={data.id}>
                            <label htmlFor="first_name">first name:</label>
                            <input
                              id="first_name"
                              type="text"
                              defaultValue={data.first_name}
                              name="first_name"
                            />
                          </div>
                        ))
                      : null}

                    {loading
                      ? userData.map((data) => (
                          <div className="profile-names-admin" key={data.id}>
                            <label htmlFor="last_name">surname:</label>
                            <input
                              id="last_name"
                              type="text"
                              defaultValue={data.last_name}
                              name="last_name"
                            />
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>

              {loading
                ? userData.map((data) => (
                    <div className="A-aboutme" key={data.id}>
                      <label htmlFor="about_me">aboutme:</label>
                      <input
                        id="about_me"
                        type="text"
                        title={data.about_me}
                        defaultValue={data.about_me}
                        name="about_me"
                      />
                      <p>{data.about_me}</p>
                    </div>
                  ))
                : null}

              <div className="admin-pro-bottom-cont">
                <div className="A-passed-course">
                  <ul>
                    <li>
                      {loading
                        ? userData.map((data) => (
                            <div className="Admin-disclosure" key={data.id}>
                              <label htmlFor="disclosure">disclosure:</label>
                              <input
                                id="disclosure"
                                type="text"
                                defaultValue={data.disclosure}
                                name="disclosure"
                              />
                            </div>
                          ))
                        : null}
                    </li>
                    <li id="no-underline">training attended</li>

                    <li>
                      <Admingetaduilttraining />
                    </li>
                  </ul>
                </div>

                <div className="aduilt-avail-admin">
                  <h2>Availability</h2>

                  {loading
                    ? userData.map((data) => (
                        <div key={data.id}>
                          <p>days:</p>
                          <p>{data.days_available}</p>

                          <p>times:</p>
                          <p>{data.times_available}</p>

                          <p>registerd to help</p>
                          <p>{data.is_Helper == 1 ? "Yes" : "No"}</p>
                        </div>
                      ))
                    : null}

                  {updating ? (
                    <div>Loading...</div>
                  ) : (
                    <button onClick={edit}>submit edits</button>
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

export default Adminregprofile;
