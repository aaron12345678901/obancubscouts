import cprofile from "../../images/profilepics/cprofilepic.png";
import {  Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Childrensprofile() {
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
          <div className="profile-img">
            <img src={cprofile} alt="" />
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

        <div className="cprofile-merits">
          <h2>outstanding merits:</h2>
          <p>
            By 1915 Bowen had executed a group of experimental studies that
            proved to be critically important to petrology and formed the basis
            of his critical review The Later Stages of the Evolution of the
            Igneous Rocks (1915), a paper of such outstanding merit that it
            established Bowen's position at the age of 28 as an international
            figure in petrology.
          </p>
        </div>

        <div className="cprofile-button">

        <Link to="/Cprofilemerits">
          <button>merit badges</button> </Link>
        </div>
      </div>
    </div>
  );
}

export default Childrensprofile;
