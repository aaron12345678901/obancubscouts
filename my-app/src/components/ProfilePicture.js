// Import necessary libraries and functions
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define a React component named "ProfilePicture"
const ProfilePicture = () => {
  // Declare state variable for image source and a setter function
  const [imageSrc, setImageSrc] = useState("");

  // Use the useEffect hook to fetch the image when the component mounts
  useEffect(() => {
    // Send a GET request to the specified URL

    // getting id from local storage and converting to a javascript object to be used
    let id = JSON.parse(window.localStorage.getItem("id"));

    axios
      .get(
        `http://localhost/php-react/oban-scouts-php/aduiltProfilepic.php?id=${id}`,
        { responseType: "blob" }
      )
      .then((response) => {
        // Convert the image data to a URL and set it as the state variable
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setImageSrc(url);
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }, []);

  // Render the image if it exists, or a loading message if it doesn't
  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Database Image" />}
      {!imageSrc && <p>Loading...</p>}
    </div>
  );
};

// Export the component for use in other parts of the application
export default ProfilePicture;
