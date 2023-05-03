import axios from "axios";
import React, { useState, useEffect } from "react";

function Aduilttraining() {
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);


  // getting id from local storage and converting to a javascript object to be used
  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    axios
      .post(`http://localhost/php-react/oban-scouts-php/aduiltgettraining.php?id=${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);





  return (

    <div className="aduilt-training">
     
<ul>
{loading
                        ? userData.map((data2) => (
                            <>
                    <li>  {data2.name}</li>
                   </>
                          ))
                        : null}
</ul>


    </div>
  );
}

export default Aduilttraining;
