import React from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import {ReactComponent as UploadPhotobutton} from '../../assets/uploadPhotobutton.svg'
import './uploadbook.styles.css'
import { Link } from "react-router-dom";

const uploadBookPage = () => (
    <div>
        <Header />
        <hr className="line" />
        <div className="imageSection"></div>
        <label className="nameBook">Name of Book</label>
        <input className="bookInput"></input>
        <label className="authorName">Name of Author</label>
        <input className="authorNameInput"></input>
        <MenuItem />
        <label className="descriptionName">Description</label>
        <textArea className="descriptionInput"></textArea>
        <MenuItem />
        <hr className="edge1" />
        <label className="uploadPhotoName">Upload 5 Photos</label>

        <button className="inputPhoto">
            <UploadPhotobutton className = "uploadPhotoLogo" />
        </button>
        <button className="inputPhoto1">
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
        </button>
        <hr className="edge2" />
        <div className="locationName">Location</div>
        <div className="stateName">State</div>
        <input type ="text" className = "stateInput"></input>
        <div className="pincodeName">Pincode</div>
        <input type ="text" className = "pincodeInput"></input>
        <Link to = "/yourShelf">
        <button className="postButton" >
            Post
        </button>
        </Link>
        <button className="cancelButton">
            Cancel
        </button>
        
    </div>

)

export default uploadBookPage;