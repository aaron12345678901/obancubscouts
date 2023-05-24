import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Adminchildmeritsload() {
  const [images, setImages] = useState([]); // State to store the images
  const [loading, setLoading] = useState(false); // State to track loading state
  const { id } = useParams(); // Access the "id" parameter from the URL

  useEffect(() => {
    setLoading(true);

    // Make a POST request to get the images for a specific child
    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/Getchildsmerits.php?id=${id}`
      )
      .then((response) => {
        setImages(response.data); // Set the received images in state
        setLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error(error); // Log any errors to the console
        setLoading(false); // Set loading state to false
      });
  }, []);

  const handleImageClick = (image) => {
    const img = new Image();
    img.src = `data:${image.type};base64,${image.content}`;

    // When the image is loaded, open a new window, display the image, and print it
    img.onload = () => {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        `<html><body><img src="${img.src}" /></body></html>`
      );
      printWindow.document.close();
      printWindow.print();
    };
  };

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div className="gal">
        {/* Map over the images and display them */}
        {images.map((image, index) => (
          <div key={image.id} onClick={() => handleImageClick(image)}>
            <div className="badge2">
              {/* Display the image */}
              <img
                src={`data:${image.type};base64,${image.content}`}
                alt={image.name}
              />
              <p id="badgep">{image.description}</p>
            </div>
            {/* Add a row separator after every third image */}
            {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adminchildmeritsload;