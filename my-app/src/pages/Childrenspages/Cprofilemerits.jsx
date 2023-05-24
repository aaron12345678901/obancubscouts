import { Link } from "react-router-dom";
import Childsmerits from "../../components/Childsmerits";
import axios from "axios";
import React, { useState, useEffect } from "react";

import ProfilePicture from "../../components/ProfilePicture";

function Cprofilemerits() {
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);

  // getting id from local storage and converting to a javascript object to be used
  let id = JSON.parse(window.localStorage.getItem("id"));

  // getting users data from server using the id that was retrieved
  useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/get.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);

  return (
    <div className="childrens-profile">
      <div className="profile-container">
        <div className="cprofile-first-line">
          <div className="profile-pic">
            <ProfilePicture />
          </div>

          <div className="cfirst-details">
            {loading
              ? userData.map((data) => (
                  <>
                    <p>name:{data.first_name}</p>
                    <p>rank:{data.rank}</p>
                    <p>term of service:{data.term_of_service}</p>
                  </>
                ))
              : null}
          </div>
        </div>

        <div className="cprofile-badges-container">
          <Childsmerits></Childsmerits>
        </div>
        <div className="cprofile_button_layout">
          <div className="cprofile-button">
            <Link to="/Childrensprofile">
              <button>Back</button>{" "}
            </Link>
          </div>

          <div className="cprofile-button">
            <Link to="/Childsgallery">
              <button>Gallery</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cprofilemerits;
