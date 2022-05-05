/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../../components/header/header.component';
import MenuItem from '../../components/MenuItem/menuItem.component';
import BookShelf1 from '../../assets/bookshelf1.png'
import './shelf.styles.css'
import ProfilePic from "../../assets/profilePic.png";
import { storage } from "../../Services/firebase";
import {v4} from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
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
import { db } from "../../Services/firebase";
import { useLocation } from 'react-router-dom';

function shelf() { 
  const imageUrl = ProfilePic;
  const path = "/messageUsers"
  const exchange = "/exchange";
  const home = "/";
  const community = "/communityPageUser1";
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [books, setBooks] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectImageUrl, setSelectImageUrl] = useState("");
  const [style, setStyle] = useState("bookShelfImage1");
  const [check, setCheck ] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imagesListRef = ref(storage, "images/");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
    
    
  }, []);

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

    books.map(updatedd);
    function updatedd(item) {
      console.log(item.exchange)
      console.log(item.url)
    }
  }, [books])

  useEffect(() => {
    console.log(selectImageUrl)
  }, [selectImageUrl])

  function clickImage(e) {
    const {src} = e.target;
    console.log(src)

    setSelectImageUrl(src)
    if(!check){
      setCheck(true)
    }
    else {
      setCheck(false)
    }
    
  }

  console.log(imageUrls)

  books.sort(function (a, b) {
    return a.created - b.created;
  });



  return (
    <div>
         <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
        <hr className="line" />
        <div className='shelfName'>Your <label style={{color: "#F44336"}}>Shelf</label></div>
        <MenuItem />
        <div className = "bookShelfSection34">
     
        {books.map((bookInfo) => {
          return (
            <div>
            {!bookInfo.exchange ? (<img key = {"imag" + bookInfo.url} className={style} onClick={clickImage} src={bookInfo.url} alt="" />
          ) : null}
            </div>
          
          );
        })}

        </div>
      
        
        <Link to="/exchange">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Back to Exchange Shelf</span>
      </button>
    </Link>
    <input type = "checkbox" id = "check" checked={check} onClick={() => setCheck(!check)} className="checkSelect" />
    <Link to="/uploadBook">
      <button type="button" className="uploadBookButton1">
        <span className="uploadBookName">Upload a Book</span>
      </button>
    </Link>
    <Link to={{ pathname: "/updatedBook",
          state: selectImageUrl}}>
      <button type="button" className="updateButtonSection">
        <span className="updateBookName11">Update Book</span>
      </button>
    </Link>
    </div>
)
  }

export default shelf;