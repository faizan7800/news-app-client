import React from "react";
import "./Card.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
function Card({ title, desc, imgUrl, urlToNews, toggleMode }) {
  return (
    <>
      <div
        className="crd"
        style={
          toggleMode
            ? { background: "#232323", color: "white" }
            : { background: "white", color: "black" }
        }
      >
        <div className="sv-rd ">
          <a
            style={
              toggleMode
                ? { background: "#2A6E35" }
                : { background: "rgb(148, 148, 147)" }
            }
            href={urlToNews}
            className="readLater"
            target="_blank"
          >
            Read
          </a>
          <BookmarkBorderIcon className="save" />
        </div>
        <div className="tit-des-img">
          <h4>{title.substr(0, 40) + "..."}</h4>
          <p>{desc?.substr(0, 40) + "..."}</p>
          <img src={imgUrl} alt="error loading" />
        </div>
        <div className="features">
          <ThumbUpAltIcon className="ftur1" />
          <ChatBubbleOutlineIcon className="ftur2" />
          <ShareIcon className="ftur3" />
        </div>
      </div>
    </>
  );
}

export default Card;
