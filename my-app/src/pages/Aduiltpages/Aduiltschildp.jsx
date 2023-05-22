import cprofile from "../../images/profilepics/cprofilepic.png";
import Aduiltnav from "../../components/Aduiltnav";
import {  Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";





function Aduiltschildp() {

   // two states one to store user data and one to see if data is still loading
   const [userData, setUserData] = useState([]);
   const [loading, setloading] = useState(false);

   let id = JSON.parse(window.localStorage.getItem("id"));


   useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/aduiltgetchild.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
    


  }, []);









  return (


    <div className="aduilts-childp-nav">
     <div className="Aduilt-nav">
    <Aduiltnav />
  </div>
    <div className="Aduilts-child-main">
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
            {loading
              ? userData.map((data) => (
                  <>
                    <p>name:{data.childsfirstname}</p>
                    <p>rank:{data.rank}</p>
                    <p>term of service:{data.term_of_service}</p>
                  </>
                ))
              : null}
            </div>
          </div>

          <div className="cprofile-merits">
            <h2>outstanding merits:</h2>
            {loading
              ? userData.map((data) => (
                  <>
                    <p>{data.outstanding_merit}</p>
                   
                  </>
                ))
              : null}
          </div>


    <div className="aduilt-button-placement">
          <div className="cprofile-button">
            <button>merit badges</button>
          </div>
          
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Aduiltschildp;
