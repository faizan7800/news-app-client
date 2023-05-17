import React, { useEffect } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/pagenotfound");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="left">
          <img src="/assets/dp.jpeg" alt="user" width={100} />
          <h4>Abu Bakar</h4>
          <p>Frontend Developer</p>
          <button>Edit Profile</button>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>khan123@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>034558548954</p>
              </div>
            </div>
          </div>
          <div className="intrests">
            <h3>News Intrests</h3>
            <div className="intrests_data">
              <div className="data">
                <h4>Business</h4>
                <h4>Sports</h4>
                <h4>Technology</h4>
                <h4>Health</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
