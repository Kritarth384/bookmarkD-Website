/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import uploadPicIcon from "../../assets/uploadPicIcon.png";

import { Link } from "react-router-dom";
import ProfilePic from "../../assets/user3.png";
import { storage } from "../../Services/firebase";
import {v4} from "uuid";
import { db } from "../../Services/firebase";
import ChangePic from "../../assets/changePic.png"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

function uploadBookPage3() {
  const imageUrl = ProfilePic;
  const path = "/user3Message";
  const exchange = "/exchange3";
  const home = "/user3";
  const community = "/communityPageUser3";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageUpload, setImageUpload] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imageUrls, setImageUrls] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imagesListRef = ref(storage, "images/");
  const bookCollectionRef = collection(db, "uploadBook");
  const [pic,setPic] = useState(uploadPicIcon);
  const [picI,setPicI] = useState(uploadPicIcon);
  const [pic1,setPic1] = useState(uploadPicIcon);
  const [pic2,setPic2] = useState(uploadPicIcon);
  const [pic3,setPic3] = useState(uploadPicIcon);
  const [pic4,setPic4] = useState(uploadPicIcon);
  const [check, setCheck] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
    
    
  }, []);


  const post = async (e) => {
    await addDoc(bookCollectionRef, {
      bookName: bookName,
      authorName: authorName,
      description: description,
      state: state,
      pincode: pincode,
      created: Timestamp.now(),
      url: ImageUrl,
      exchange: false,
      option: 0
    });
  };
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("user" + url)
        setImageUrl(url)
        setImageUrls((prev) => [...prev, url]);
      });
    });
    setCheck(true)
  };

  

  return (
    <div>
       <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
      <hr className="line" />
      <div className="imageSection11">
      <img src={picI} alt="" className="bookPhoto" />
      </div>
      <input className="inputImage" type = "file" onChange={(event) => {setImageUpload(event.target.files[0])
      setPicI(ChangePic)}} />
      <button className="uploadButton" onClick={uploadFile} >Upload</button>
      <input type = "checkbox" id = "check" className="checkUpload" checked={check} />
      <label className="nameBook">Name of Book</label>
      <input className="bookInput" onChange={(e) => setBookName(e.target.value)}></input>
      <label className="authorName">Name of Author</label>
      <input className="authorNameInput" onChange={(e) => setAuthorName(e.target.value)} ></input>
      <MenuItem />
      <label className="descriptionName">Description</label>
      <textarea className="descriptionInput" onChange={(e) => setDescription(e.target.value)}> </textarea>
      <MenuItem />
      <hr className="edge1" />
      <label className="uploadPhotoName">Upload 5 Photos</label>

      <div className="inputPhotoSection">
        <img src={pic} alt="" className="uploadPhotoLogo" />
      </div>
      <input className="inputPhoto" type="file" onChange={(e) => setPic(ChangePic)} />

      <div className="inputPhotoSection1">
        <img src={pic1} alt="" className="uploadPhotoLogo1" />
      </div>
      <input className="inputPhoto1" type="file" onChange={(e) => setPic1(ChangePic)} />

      <div className="inputPhotoSection2">
        <img src={pic2} alt="" className="uploadPhotoLogo2" />
      </div>
      <input className="inputPhoto2" type="file" onChange={(e) => setPic2(ChangePic)} />

      <div className="inputPhotoSection3">
        <img src={pic3} alt="" className="uploadPhotoLogo3" />
      </div>
      <input className="inputPhoto3" type="file" onChange={(e) => setPic3(ChangePic)} />

      <div className="inputPhotoSection4">
        <img src={pic4} alt="" className="uploadPhotoLogo4" />
      </div>
      <input className="inputPhoto4" type="file" onChange={(e) => setPic4(ChangePic)} />

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
      <input type="text" className="stateInput" onChange={(e) => setState(e.target.value)}></input>
      <div className="pincodeName">Pincode</div>
      <input type="text" className="pincodeInput" onChange={(e) => setPincode(e.target.value)}></input>
      <Link to="/user3Shelf">
        <button className="postButton" onClick={post}>Post</button>
      </Link >
      <Link to="/user3Shelf">
      <button className="cancelButton">Cancel</button>
      </Link>
      <Link to="/exchange3">
      <button className="exchangeBack"><label className="nameExchange">Back to Exchange Shelf</label></button>
      </Link>

    </div>
  );
};

export default uploadBookPage3;
