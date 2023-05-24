import axios from "axios";
import React, { useState, useEffect } from "react";

function Aduiltevents() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Make a POST request to retrieve the training event data
    axios
      .post(`http://localhost/php-react/oban-scouts-php/gettrainingevent.php`)
      .then((response) => {
        // Set the received image data in state
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div className="aduilt-events-">
        {/* Map over the image data and display each training event */}
        {images.map((image, index) => (
          <div key={image.id}>
            <div className="training-alignment">
              <div className="training-event">
                <div className="training-date">
                  <div className="event-date">
                    <p>{image.date}</p>
                  </div>
                </div>

                <div className="training-description">
                  <div className="events-d">
                    <p>{image.description}</p>
                  </div>
                </div>

                <div className="training-img">
                  <img
                    src={`data:${image.type};base64,${image.content}`}
                    alt={image.name}
                  />
                </div>

                {/* Add a row separator every three events */}
                {(index + 1) % 3 === 0 && <div className="row-separator"></div>}
              </div>
              <div className="training-border"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aduiltevents;