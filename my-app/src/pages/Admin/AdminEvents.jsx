import Adminnav from "../../components/Adminnav";
import React, { useState } from "react";
import axios from "axios";
import Aduiltevents from "../../components/Aduiltevents";

function AdminEvents() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("description", description);

    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/uploadevent.php`,
        formData
      )

      .then((response) => {
        console.log(response.data);
        // Handle success response from server
      })
      .catch((error) => {
        console.error(error);
        // Handle any network or server errors
      });
  };

  return (
    <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Adminnav />
      </div>
      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>events </h1>
          <p>past and new events</p>

          <div className="A-profile-card">
            <div className="aduilt-profile-events-container">
              {/* temp upload area*/}

              <div className="Admin-upload-event">
                <div className="gallery-upload">
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
                </div>
              </div>
              {/*                 */}

              <Aduiltevents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEvents;
