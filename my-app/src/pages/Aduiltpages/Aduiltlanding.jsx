import Aduiltnav from "../../components/Aduiltnav";
import Aduiltprofile from"../../pages/Aduiltpages/Aduiltprofile";
import AduiltschildP from "../Aduiltpages/Aduiltschildp"
import Aduiltchildmerits from "../Aduiltpages/Aduiltchildmerits"


function Aduiltlanding() {
  return (
    <div className="Aduiltlanding-main">
    <div className="Aduilt-nav"> <Aduiltnav/> </div>
    <div className="Aduilt-content"><AduiltschildP /></div>
    </div>
  );
}

export default Aduiltlanding;
