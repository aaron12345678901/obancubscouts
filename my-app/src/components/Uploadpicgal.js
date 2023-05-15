import React, { useState } from "react";
import axios from "axios";

function Uploadpicgal() {
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
        `http://localhost/php-react/oban-scouts-php/uploadgal.php`,
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
    <div>
      <div className="gallery-upload">
      
      <div className="gal-second-heading">
        <h2>upload photo</h2>
      </div>

      
        <input type="file" onChange={handleFileChange} />
        
        <label for="description">description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <button onClick={handleUpload}>
          <p>click to submit photo</p>
        </button>
      </div>
    </div>
  );
}

export default Uploadpicgal;
