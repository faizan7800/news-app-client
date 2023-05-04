import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Fill the required fields!");
      return;
    }
    setError("");
    setSubmitButtonDisabled(true);
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("logged in successfully!");
      navigate("/");
    }
    // signInWithEmailAndPassword(auth, user.email, user.password)
    //   .then((userCredentials) => {
    //     setSubmitButtonDisabled(false);
    //     console.log(userCredentials);
    //     navigate("/general");
    //   })
    //   .catch((error) => {
    //     setSubmitButtonDisabled(false);
    //     console.log(error);
    //     setError(error.message);
    //   });
  }
  return (
    <>
      <div className="login">
        <div className="img">
          <img src="./assets/login.png" alt="error loading" />
        </div>
        <div className="fields">
          <h1>
            Login to Your News <br /> Website Account
          </h1>
          <div className="ip">
            {/* <MailOutlineIcon className="me" /> */}
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Email"
            />
          </div>
          <div className="ip">
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Password"
            />
            <b className="error-msg">{error}</b>
            {/* <RemoveRedEyeIcon className="me" /> */}
          </div>
          <div className="btns">
            <button
              className="btn1"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Sign In
            </button>
            <a href="#">Forgot Email/Password</a>
            <Link to="/signup">
              <button className="btn2">
                Create Account
                <ArrowForwardIcon className="cr" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
