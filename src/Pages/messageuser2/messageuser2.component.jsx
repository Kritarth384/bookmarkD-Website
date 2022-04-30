import React, { useState, useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/backIcon.svg";
import User2 from "../../assets/user2.png";
import submitButtonIcon from "../../assets/submitButtonIcon.png";
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import "./messageuser2.styles.css";
import firebase from "../../Services/firebase";
import { db } from "../../Services/firebase";
import ProfilePic from "../../assets/profilePic.png";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  orderBy,
  query
} from "firebase/firestore";
import { Link } from "react-router-dom";

function MessageUser2() {
  const imageUrl = ProfilePic;
  const path = "/messageUsers"
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputMessage, setInputMessage] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  
  const submit = async (e) => {
    await addDoc(usersCollectionRef, { message: inputMessage, created: Timestamp.now() });
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef , orderBy('created', 'desc'));
        console.log(data)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();

      console.log(users)
  };


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(((usersCollectionRef, orderBy('created', 'desc'))));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    console.log(users)
  }, []);
  return (
    <div>
    
    <Header path = {path} imageUrl = {imageUrl} />
      <hr className="line" />
      <Link to = "/messageUsers">
      <BackIcon className="backIcon" />
      </Link>
      <label className="messageTitle">Messages</label>
      <div className="messageUserSection">
        <img src={User2} alt="" className="userImage" />
        <label className="userName1r">Sumit Kaif</label>
        <input
          type="text"
          className="inputMessage"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={submit} className="submitButtonSection">
          <img src={submitButtonIcon} alt="" className="submitButtonIcon" />
        </button>
        {users.map((user) => {
        return (
          <div className="hello">
            {" "}
            <h1 className="updatedMessage">Name: {user.message}</h1>

            
          </div>
        );
      })}
      </div>
      <MenuItem />
      
      
    </div>
  );
}

export default MessageUser2;