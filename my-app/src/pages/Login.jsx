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

        <div className="register">
          <form>
            <div className="register_text">
              <div>
                <input type="text" name="fname" value="name:" />
              </div>
            </div>

            <div className="register_text">
              <div>
                <input type="text" name="surname" value="surname:" />
              </div>
            </div>

            <div className="register_text">
              <div>
                <input type="email" name="email" value="email:" />
              </div>
            </div>

            <div className="register_text">
              <div>
                <input type="password" name="password" value="password:" />
              </div>
            </div>

            <div className="register_btn">
              <input
                type="submit"
                name="register"
                className="register-btn"
                value="Please register"
              />
            </div>
          </form>
        </div>

        <div className="login">
          <h2>all ready a member!log in</h2>
        </div>

        <div className="login-form">
          <form>
            <div className="register_text">
              <div>
                <input type="email" name="email" value="email:" />
              </div>
            </div>

            <div className="register_text">
              <div>
                <input type="password" name="password" value="password:" />
              </div>
            </div>

            <div className="register_btn">
              <input
                type="submit"
                name="register"
                className="register-btn"
                value="login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
