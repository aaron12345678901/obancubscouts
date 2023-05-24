import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

function Admingetaduilttraining() {
  // Two states: one to store user data and one to track loading state
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  const { id } = useParams(); // Access the "id" parameter from the URL

  useEffect(() => {
    // Make a POST request to get the user's training data based on the ID
    axios
      .post(
        `http://localhost/php-react/oban-scouts-php/aduiltgettraining.php?id=${id}`
      )
      .then((response) => setUserData(response.data)) // Set the received user data in state
      .catch((error) => console.error(error));
    setloading(true); // Set loading state to true
  }, []);

  return (
    <div className="aduilt-training">
      <ul>
        {/* If data is still loading, map over the user data and display it */}
        {loading
          ? userData.map((data2) => (
              <>
                <li> {data2.name}</li>
              </>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Admingetaduilttraining;