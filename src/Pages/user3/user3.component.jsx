import React from "react";
import { Link } from "react-router-dom";
import "./user3.styles.css";

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
import user3 from "../../assets/user3.png"

const User3 = () => {
    const path = "/user3Message";
    const imageUrl = user3;
    return (
  <div>
    <Header path = {path} imageUrl = {imageUrl} />
    <hr className="line" />
    <div className="bookTitleSection">Books from Your friends</div>
    <div className="bookSection">
      <img src={bookPic1} alt="" className="bookImage1" />
      <img src={bookPic2} alt="" className="bookImage2" />
      <img src={bookPic3} alt="" className="bookImage3" />
      <img src={bookPic4} alt="" className="bookImage4" />
    </div>
    <div className="communityTitleSection">Books from the Community</div>
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
    )
};

export default User3;
