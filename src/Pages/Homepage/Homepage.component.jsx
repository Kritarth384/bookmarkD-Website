import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.styles.css";

import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import bookPic1 from "../../assets/bookPic1.png";
import bookPic2 from "../../assets/bookPic2.png";
import bookPic3 from "../../assets/bookPic3.png";
import bookPic4 from "../../assets/bookPic4.png";
import bookPic5 from "../../assets/bookPic5.png";
import bookPic6 from "../../assets/bookPic6.png";
import bookPic7 from "../../assets/bookPic7.png";
import bookPic8 from "../../assets/bookPic8.png";
import ProfilePic from "../../assets/profilePic.png";

const Homepage = () => { 
  const imageUrl = ProfilePic;
  const path = "/messageUsers"
  const exchange = "/exchange";
  const home = "/";
  const community = "/communityPageUser1";
  return (
  <div>
     <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
    <hr className="line" />
    <div className="bookTitleSection">Books from Your <label className="friendTitleSection">Friends</label></div>
    <div className="bookSection">
      <img src={bookPic1} alt="" className="bookImage1" />
      <img src={bookPic2} alt="" className="bookImage2" />
      <img src={bookPic3} alt="" className="bookImage3" />
      <img src={bookPic4} alt="" className="bookImage4" />
    </div>
    <div className="communityTitleSection">Books from the <label className="communityTitleName">Community</label></div>
    <div className="communitySection">
      <img src={bookPic5} alt="" className="bookImage5" />
      <img src={bookPic6} alt="" className="bookImage6" />
      <img src={bookPic7} alt="" className="bookImage7" />
      <img src={bookPic8} alt="" className="bookImage8" />
    </div>

    <MenuItem />
    <div className="endSpace"></div>
    <Link to="/yourShelf">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Your Books</span>
      </button>
    </Link>
    <Link to="/uploadBook">
      <button type="button" className="uploadBookButton">
        <span className="uploadBookName">Upload a Book</span>
      </button>
    </Link>
  </div>
);
}

export default Homepage;
