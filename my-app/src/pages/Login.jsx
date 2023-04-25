import Log from "../components/Log";
import Reg from "../components/Reg";




function Login() {
  return (
    <div className="Login-main">
      <div className="background-shape">
        <div className="Login-head">
          <h2>become a Helper?</h2>
          <p>
            By registering yourself as a helper, Our adult volunteers get just
            as much out of Scouting as our young people do. As well as helping
            young people to enjoy the adventure of Scouting, you’ll also have
            fun, make friends, develop new skills and have unforgettable
            experiences.
          </p>
        </div>
            <div className="form-containers">

              <div className="reg-container"> <Reg></Reg></div>

              <div className="log-container"><Log></Log></div>
              
               

            </div>
          
      </div>
    </div>
  );
}

export default Login;
