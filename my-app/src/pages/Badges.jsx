import React from "react";

import badge1 from '../images/Badges/badge1.png'

function Badges() {

  

    return (
      <div className="Badges-main">
       <div className="badges-heading"><h1>scouts activity badges </h1></div>

       <div className="first-badges">


        <div className="badge1">
            <img src={badge1} alt="" />
        </div>

        <div className="badge2">
        <div className="badge-img-2"></div>

        </div>
        <div className="badge3">
        <div className="badge-img-3"></div>

        </div>
       </div>

      </div>
    );
  }
  
  export default Badges;
  