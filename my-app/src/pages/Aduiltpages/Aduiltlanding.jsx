import Aduiltnav from "../../components/Aduiltnav";
import Aduiltprofile from"../../pages/Aduiltpages/Aduiltprofile";
import AduiltschildP from "../Aduiltpages/Aduiltschildp"
import Aduiltchildmerits from "../Aduiltpages/Aduiltchildmerits"
import Aduiltseventsreg from"../Aduiltpages/Aduiltseventsreg"
import Aduiltreghelper from"../Aduiltpages/Aduiltreghelper"
import Aduiltregdisclosure from"../Aduiltpages/Aduiltregdisclosure"

function Aduiltlanding() {
  return (
    <div className="Aduiltlanding-main">
    <div className="Aduilt-nav"> <Aduiltnav/> </div>
    <div className="Aduilt-content"><Aduiltregdisclosure/></div>
    </div>
  );
}

export default Aduiltlanding;
