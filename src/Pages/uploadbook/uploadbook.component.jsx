import React from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import uploadPicIcon from "../../assets/uploadPicIcon.png";
import "./uploadbook.styles.css";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/profilePic.png";

const uploadBookPage = () => {
  const imageUrl = ProfilePic;
  const path = "/messageUsers";

  return (
    <div>
      <Header path={path} imageUrl={imageUrl} />
      <hr className="line" />
      <div className="imageSection"></div>
      <label className="nameBook">Name of Book</label>
      <input className="bookInput"></input>
      <label className="authorName">Name of Author</label>
      <input className="authorNameInput"></input>
      <MenuItem />
      <label className="descriptionName">Description</label>
      <textarea className="descriptionInput"> </textarea>
      <MenuItem />
      <hr className="edge1" />
      <label className="uploadPhotoName">Upload 5 Photos</label>

      <div className="inputPhotoSection">
        <img src={uploadPicIcon} alt="" className="uploadPhotoLogo" />
      </div>
      <input className="inputPhoto" type="file" />

      <div className="inputPhotoSection1">
        <img src={uploadPicIcon} alt="" className="uploadPhotoLogo1" />
      </div>
      <input className="inputPhoto1" type="file" />

      <div className="inputPhotoSection2">
        <img src={uploadPicIcon} alt="" className="uploadPhotoLogo2" />
      </div>
      <input className="inputPhoto2" type="file" />

      <div className="inputPhotoSection3">
        <img src={uploadPicIcon} alt="" className="uploadPhotoLogo3" />
      </div>
      <input className="inputPhoto3" type="file" />

      <div className="inputPhotoSection4">
        <img src={uploadPicIcon} alt="" className="uploadPhotoLogo4" />
      </div>
      <input className="inputPhoto4" type="file" />

      {/* <button className="inputPhoto1">
            <UploadPhotobutton className = "uploadPhotoLogo" />
        </button>
        <button className="inputPhoto2">
            <UploadPhotobutton className = "uploadPhotoLogo" />
        </button>
        <button className="inputPhoto3">
            <UploadPhotobutton className = "uploadPhotoLogo" />
        </button>
        <button className="inputPhoto4">
            <UploadPhotobutton className = "uploadPhotoLogo" />
        </button> */}
      <hr className="edge2" />
      <div className="locationName">Location</div>
      <div className="stateName">State</div>
      <input type="text" className="stateInput"></input>
      <div className="pincodeName">Pincode</div>
      <input type="text" className="pincodeInput"></input>
      <Link to="/yourShelf">
        <button className="postButton">Post</button>
      </Link>
      <button className="cancelButton">Cancel</button>
    </div>
  );
};

export default uploadBookPage;
