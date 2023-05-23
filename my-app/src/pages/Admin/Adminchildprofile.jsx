import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Adminnav from "../../components/Adminnav";

function Adminchildprofile() {
  // two states one to store user data and one to see if data is still loading
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [updating, setUpdating] = useState(false);

  let navigate = useNavigate();

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

  // getting users data from server using the id that was retrieved
  useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/get.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);

  function edit(event) {
    event.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const rank = document.getElementById("rank").value;
    const term_of_service = document.getElementById("term_of_service").value;
    const outstanding_merit =
      document.getElementById("outstanding_merit").value;

    navigate(`/Adminregaduilts`);
    setUpdating(true);

    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/Adminchildedit.php?id=${id}&first_name=${first_name}&last_name=${last_name}&rank=${rank}&term_of_service=${term_of_service}&outstanding_merit=${outstanding_merit}`
      )
      .then((response) => {
        if (response.data.success) {
          setUserData((prevData) => {
            const newData = [...prevData];
            newData.forEach((data) => {
              data.first_name = first_name;
              data.last_name = last_name;
              data.rank = rank;
              data.term_of_service = term_of_service;
              data.outstanding_merit = outstanding_merit;
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
      <div className="admin-childrens-profile">
        <div className="admin-profile-container">
          <div className="admin-child-profile-inner">
            <div className="cprofile-first-line">
              <div className="profile-pic">
                {imageSrc && <img src={imageSrc} alt="Database Image" />}
                {!imageSrc && <p>Loading...</p>}
              </div>

              <div className="cfirst-details">
                {loading
                  ? userData.map((data) => (
                      <>
                        <p>name:</p>
                        <input
                          id="first_name"
                          type="text"
                          defaultValue={data.first_name}
                          name="first_name"
                        />

                        <p>surname:</p>
                        <input
                          id="last_name"
                          type="text"
                          defaultValue={data.last_name}
                          name="last_name"
                        />

                        <p>rank:</p>
                        <input
                          id="rank"
                          type="text"
                          defaultValue={data.rank}
                          name="rank"
                        />

                        <p>term of service:</p>
                        <input
                          id="term_of_service"
                          type="text"
                          defaultValue={data.term_of_service}
                          name="term_of_service"
                        />
                      </>
                    ))
                  : null}
              </div>
            </div>

            <div className="cprofile-merits">
              <h2>outstanding merits:</h2>

              {loading
                ? userData.map((data) => (
                    <div className="A-aboutme" key={data.id}>
                      <label htmlFor="outstanding_merit">aboutme:</label>
                      <input
                        id="outstanding_merit"
                        type="text"
                        title={data.outstanding_merit}
                        defaultValue={data.outstanding_merit}
                        name="outstanding_merit"
                      />
                      <p>{data.outstanding_merit}</p>
                    </div>
                  ))
                : null}
            </div>

            <div className="admin_submit_button">
              <div className="cprofile-button">
                <button onClick={edit}>submit edits</button>
              </div>
            </div>

            <div className="cprofile_button_layout">
              <div className="cprofile-button">
                <Link to={`/Adminchildmerits/${id}`}>
                  <button>merit badges</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminchildprofile;
