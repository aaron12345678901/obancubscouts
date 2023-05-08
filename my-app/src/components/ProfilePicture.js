import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost/php-react/oban-scouts-php/aduiltProfilepic.php`, { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setImageSrc(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Database Image" />}
      {!imageSrc && <p>Loading...</p>}
    </div>
  );
};

export default ProfilePicture;