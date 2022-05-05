/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../../components/header/header.component';
import MenuItem from '../../components/MenuItem/menuItem.component';
import BookShelf1 from '../../assets/bookshelf1.png'
import './user3Shelf.styles.css'
import ProfilePic from "../../assets/user3.png";
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

function user3Shelf() { 
  const imageUrl = ProfilePic;
  const path = "/user3Message"
  const exchange = "/exchange3";
  const home = "/user3";
  const community = "/communityPageUser3";
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
            {bookInfo.exchange && bookInfo.option === 2  ? (<img key = {"imag" + bookInfo.url} className={style} onClick={clickImage} src={bookInfo.url} alt="" />
          ) : null}
            </div>
          
          );
        })}

        </div>
      
        
        <Link to="/exchange3">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Back to Exchange Shelf</span>
      </button>
    </Link>
    
    <Link to="/uploadBook3">
      <button type="button" className="uploadBookButton1">
        <span className="uploadBookName">Upload a Book</span>
      </button>
    </Link>
    
    </div>
)
  }

export default user3Shelf;