import Uploadpicgal from "../../components/Uploadpicgal";


import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import gallerymain1st from "../../images/gallery/gallerymain1st.png";
import galfirst from "../../images/gallery/galfirst.png";
import gal2nd from "../../images/gallery/gal2nd.png";
import gal3rd from "../../images/gallery/gal3rd.png";
import gal4th from "../../images/gallery/gal4th.png";
import gal5th from "../../images/gallery/gal5th.png";
import gal6th from "../../images/gallery/gal6th.png";
import gal7th from "../../images/gallery/gal7th.png";
import gal8th from "../../images/gallery/gal8th.png";
import gal9th from "../../images/gallery/gal9th.png";

function Aduiltandchild() {
  return (
    <div className="Aduiltandchild-main">
      <div className="main-photo-container">
        
        <div className="main-photo-heading">
          <h1>Latest Events</h1>
        </div>
        <div className="arrows-and-photo">
          <div className="arrow-1">
            {" "}
            <img src={arrowleft} alt="" />
          </div>

          <div className="main-photo">
            <img src={gallerymain1st} alt="" />

            <p>Oban fire work display </p>
          </div>

          <div className="arrow-2">
            {" "}
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>

      {/* test area */}



      

       <Uploadpicgal></Uploadpicgal>






      {/*  */}

      <div className="gal-second-heading">
        <h2>Past Event photos</h2>
      </div>

      <div className="gal-line">
        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={galfirst} alt="" />
          </div>
          <div className="gal-text">
            <p>camp out </p>
          </div>
          <div className="gal-tex-2">
            <p>1 day ago </p>
          </div>
        </div>

        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal2nd} alt="" />
          </div>
          <div className="gal-text">
            <p>winter training </p>
          </div>
          <div className="gal-tex-2">
            <p>2 months ago </p>
          </div>
        </div>

        <div className="ggal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal3rd} alt="" />
          </div>
          <div className="gal-text">
            <p>10 mile run </p>
          </div>
          <div className="gal-tex-2">
            <p>24 day ago </p>
          </div>
        </div>
      </div>

      <div className="gal-line">
        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal4th} alt="" />
          </div>
          <div className="gal-text">
            <p>survival training </p>
          </div>
          <div className="gal-tex-2">
            <p>1 day ago </p>
          </div>
        </div>

        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal5th} alt="" />
          </div>
          <div className="gal-text">
            <p>archery trials</p>
          </div>
          <div className="gal-tex-2">
            <p>16 day ago </p>
          </div>
        </div>

        <div className="ggal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal6th} alt="" />
          </div>
          <div className="gal-text">
            <p>water races </p>
          </div>
          <div className="gal-tex-2">
            <p>6 months ago </p>
          </div>
        </div>
      </div>

      <div className="gal-line">
        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal7th} alt="" />
          </div>
          <div className="gal-text">
            <p>surf </p>
          </div>
          <div className="gal-tex-2">
            <p>6 months ago </p>
          </div>
        </div>

        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal8th} alt="" />
          </div>
          <div className="gal-text">
            <p>learn to climb</p>
          </div>
          <div className="gal-tex-2">
            <p>7 months ago </p>
          </div>
        </div>

        <div className="gal--item-container">
          <div className="gal-img">
            {" "}
            <img src={gal9th} alt="" />
          </div>
          <div className="gal-text">
            <p>mountaineering </p>
          </div>
          <div className="gal-tex-2">
            <p>10 day ago </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Aduiltandchild;
