import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&family=Poppins:ital,wght@0,300;0,400;1,300;1,900&family=Ubuntu:wght@300&display=swap"
  rel="stylesheet"
></link>;
function Header({ username, category, toggleMode, setToggleMode }) {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showlogout, setShowLogout] = useState(false);
  const handleMenuClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
    console.log(toggleMenu);
  };
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const APIKey = "d0b69496c18e463f888a273cb521ea9f";
  const handleChange = async (e) => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${APIKey}&pageSize=21`
    );
    const data = await response.json();
    setLoading(false);
    console.log(data.articles);
    setNewsArticles(data.articles);
    const resultArray = data.articles.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.description?.includes(e.target.value)
    );
    setNewsArticles(resultArray);
  };

  useEffect(() => {
    handleChange();
  }, []);
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("successfully logged out!");
        navigate("/general");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <>
      <nav
        className="navbar"
        style={
          toggleMode
            ? { background: "#161616" }
            : { background: "rgb(236, 238, 239)" }
        }
      >
        <div className="logo">
          <img src="./assets/logo.png" alt="" />
        </div>
        <div className="input">
          <input type="text" onChange={(e) => handleChange(e)} />
          <SearchIcon />
        </div>
        <div className="Ltst-news">
          <div className="btn-down-nav">
            <button
              style={toggleMode ? { color: "white" } : { color: "black" }}
            >
              Latest News
              <div>
                <ArrowForwardIcon fontSize="small" />
              </div>
            </button>
          </div>
        </div>
        <div className="user">
          <div className="guest-icon">
            <PersonPinIcon
              style={toggleMode ? { color: "white" } : { color: "black" }}
            />
          </div>
          <p style={toggleMode ? { color: "white" } : { color: "black" }}>
            {username == "" ? "Guest" : username}
          </p>

          {username == "" ? (
            <div style={{ display: "flex" }} className="down-arrow-icon">
              <ExpandMoreIcon
                style={toggleMode ? { color: "white" } : { color: "black" }}
              />
              <Link to="/about">
                <button
                  className="logout"
                  style={
                    toggleMode
                      ? { background: "#232323" }
                      : { background: "#1E90FF" }
                  }
                >
                  About
                </button>
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          )}
        </div>
        <div className="menu">
          {toggleMenu === true ? (
            <div style={{ width: "30px" }}></div>
          ) : (
            <MenuIcon style={{ width: "30px" }} onClick={handleMenuClick} />
          )}
        </div>
        <Hamburger opened={toggleMenu} className="hamburger">
          <div className="hamburger__closeIcon">
            <div></div>
            <CloseIcon onClick={handleMenuClick} />
          </div>
          <div className="hamburger__content">
            <div className="hamburger__input">
              <input type="text" />
              <SearchIcon className="sIcon" fontSize="small" />
            </div>
            <h3>Categories</h3>
            <ul>
              <Link to="/business">
                <li>Business</li>
              </Link>
              <li>Entertainment</li>
              <Link to="/general">
                <li>General</li>
              </Link>
              <Link to="/health">
                <li>Health</li>
              </Link>
              <Link to="/science">
                <li>Science</li>
              </Link>
              <Link to="/sports">
                <li>Sports</li>
              </Link>
              <Link to="/technology">
                <li>Technology</li>
              </Link>
            </ul>
            <div className="hamburger__dlMode">
              <div className="lg">
                <WbSunnyTwoToneIcon className="lg-icon" /> Light
              </div>
              <div className="bj">
                <DarkModeIcon className="bj-icon" /> Dark
              </div>
            </div>
          </div>
        </Hamburger>
      </nav>
      <Sidebar
        username={username}
        category={category}
        toggleMode={toggleMode}
        setToggleMode={setToggleMode}
        newsArticles={newsArticles}
        loading={loading}
      />
    </>
  );
}

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  padding: 5px;
  z-index: 12;
  opacity: 0.85;
  box-shadow: 0px 5px 10px 0px #aaa;
  transform: ${(props) =>
    props.opened === true ? "translateX(0px);" : "translateX(225px)"};
  height: 100vh;
  transition: all 1s;
  position: fixed;
  top: 0;
  right: 0;
  background: #ffffff;
`;

export default Header;
