import cprofile from "../../images/profilepics/cprofilepic.png";

function Childrensprofile() {
  return (
    <div className="childrens-profile">
      <div className="profile-container">
        <div className="cprofile-first-line">
          <div className="profile-img">
            <img src={cprofile} alt="" />
          </div>

          <div className="cfirst-details">
            <p>Name: child 1</p>
            <p>Rank: scout leader</p>
            <p>Term of service: 2y 10 m</p>
          </div>
        </div>

        <div className="cprofile-merits">
          <h2>outstanding merits:</h2>
          <p>
            By 1915 Bowen had executed a group of experimental studies that
            proved to be critically important to petrology and formed the basis
            of his critical review The Later Stages of the Evolution of the
            Igneous Rocks (1915), a paper of such outstanding merit that it
            established Bowen's position at the age of 28 as an international
            figure in petrology.
          </p>
        </div>

        <div className="cprofile-button">
          <button>merit badges</button>
        </div>
      </div>
    </div>
  );
}

export default Childrensprofile;
