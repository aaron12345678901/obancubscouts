import { useEffect, useRef } from "react";
import Aduiltevents from "../../components/Aduilteventtraining";
import React, { useState } from "react";
import axios from "axios";
import training1 from "../../images/trainingimages/training1.png";
import training2 from "../../images/trainingimages/training2.png";
import training3 from "../../images/trainingimages/training3.png";
import training4 from "../../images/trainingimages/training4.png";

//

//

import Aduiltnav from "../../components/Aduiltnav";

function Aduiltregtraining() {
  // save for admin upload

  //
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = () => {
  // const formData = new FormData();
  // formData.append("file", selectedFile);
  // formData.append("description", description);
  // formData.append("date", date);

  //   axios
  //     .post(
  //       `http://localhost/php-react/oban-scouts-php/uploadtrainingevent.php`,
  //       formData
  //     )

  //     .then((response) => {
  //       console.log(response.data);
  //       // Handle success response from server
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle any network or server errors
  //     });

  //   };
  //

  const dateq = useRef();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  console.log(dateq);

  useEffect(() => {
    dateq.current.innerHTML = monthNames[d.getMonth()];
  });

  return (
    <div className="aduilt-reg-training-nav">
      <div className="Aduilt-nav">
        <Aduiltnav />
      </div>

      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>Registerd helpers </h1>
          <p>upcoming training events </p>

          {/*  */}

          {/* <div className="gallery-upload">
      
      <div className="gal-second-heading">
        <h2>upload photo</h2>
      </div>

      
        <input type="file" onChange={handleFileChange} />
        
        <label for="description">description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label for="date">Date:</label>
        <input type="text" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />


        <button onClick={handleUpload}>
          <p>click to submit photo</p>
        </button>
      </div> */}

          {/*  */}
          <div className="A-profile-card-training">
            <div className="aduilt-training-page-control">
              <div className="date-training">
                <p id="tdate" ref={dateq}>
                  today
                </p>
              </div>
            </div>

            <Aduiltevents></Aduiltevents>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltregtraining;
