import axios from "axios";
import React, { useState, useEffect } from "react";

function Badgeelement() {
  // State to store the badge images and loading status
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);

    // Fetch badge images from the server using axios
    axios
      .post(`http://localhost/php-react/oban-scouts-php/getbadgesmain.php`)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Function to handle clicking on a badge image
  const handleImageClick = (image) => {
    // Create an image element and set its source to the clicked image
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

  // Function to handle search input change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the badge images based on the search query
  const filteredImages = images.filter((image) =>
    image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div className="badge-main1">
        {/* Input field for searching badges */}
        <input
          type="text"
          placeholder="Search for a badge"
          onChange={handleSearch}
        />

        <div className="gal">
          {/* Display the filtered badge images */}
          {filteredImages.map((image, index) => (
            <div key={image.id} onClick={() => handleImageClick(image)}>
              <div className="badge1">
                {/* Display the badge image and description */}
                <img
                  src={`data:${image.type};base64,${image.content}`}
                  alt={image.name}
                />
                <p id="badgep">{image.description}</p>
              </div>
              {/* Add a row separator after every third badge */}
              {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badgeelement;