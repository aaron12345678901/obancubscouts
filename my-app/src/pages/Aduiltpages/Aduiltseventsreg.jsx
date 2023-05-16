import event1 from "../../images/aduilts-reg-events/aduiltevent.png";
import event2 from "../../images/aduilts-reg-events/aduiltevent2.png";
import event3 from "../../images/aduilts-reg-events/aduiltevent3.png";
import Aduiltnav from "../../components/Aduiltnav";
import React, { useState } from "react";
import axios from "axios";
import Aduiltevents from "../../components/Aduiltevents";

function Aduiltseventsreg() {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [description, setDescription] = useState("");

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", selectedFile);
  //   formData.append("description", description);

  //   axios
  //     .post(
  //       `http://localhost/php-react/oban-scouts-php/uploadevent.php`,
  //       formData
  //     )

  //     .then((response) => {
  //       console.log(response.data);
  //       // Handle success response from server
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle any network or server errors
  //     });
  // };

  return (
    <div className="aduilt-events-nav">
      <div className="Aduilt-nav">
        <Aduiltnav />
      </div>
      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>my events </h1>
          <p>events you you have registerd to help </p>

          {/*temp upload area*/}

          {/* <div className="gallery-upload">
            <div className="gal-second-heading">
              <h2>upload photo</h2>
            </div>

            <input type="file" onChange={handleFileChange} />

            <label for="description">description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={handleUpload}>
              <p>click to submit photo</p>
            </button>
          </div> */}

          {/*                 */}

          <div className="A-profile-card">
            <div className="aduilt-profile-events-container">
              <Aduiltevents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltseventsreg;
