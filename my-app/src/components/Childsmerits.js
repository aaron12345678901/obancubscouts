import axios from "axios";
import React, { useState, useEffect } from "react";

function Childsmerits() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Getting id from local storage and converting it to a JavaScript object
  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    setLoading(true);

    // Fetching data from the server using axios
    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/Getchildsmerits.php?id=${id}`
      )
      .then((response) => {
        // Setting the received data in the state
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleImageClick = (image) => {
    const img = new Image();
    img.src = `data:${image.type};base64,${image.content}`;
    img.onload = () => {
      // Opening a new window for printing the image
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
        {/* Mapping through the images and rendering them */}
        {images.map((image, index) => (
          <div key={image.id} onClick={() => handleImageClick(image)}>
            <div className="badge2">
              {/* Displaying the image and description */}
              <img
                src={`data:${image.type};base64,${image.content}`}
                alt={image.name}
              />
              <p id="badgep">{image.description}</p>
            </div>
            {/* Adding a row separator every 3 images */}
            {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Childsmerits;