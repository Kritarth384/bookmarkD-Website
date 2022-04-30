import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/profilePic.png";
import user3 from "../../assets/user3.png";
import user2 from "../../assets/user2.png";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import "./user3Message.styles.css";

const user3Message = () => {
    const path = "/user3Message";
    const imageUrl = user3;
    
    return(
  <div>
    <Header path = {path} imageUrl = {imageUrl} />
    <hr className="line" />
    <div className="messageTitle">Messages</div>
    <Link to="/messageUser12">
      <div className="userMessageTile1">
        <img src={ProfilePic} alt="" className="user2Image" />
        <label className="userName12">Ronak</label>
      </div>
    </Link>
    
    <MenuItem />
    <Link to="/">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Shelf</span>
      </button>
    </Link>
  </div>
);
    }

export default user3Message;
