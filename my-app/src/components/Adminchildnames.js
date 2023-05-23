import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Adminchildnames() {
  // Set up state for the response data
  const [data, setData] = useState(null);

  // Use the useEffect hook to make a GET request to the PHP script when the component mounts
  useEffect(() => {
    // Make a GET request to the PHP script
    axios
      .get("http://localhost/php-react/oban-scouts-php/getchildnames.php")
      .then((response) => {
        // Set the response data in state
        setData(response.data);
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }, []);

  // Render the data as a list of items, or a "Loading data..." message if the data is not yet available
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id} id="list_names">
              <Link to={`/Adminchildprofile/${item.id}`}>
                {item.first_name} {item.last_name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Adminchildnames;
