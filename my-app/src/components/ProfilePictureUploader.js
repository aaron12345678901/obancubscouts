import React, { useState } from "react";
import axios from "axios";
import placeholder from "../images/profilepics/placeholderpic.png";


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

                <div className="Aprofilepic">


                <img src={placeholder} alt="" />


                 <input type="file" onChange={handleFileChange} />
                  

                  <button onClick={handleUpload}>
                  <p>click to change profile picture </p>
                  </button>

    

                </div>

     
    </div>


  );
}

export default ProfilePictureUploader;