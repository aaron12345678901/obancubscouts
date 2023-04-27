import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aduiltnav from "../../components/Aduiltnav";
import Aduiltprofile from "../../pages/Aduiltpages/Aduiltprofile";
import AduiltschildP from "../Aduiltpages/Aduiltschildp";
import Aduiltchildmerits from "../Aduiltpages/Aduiltchildmerits";
import Aduiltseventsreg from "../Aduiltpages/Aduiltseventsreg";
import Aduiltreghelper from "../Aduiltpages/Aduiltreghelper";
import Aduiltregdisclosure from "../../pages/Aduiltpages/Aduiltregdisclosure";
import Aduiltregtraining from "../Aduiltpages/Aduiltregtraining";




function Aduiltlanding() {
  return (
    <div className="Aduiltlanding-main">
      <div className="Aduilt-nav">
      </div>
      <div className="Aduilt-content">




        <Routes>
          <Route path="/" element={<Aduiltprofile />} />
        </Routes>

        
      </div>
    </div>
  );
}

export default Aduiltlanding;
