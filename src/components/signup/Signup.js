import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { json, Link, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();
  let name;
  function handleInputs(e) {
    name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user.username || !user.email || !user.password) {
      setError("Fill the required fields!");
      return;
    }
    setError("");
    const { username, email, password } = user;
    setSubmitButtonDisabled(true);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      setSubmitButtonDisabled(false);
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/login");
    }
    // createUserWithEmailAndPassword(auth, user.email, user.password)
    //   .then(async (userCredential) => {
    //     setSubmitButtonDisabled(false);
    //     const user = userCredential.user;
    //     await updateProfile(user, {
    //       displayName: user.username,
    //     });
    //     alert("User Successfully Created!");
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setSubmitButtonDisabled(false);
    //     setError(error.message);
    //   });
  }
  return (
    <div className="signup">
      <div className="img">
        <img src="./assets/signup.png" alt="error loading" />
      </div>
      <div className="fields">
        <h1>
          Sign up to Our News <br /> Website
        </h1>
        <form method="POST">
          <div className="ip">
            {/* <MailOutlineIcon className="me" /> */}

            <input
              type="text"
              name="username"
              onChange={handleInputs}
              value={user.username}
              placeholder="Username"
            />
          </div>
          <div className="ip">
            <input
              type="text"
              name="email"
              onChange={handleInputs}
              value={user.email}
              placeholder="Email"
            />
          </div>
          <div className="ip">
            <input
              type="password"
              name="password"
              onChange={handleInputs}
              value={user.password}
              placeholder="Password"
            />
          </div>
          <div
            className="ip"
            style={{
              textAlign: "center",
              marginTop: ".2rem",
              marginBottom: "-0.9rem",
            }}
          >
            <b className="error-msg">{error}</b>
          </div>
          <div className="btns">
            <input
              type="submit"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
              className="btn1"
              value="Sign Up"
            />
            <Link to="/login">
              <button className="btn2">
                Go to Login
                <ArrowForwardIcon className="cr" />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
