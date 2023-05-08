import React, { useState } from "react";
import axios from "axios";

function ProfilePictureUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post(`http://localhost/php-react/oban-scouts-php/upload.php`, formData)
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
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ProfilePictureUploader;