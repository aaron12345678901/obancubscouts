import axios from "axios";
import React, { useState, useEffect } from "react";

function Galleryelement() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .post(`http://localhost/php-react/oban-scouts-php/galleryimageload.php`)
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

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div className="gal">
        {images.map((image, index) => (
          <div key={image.id} onClick={() => handleImageClick(image)}>
            <img src={`data:${image.type};base64,${image.content}`} alt={image.name} />
            <p>{image.description}</p>
            {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galleryelement;