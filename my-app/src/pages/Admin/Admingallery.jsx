import Uploadpicgal from "../../components/Uploadpicgal";
import Galleryelement from "../../components/Galleryelement";
import gallerymain1st from "../../images/gallery/gallerymain1st.png";
import Adminnav from "../../components/Adminnav";

function Admingallery() {
  return (
    <div className="Aduilt-nav-main">
      <div className="Aduilt-nav">
        <Adminnav />
      </div>

      <div className="Admin-gal-main">
        <div className="Aduiltandchild-main">
          <h1>Gallery</h1>

          <div className="main-photo-container">
            <div className="main-photo-heading">
              <h1>Latest Event</h1>
            </div>
            <div className="arrows-and-photo">
              <div className="main-photo">
                <img src={gallerymain1st} alt="" />

                <p>Oban fire work display </p>
              </div>
            </div>
          </div>

          {/* test area */}

          <Uploadpicgal></Uploadpicgal>

          {/*  */}

          <div className="gal-second-heading">
            <h2>Past Event photos</h2>
          </div>

          <div className="gal-container">
            <Galleryelement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admingallery;
