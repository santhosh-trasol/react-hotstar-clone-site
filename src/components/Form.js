import React, { useState } from "react";
import "./Form.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("Please Enter Correct Values Da Dummelu");
    } else {
      alert("Details are submitted all good :)");
    }

    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 7) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="form-box">
            <h1>Form Creation</h1>
            <form onSubmit={loginHandle}>
              <label className="form-label">User ID</label>
              <br />
              <input
                type="text"
                placeholder="Enter User Id"
                onChange={userHandler}
              />
              {userErr ? <span>Enter Atleast 4 letters</span> : ""}
              <br /> <br />
              <label className="form-label">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter User Password"
                onChange={passwordHandler}
              />
              {passErr ? <span>Enter Atleast 7 letters</span> : ""}
              <br /> <br />
              <button type="submit" className="btn sub-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
