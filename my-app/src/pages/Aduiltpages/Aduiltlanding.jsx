import Aduiltnav from "../../components/Aduiltnav";
import Aduiltprofile from"../../pages/Aduiltpages/Aduiltprofile";
function Aduiltlanding() {
  return (
    <div className="Aduiltlanding-main">
    <div className="Aduilt-nav"> <Aduiltnav/> </div>
    <div className="Aduilt-content"><Aduiltprofile /></div>
    </div>
  );
}

export default Aduiltlanding;
