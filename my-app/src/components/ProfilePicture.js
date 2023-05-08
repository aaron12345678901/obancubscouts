import React, { useState, useEffect } from "react";
// Importing necessary libraries
import axios from "axios";
// Importing axios library for making HTTP requests

function ProfilePicture({ pictureId }) {
  // Defining a function component with one prop, 'pictureId'

  const [pictureUrl, setPictureUrl] = useState("");
  // Declaring a state variable for storing the URL of the picture, initializing it with an empty string

  useEffect(() => {
    // Defining an effect hook that runs whenever the 'pictureId' prop changes


    axios
      .get(
        `http://localhost/php-react/oban-scouts-php/aduiltProfilepic.php?id=${pictureId}`
      )
      // Making an HTTP GET request to a PHP script on the server, passing the 'pictureId' prop as a query parameter

      .then((response) => {
        // Handling the response if the request is successful

        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        }); 
        // Creating a new Blob object from the binary data in the response, with the content type specified in the response headers

        const url = URL.createObjectURL(blob); // Creating a URL object from the Blob, which can be used to display the picture in the <img> element

        setPictureUrl(url); 
        // Updating the state variable with the URL

        console.log(pictureUrl); 
        
       
      
        // Logging the current value of the 'pictureUrl' state variable to the console
      })

      .catch((error) => {
        // Handling the error if the request fails

        console.error(error); 
        // Logging the error message to the console
      });
  }, [pictureId]); 
  // Specifying the 'pictureId' prop as a dependency for the effect hook, so that it only runs when the prop changes

  if (!pictureUrl) {
    // Rendering nothing if the 'pictureUrl' state variable is empty

    return null;
  }

  return (
    // Rendering an <img> element with the 'src' attribute set to the 'pictureUrl' state variable, and alt text set to 'Profile picture'
    <img src={pictureUrl} alt="Profile picture" />
  );
}

export default ProfilePicture; 
// Exporting the function component as the default export
