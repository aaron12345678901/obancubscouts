import axios from "axios";
import React, { useState, useEffect } from "react";

function Aduiltevents() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .post(`http://localhost/php-react/oban-scouts-php/gettrainingevent.php`)
      .then((response) => {
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
