/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import uploadPicIcon from "../../assets/changePic.png";
import "./updatedBookPage.styles.css";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/profilePic.png";
import { storage } from "../../Services/firebase";
import { v4 } from "uuid";
import { db } from "../../Services/firebase";
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
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

function updatedBook(props) {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [id, setId] = useState("");
  const imageUrl = ProfilePic;
  const exchange = "/exchange";
  const [imageUpload, setImageUpload] = useState(null);
  const path = "/messageUsers";
  const home = "/";
  const community = "/communityPageUser1";
  console.log(props.location.state);
  
  const usersCollectionRef = collection(db, "uploadBook");

      useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      console.log(data.docs);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };
    getUsers()
      
  }, []);

  useEffect(() => {
    console.log(books)
    var newArray = books.filter(function (el) {
        return el.url === props.location.state;
      });
      console.log(newArray.id)
      newArray.map(getFullName);

    function getFullName(item) {
    console.log(item.id)
    console.log(item.bookName)
    console.log(item.authorName)
    console.log(item.description)
    console.log(item.state)
    console.log(item.pincode)
    setId(item.id)
    setBookName(item.bookName)
    setAuthorName(item.authorName)
    setDescription(item.description)
    setState(item.state)
    setPincode(item.pincode)
    }
    
      
  }, [books])

  useEffect(()=> {
    console.log(id)
    console.log(bookName)
    console.log(authorName)
    console.log(description)
    console.log(state)
    console.log(pincode)
  }, [id, authorName, bookName, description, state, pincode])
  


  var newArray = books.filter(function (el) {
    return el.url === props.location.state;
  });

  const post = async (id) => {
    const userDoc = doc(db, "uploadBook", id);
    const newFields = { bookName: bookName, authorName: authorName, description: description, state: state, pincode: pincode };
    await updateDoc(userDoc, newFields);
  };
  const updateExchange = async (id) => {
    const userDoc = doc(db, "uploadBook", id);
    const newFields = { exchange: true };
    await updateDoc(userDoc, newFields);
  };

  console.log(books);

  

  

  return (
    <div>
       <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
      <hr className="line" />
      {newArray.map((bookInfo) => {
        return (
          <div>
            <img className="imageSection11" src={bookInfo.url} alt=""/>

            <input
              className="inputImage"
              type="file"
              onChange={(event) => setImageUpload(event.target.files[0])}
            />

            <label className="nameBook">Name of Book</label>
            <input
              className="bookInput"
              onChange={(e) => {
                  setBookName(e.target.value)}}
              value={bookName}
            ></input>
            <label className="authorName">Name of Author</label>
            <input
              className="authorNameInput"
              onChange={(e) => setAuthorName(e.target.value)}
              value={authorName}
            ></input>
            <MenuItem />
            <label className="descriptionName">Description</label>
            <textarea
              className="descriptionInput"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            >
            {description}
            </textarea>
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
            <input
              type="text"
              className="stateInput"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <div className="pincodeName">Pincode</div>
            <input
              type="text"
              className="pincodeInput"
              onChange={(e) => setPincode(e.target.value)}
              value={pincode}
            />
          </div>
        );
      })}
      <Link to={{ pathname: "/chooseUser",
      state: id}}>
      <button className="exchangeUpdate" >Mark as Exchanged</button>
        </Link>
      <Link to="/yourShelf">
        <button className="postButton" onClick={() => {
                post(id);
              }}>Post</button>
      </Link>
      <Link to="/yourShelf">
      <button className="cancelButton">Cancel</button>
      </Link>
      <Link to="/exchange">
      <button className="exchangeBack"><label className="nameExchange">Back to Exchange Shelf</label></button>
      </Link>
    </div>
  );
}

export default updatedBook;
