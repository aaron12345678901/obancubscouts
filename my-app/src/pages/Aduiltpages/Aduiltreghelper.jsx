import React from "react";
import Aduiltnav from "../../components/Aduiltnav";
import axios from "axios";

function Aduiltreghelper() {
  // getting id from local storage and converting to a javascript object to be used
  let id = JSON.parse(window.localStorage.getItem("id"));

  const handleButtonClick = () => {
    // Send the value to the SQL database using Axios and PHP
    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/RegHelper.php?id=${id}&value=${1}`
      )
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="aduilt-reg-help-nav">
      <div className="Aduilt-nav">
        <Aduiltnav />
      </div>

      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>Register as a helper</h1>

          <div className="A-profile-card">
            <div className="reg-helper">
              <p>
                It's a great feeling knowing you're helping young people get
                skills for life, and you might even learn a lot about yourself
                along the way. Scouts can make you feel good in other ways too.
                We'll guide you to an opportunity where you'll: Make friends and
                meet people.
              </p>
              <p>
                Most of our volunteers work directly with young people aged 6-18
                through our Beaver, Cub, Scout and Explorer groups, known as
                sections – helping young people gain skills for life through
                activities and adventures.
              </p>
            </div>
            <div className="aduilt-reg-bottom-half">
              <p>Helpers working in teams, they might:</p>
              <ul>
                <li>
                  Welcome young people and families to sessions and events
                </li>
                <li>
                  Make sure everyone's safe, supported, included and having fun
                </li>
                <li>Help to plan and lead activities</li>
                <li>Get involved with days out, camps and expeditions</li>
                <li>
                  Share and learn skills – from coding to cake decorating to
                  canoeing
                </li>
                <li>Celebrate young people's achievements big and small</li>
              </ul>
              <button onClick={handleButtonClick}>
                Click to Show interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltreghelper;
