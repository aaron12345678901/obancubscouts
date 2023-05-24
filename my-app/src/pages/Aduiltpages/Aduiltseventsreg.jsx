import Aduiltnav from "../../components/Aduiltnav";
import React, { useState } from "react";
import axios from "axios";
import Aduiltevents from "../../components/Aduiltevents";

function Aduiltseventsreg() {
  return (
    <div className="aduilt-events-nav">
      <div className="Aduilt-nav">
        <Aduiltnav />
      </div>
      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>my events </h1>
          <p>events you you have registerd to help </p>

          <div className="A-profile-card">
            <div className="aduilt-profile-events-container">
              <Aduiltevents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltseventsreg;
