import { Link } from "react-router-dom";
import Uploadpicgal from "../../components/Uploadpicgal";
import Galleryelement from "../../components/Galleryelement";
import gallerymain1st from "../../images/gallery/gallerymain1st.png";

function Childsgallery() {
  return (
    <div className="childrens-profile">
      <div className="profile-container">
        <div className="Aduiltandchild-main">
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

        <div className="cprofile_button_layout">
        <div className="cprofile-button">

        <Link to="/Childrensprofile">
          <button>Back</button> </Link>
        </div>

        <div className="cprofile-button">
            <Link to="/Childsgallery">
              <button>Gallery</button>{" "}
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Childsgallery;
