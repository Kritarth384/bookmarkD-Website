import React from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import ProfilePic from "../../assets/user2.png";
import B1 from "../../assets/b1.png";
import B2 from "../../assets/b2.png";
import FullStar from "../../assets/fullStar.png"
import HalfStar from "../../assets/halfStar.png"
import EmptyStar from "../../assets/emptyStar.png"
import "./mainHome2.styles.css";
import { Link } from "react-router-dom";

function mainHome2() {
  const imageUrl = ProfilePic;
  const path = "/user2Message";
  const exchange = "/exchange2";
  const home = "/user2";
  const community = "/communityPageUser2";
  return (
    <div>
       <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
      <hr className="line" />
      <div className="reviewSection1">
      <label className="reviewTitle1">Mohammad Kaif <label style={{color: "white"}}>posted a review</label></label>
        <img src={B1} alt="" className="reviewImage1" />
        <label className="reviewBookTitle1">
          Our Adorable Romance Olivia Wilson
        </label>
        <img src={FullStar} alt="" className="fullStar1" />
        <img src={FullStar} alt="" className="fullStar2" />
        <img src={FullStar} alt="" className="fullStar3" />
        <img src={FullStar} alt="" className="fullStar4" />
        <img src={HalfStar} alt="" className="fullStar5" />
        <label className="reviewBookDescription1">
          “A beautiful journey of never ending drama and a tearful ending.
          Olivia has once again outdone herself, and I’m fully here to see where
          she decides to go from here. The story of the protagonist, Sana and
          how she recieves a text from an old friend after 2 years might be
          generic, but definetly works. A must read...”
        </label>
        <label className="date">Tuesday, 1:07 AM</label>
        <label className="readMore">Read More</label>
      </div>
      <div className="reviewSection2">
        <label className="reviewTitle1">Saumya Hirna <label style={{color: "white"}}>posted a review</label></label>
        <img src={B2} alt="" className="reviewImage1" />
        <label className="reviewBookTitle1">
        In The Dark Woods
Claudia Wilson
        </label>
        <img src={FullStar} alt="" className="fullStar1" />
        <img src={FullStar} alt="" className="fullStar2" />
        <img src={HalfStar} alt="" className="fullStar3" />
        <img src={EmptyStar} alt="" className="fullStar4" />
        <img src={EmptyStar} alt="" className="fullStar5" />
        <label className="reviewBookDescription1">
        “A mediocre attempt at horror with cheap jump scares that rarely land and 
an overly sexualized female supporting character who’s only purpose is to be a 
damsel in distress. An utter waste of time in my opinion, skip...” 
        </label>
        <label className="date">Monday, 5:47 PM</label>
        <label className="readMore">Read More</label>
      </div>
      <div className="midSection1">
          <div className="rightSection1"></div>
          <label className="label1">Browse</label>
          <label className="label2">Reviews</label>
      </div>

      <MenuItem />
      <Link to="/user2Shelf">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Your Books</span>
      </button>
    </Link>
    <Link to="/uploadBook2">
      <button type="button" className="uploadBookButton">
        <span className="uploadBookName">Upload a Book</span>
      </button>
    </Link>
    </div>
  );
}

export default mainHome2;
