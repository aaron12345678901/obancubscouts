// Importing necessary dependencies and components
import { useParams, Link } from "react-router-dom";  // Importing useParams and Link from "react-router-dom" package

import axios from "axios";  // Importing axios for making HTTP requests
import React, { useState, useEffect } from "react";  // Importing React, useState, and useEffect from "react" package
import Adminnav from "../../components/Adminnav";  // Importing the Adminnav component
import Adminchildmeritsload from "../../components/Adminchildmeritsload";  // Importing the Adminchildmeritsload component

function Adminchildmerits() {
  // Defining states to store user data and loading status
  const [userData, setUserData] = useState([]);  // userData stores user data, initialized as an empty array
  const [loading, setloading] = useState(false);  // loading represents whether data is still loading or not, initialized as false
  const { id } = useParams();  // Using useParams hook to get the id from the URL parameters

  // Fetching user data from the server using the retrieved id
  useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/get.php?id=${id}`)  // Making a POST request to the specified URL with the id parameter
      .then((response) => setUserData(response.data))  // Setting the retrieved user data in the state
      .catch((error) => console.error(error));  // Handling any errors that occur during the request
    setloading(true);  // Setting loading state to true
  }, []);

  return (
    <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Adminnav />  // Rendering the Adminnav component
      </div>
      <div className="admin-childrens-profile">
        <div className="admin-profile-container">
          <div className="admin-child-profile-inner">
            <div className="admin-child-merit">
              {loading
                ? userData.map((data) => (
                    <h1>{data.first_name}'s achieved merits</h1>  // Displaying the user's achieved merits
                  ))
                : null}
            </div>

            <Adminchildmeritsload />  

            <div className="cprofile-button">
              <div className="Admin-merit-back-btn">
                <Link to="/Adminchildren">
                  <button>Back</button>  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminchildmerits;