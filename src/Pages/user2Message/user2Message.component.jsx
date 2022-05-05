import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/profilePic.png";
import User3 from "../../assets/user3.png";
import user2 from "../../assets/user2.png";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import "./user2Message.styles.css";

const user2Message = () => {
    const path = "/user2Message";
    const imageUrl = user2;
    const exchange = "/exchange2";
  const home = "/user2";
  const community = "/communityPageUser2";
    
    return(
  <div>
     <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
    <hr className="line" />
    <div className="messageTitle">Messages</div>
    <Link to="/messageUser1">
      <div className="userMessageTile1">
        <img src={ProfilePic} alt="" className="user2Image" />
        <label className="userName12">Ronak</label>
      </div>
    </Link>
    
    <MenuItem />
    <Link to="/user2">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Shelf</span>
      </button>
    </Link>
  </div>
);
    }

export default user2Message;
