import Aduiltnav from "../../components/Aduiltnav";
import Aduiltgal from "../galleries/Aduiltandchild"

function Aduiltgallery() {
  return (

    <div className="aduilt-reg-help-nav">
    <div className="Aduilt-nav">
    <Aduiltnav />
  </div>

    <div className="Aduiltprofile-main">
     <Aduiltgal/>
    </div>
    </div>
  );
}

export default Aduiltgallery;
