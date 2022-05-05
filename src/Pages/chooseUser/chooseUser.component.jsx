/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import User2 from '../../assets/user2.png'
import User3 from '../../assets/user3.png'
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import './chooseUser.styles.css'
import ProfilePic from "../../assets/profilePic.png";
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

const chooseUser = (props) => {
  const imageUrl = ProfilePic;
  const path = "/messageUsers"
  const exchange = "/exchange";
  const home = "/";
  const community = "/communityPageUser1";

  const [option, setOption] = useState(0);
  const [messageTile1, setMessageTile1] = useState("userMessageTile11");
  const [messageTile2, setMessageTile2] = useState("userMessageTile21");
  const [id, setId] = useState("")
  console.log(props.location.state)

  useEffect(() => {
      setId(props.location.state)
    console.log(option)
    console.log(messageTile1)
    console.log(messageTile2)
  }, [option, messageTile1, messageTile2])

  const updateExchange = async (id) => {
    const userDoc = doc(db, "uploadBook", id);
    const newFields = { exchange: true, option: option };
    await updateDoc(userDoc, newFields);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
  };
  
  return(

  <div>
     <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
    <hr className="line" />
    <div className="messageTitle">
        Messages
    </div>

    <div className={messageTile1} onClick={(e) =>{
        
        if(messageTile1 === "userMessageTile11"){
            setMessageTile1("userMessageTile12")
            setOption(1)

        }
        else{
            setMessageTile1("userMessageTile11")
            setOption(0)
        }
        
    } }>
        <img src={User2} alt="" className="user2Image" />
        <label className="userName1">Sumit Kaif</label>
    </div>

    
    <div className={messageTile2} onClick={(e) =>{
        if(messageTile2 === "userMessageTile21"){
            setMessageTile2("userMessageTile22")
            setOption(2)

        }
        else{
            setMessageTile2("userMessageTile21")
            setOption(0)
        }
    } }>
    <img src={User3} alt="" className="user3Image" />
        <label className="userName2">Anjali Deepak</label>
    </div>
 
    <MenuItem />
    <Link to="/">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Shelf</span>
      </button>
    </Link>

    <Link to="/yourShelf">
      <button type="button" className="updateButtonSection" onClick={() => {
          updateExchange(id);
      }}>
        <span className="updateBookName11">Done</span>
      </button>
    </Link>
  </div>
);
}

export default chooseUser;
