import axios from "axios";
import React, { useState, useEffect } from "react";

function Badgeelement() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);

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

  const handleImageClick = (image) => {
    const img = new Image();
    img.src = `data:${image.type};base64,${image.content}`;
    img.onload = () => {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`<html><body><img src="${img.src}" /></body></html>`);
      printWindow.document.close();
      printWindow.print();
    };
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div className="badge-main1">
        <input type="text" placeholder="Search for a badge" onChange={handleSearch} />

        <div className="gal">
          {filteredImages.map((image, index) => (
            <div key={image.id} onClick={() => handleImageClick(image)}>
              <div className="badge1">
                <img src={`data:${image.type};base64,${image.content}`} alt={image.name} />
                <p id="badgep">{image.description}</p>
              </div>
              {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badgeelement;