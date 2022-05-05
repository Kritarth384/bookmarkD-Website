import React, {useState, useEffect} from "react";
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

const User3 = () => {
    const path = "/user3Message";
    const exchange = "/exchange3";
  const home = "/user3";
  const community = "/communityPageUser3";
    const imageUrl = user3;
    const [books, setBooks] = useState([]);
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
    

    <div className = "usersExchangeBooks">
     
        {books.map((bookInfo) => {
          return (
            <div>
            {!bookInfo.exchange ? (<Link to = "/user3Message"><img key = {"imag" + bookInfo.url} className="bookShelfImage133" src={bookInfo.url} alt="" /></Link>
          ) : null}
            </div>
          
          );
        })}

        </div>

    <MenuItem />
    <div className="endSpace"></div>
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
    )
};

export default User3;
