import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import CategoryIcon from "@mui/icons-material/Category";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FiveGIcon from "@mui/icons-material/FiveG";
import WorkIcon from "@mui/icons-material/Work";
import { Link, Outlet } from "react-router-dom";
import Card from "../Cards/Card";
import { useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
function Sidebar({
  category,
  toggleMode,
  setToggleMode,
  username,
  loading,
  newsArticles,
}) {
  const handleMode = () => {
    if (toggleMode) {
      setToggleMode(false);
    } else {
      setToggleMode(true);
    }
  };
  return (
    <>
      <div className="side-cards">
        <div
          className="sidebar"
          style={
            toggleMode
              ? { background: "#161616" }
              : { background: "rgb(236, 238, 239)" }
          }
        >
          <a
            href="#"
            className="c1"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <HomeIcon className="h-icon" />
            <h5>Top Stories</h5>
          </a>
          <a
            href="#"
            className="c2"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <LanguageIcon />
            <h5>Around the world</h5>
          </a>
          <a
            href="#"
            className="c3"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <CategoryIcon />
            <h5>Categories</h5>
            <ArrowRightIcon className="arrow-rt" />
          </a>
          <a
            href="#"
            className="c4"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <ModeCommentTwoToneIcon />
            <h5>Discussion</h5>
          </a>
          <a
            href="#"
            className="c5"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <NotificationsActiveIcon />
            <h5>Notification</h5>
          </a>
          <a
            href="#"
            className="c6"
            style={toggleMode ? { color: "white" } : { color: "black" }}
          >
            <SettingsOutlinedIcon />
            <h5>News Feed Setting</h5>
          </a>
          <div
            className="d-l-btn"
            style={
              toggleMode ? { background: "#232323" } : { background: "#949493" }
            }
          >
            {toggleMode ? (
              <div className="lg" onClick={handleMode}>
                <WbSunnyTwoToneIcon className="lg-icon" /> Light
              </div>
            ) : (
              <div className="bj" onClick={handleMode}>
                <DarkModeIcon className="bj-icon" /> Dark
              </div>
            )}
          </div>
        </div>
        {/* -----------------for stories -----------*/}

        <Outlet />
        <div
          className="cards"
          style={
            toggleMode
              ? { background: "#161616" }
              : { background: "rgb(236, 238, 239)" }
          }
        >
          <h2 style={toggleMode ? { color: "#ffffff" } : { color: "black" }}>
            Top Stories - {category.toUpperCase()}
          </h2>
          <TopStoriesDiv colorMode={toggleMode} className="top-stories-list">
            <li className="all toggle-color">All</li>
            <Link to="/general">
              <li
                className="toggle-color"
                style={
                  category === "general"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                General <NewspaperIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <Link to="/sports">
              <li
                className="toggle-color"
                style={
                  category === "sports"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                Sports <SportsCricketIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <Link to="/health">
              <li
                className="toggle-color"
                style={
                  category === "health"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                Health <LocalHospitalIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <Link to="/science">
              <li
                className="toggle-color"
                style={
                  category === "science"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                Science <PsychologyIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <Link to="/technology">
              <li
                className="toggle-color"
                style={
                  category === "technology"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                Technology <FiveGIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <Link to="/business">
              <li
                className="toggle-color"
                style={
                  category === "business"
                    ? { backgroundColor: "#42BCFF", color: "white" }
                    : { backgroundColor: "#FFFFFF", color: "black" }
                }
              >
                Business <WorkIcon className="fi" fontSize="small" />
              </li>
            </Link>
            <MoreHorizIcon className="dots" />
          </TopStoriesDiv>

          <div className="flex-wrap">
            {loading ? (
              <img
                style={{
                  textAlign: "center",
                  width: "300px",
                  margin: "0px auto",
                }}
                src="/assets/spinner.gif"
                alt=""
              />
            ) : (
              newsArticles.map((news) => (
                <Card
                  toggleMode={toggleMode}
                  title={news.title}
                  desc={news.description}
                  imgUrl={news.urlToImage}
                  urlToNews={news.url}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const TopStoriesDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0.6rem;
    padding: 0rem 0.8rem;
    outline: none;
    border-radius: 1rem;
    background-color: ${(props) => (props.colorMode ? "#C5E2EA" : "white")};
    text-align: center;
    cursor: pointer;
  }
  .toggle-color {
    // background: ${(props) => (props.categoryColor ? "#42BCFF" : "#C5E2EA")};
  }
`;

export default Sidebar;
