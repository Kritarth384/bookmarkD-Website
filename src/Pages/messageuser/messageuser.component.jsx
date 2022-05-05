import React from "react";
import { Link } from "react-router-dom";
import User2 from '../../assets/user2.png'
import User3 from '../../assets/user3.png'
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import './messageusers.styles.css'
import ProfilePic from "../../assets/profilePic.png";

const messageUser = () => {
  const imageUrl = ProfilePic;
  const path = "/messageUsers"
  const exchange = "/exchange";
  const home = "/";
  const community = "/communityPageUser1";
  
  return(

  <div>
    <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
    <hr className="line" />
    <div className="messageTitle">
        Messages
    </div>
    <Link to="/messageUser2">
    <div className="userMessageTile1">
        <img src={User2} alt="" className="user2Image" />
        <label className="userName1">Sumit Kaif</label>
    </div>
    </Link>
    <Link to="/messageUser3">
    <div className="userMessageTile2">
    <img src={User3} alt="" className="user3Image" />
        <label className="userName2">Anjali Deepak</label>
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

export default messageUser;
