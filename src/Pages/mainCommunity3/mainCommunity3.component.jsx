import React from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import ProfilePic from "../../assets/user3.png";
import { Link } from "react-router-dom";
import "./mainCommunity3.styles.css";

function mainCommunity3() {
  const imageUrl = ProfilePic;
  const path = "/user3Message";
  const exchange = "/exchange3";
  const home = "/user3";
  const community = "/communityPageUser3";
  return (
    <div>
       <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
      <hr className="line" />
      <div className="communitySection1">
          <label className="communityTitle1">Arya Sinha <label style={{color: "white"}}>posted a new chapter of</label> A Train to Nowhere</label>
          <div className="box1"><label className="boxLabel1">Mystery</label></div>
          <div className="box2">
          <label className="boxLabel1">Drama</label>
          </div>
          <div className="box3">
          <label className="boxLabel1">Horror</label>
          </div>
          <div className="box4">
          <label className="boxLabel1">Slow-Burn</label>
          </div>
          <label className="date2">Tuesday, 1:07 AM</label>
          <label className="readMe2">Read More</label>
      </div>
      <div className="communitySection2">
          <label className="communityTitle1">Ayush Singh <label style={{color: "white"}}>posted a new chapter of</label> Behind You</label>
          <div className="box1"><label className="boxLabel1">Mystery</label></div>
          <div className="box2">
          <label className="boxLabel1">Drama</label>
          </div>
          <div className="box3">
          <label className="boxLabel1">Horror</label>
          </div>
          <div className="box4">
          <label className="boxLabel1">Psychological </label>
          </div>
          <label className="date2">Tuesday, 1:07 AM</label>
          <label className="readMe2">Read More</label>
      </div>
      <div className="communitySection3">
          <label className="communityTitle1">Shraddha Raghuram <label style={{color: "white"}}>posted a new chapter of</label> Almost Died</label>
          <div className="box1"><label className="boxLabel1">Comedy</label></div>
          <div className="box2">
          <label className="boxLabel1">Romance</label>
          </div>
          <div className="box3">
          <label className="boxLabel1">Slice of Life</label>
          </div>
          <label className="date2">Tuesday, 1:07 AM</label>
          <label className="readMe2">Read More</label>
      </div>
      <MenuItem />
      <Link to="/user3Shelf">
        <button type="button" className="viewShelfButton">
          <span className="viewShelfName">Your Books</span>
        </button>
      </Link>
      <Link to="/uploadBook3">
        <button type="button" className="uploadBookButton">
          <span className="uploadBookName">Upload a Book</span>
        </button>
      </Link>
    </div>
  );
}

export default mainCommunity3;
