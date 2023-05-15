import event1 from "../../images/aduilts-reg-events/aduiltevent.png";
import event2 from "../../images/aduilts-reg-events/aduiltevent2.png";
import event3 from "../../images/aduilts-reg-events/aduiltevent3.png";
import Aduiltnav from "../../components/Aduiltnav";

function Aduiltseventsreg() {
  return (

    <div className="aduilt-events-nav">
      <div className="Aduilt-nav">
    <Aduiltnav />
  </div>
    <div className="Aduiltprofile-main">
      <div className="A-profile-align">
        <h1>my events  </h1>
        <p>events you can register to help </p>

        

        <div className="A-profile-card">
           <div className="aduilt-profile-events-container">



              <div className="aduilt-reg-event"> 
              <img src={event1} alt="" />
              <div className="aduilt-events-p">
              <p >Webelos Invitational Sat, 13:00–16:00 </p>
              </div>
              </div>

              <div className="aduilt-reg-event"> 
              <img src={event2} alt="" />
              <div className="aduilt-events-p">
              <p >BSA Winterfest Fri 27 – Sun 29 </p>
              </div>

              </div>

              <div className="aduilt-reg-event"> 
              <img src={event3} alt="" />
              <div className="aduilt-events-p">
              <p>Target Sports  Sat 15 – Sun 16 </p>
              </div>
              </div>

         


           </div>


        </div>
      </div>
    </div>
    </div>
  );
}

export default Aduiltseventsreg;
