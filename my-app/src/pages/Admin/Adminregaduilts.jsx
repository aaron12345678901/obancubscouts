import Adminnav from "../../components/Adminnav";
import Adminaduiltnames from "../../components/Adminaduiltnames";

function Aduiltprofile() {
  return (
    <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Adminnav />
      </div>

      <div className="Aduiltprofile-main">
        <div className="A-profile-align">
          <h1>Registered adults/carers</h1>

          <div className="A-profile-card">
            <ul>
              <Adminaduiltnames />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aduiltprofile;
