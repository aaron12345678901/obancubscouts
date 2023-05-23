
import {  Link } from "react-router-dom";
import Childsmerits from "../../components/Childsmerits";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnav from "../../components/Adminnav";





function Adminchildmerits() {

 // two states one to store user data and one to see if data is still loading
 const [userData, setUserData] = useState([]);
 const [loading, setloading] = useState(false);

 // getting id from local storage and converting to a javascript object to be used
 let id = JSON.parse(window.localStorage.getItem("id"));

 // getting users data from server using the id that was retrieved
 useEffect(() => {
   axios
     .post(`http://localhost/php-react/oban-scouts-php/get.php?id=${id}`)
     .then((response) => setUserData(response.data))
     .catch((error) => console.error(error));
   setloading(true);
   


 }, []);


  return (
    <div className="Aduilt-nav-main">
    <div className="Aduilt-nav">
      <Adminnav />
    </div>
    <div className="admin-childrens-profile">
      <div className="admin-profile-container">
        <div className="admin-child-profile-inner">
      
      <p>gghygib</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Adminchildmerits;
