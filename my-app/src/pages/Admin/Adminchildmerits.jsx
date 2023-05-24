import { useParams, Link } from "react-router-dom";
import Childsmerits from "../../components/Childsmerits";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnav from "../../components/Adminnav";
import Adminchildmeritsload from "../../components/Adminchildmeritsload";

function Adminchildmerits() {
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  // getting users data from server using the id that was retrieved
  useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/get.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);

  return (
    <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Adminnav />
      </div>
      <div className="admin-childrens-profile">
        <div className="admin-profile-container">
          <div className="admin-child-profile-inner">
            <div className="admin-child-merit">
              {loading
                ? userData.map((data) => (
                    <h1>{data.first_name}'s acheived merits</h1>
                  ))
                : null}
            </div>

            <Adminchildmeritsload />

            <div className="cprofile-button">
              <div className="Admin-merit-back-btn">
                <Link to="/Adminchildren">
                  <button>Back</button>{" "}
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
