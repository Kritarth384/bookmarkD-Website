import React, { useState, useEffect, useRef } from "react";
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
  query,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import MessageUser1 from "../MessageUser1/MessageUser1.component";
import { formatRelative } from 'date-fns';

function MessageUser2() {
  const imageUrl = ProfilePic;
  const path = "/messageUsers";
  const exchange = "/exchange";
  const home = "/";
  const community = "/communityPageUser1";
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputMessage, setInputMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  const [place, setPlace] = useState("Type The Message Here")
  const usersCollectionRef = collection(db, "user1ToUser2");
  const formatDate = date => {
    let formattedDate = '';
    if (date) {
      // Convert the date in words relative to the current date
      formattedDate = formatRelative(date, new Date());
      // Uppercase the first letter
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
  };

  const type = 1;
  const submit = async (e) => {
    await addDoc(usersCollectionRef, {
      message: inputMessage,
      created: Timestamp.now(),
      type: type,
    });

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
      setInputMessage("");
      users.sort(function (a, b) {
        return a.created - b.created;
      });
      setInputMessage("")
      console.log(users);
      setUpdate(false);
      console.log(users);
    };
    setInputMessage("")
    inputRef.current.focus()
    getUsers();
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    users.sort(function (a, b) {
      return a.created - b.created;
    });

    console.log(users);

    getUsers();
  });

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    users.sort(function (a, b) {
      return a.created - b.created;
    });

    console.log(users);

    getUsers();
  }, []);

  users.sort(function (a, b) {
    return a.created - b.created;
  });

  console.log(users);
  users.reverse();
  const placeHolderChange = () => {
    setPlace("");
  }
  const placeHolderUpdate = () => {
    setPlace("Type The Message Here");
  }

  return (
    <div>
       <Header path = {path} imageUrl = {imageUrl} exchange={exchange} home={home} community={community} />
      <hr className="line" />
      <Link to="/messageUsers">
        <BackIcon className="backIcon" />
      </Link>
      <label className="messageTitle">Messages</label>
      <div className="messageUserSection">
        <img src={User2} alt="" className="userImage" />
        <label className="userName1r">Sumit Kaif</label>
        <input
          type="text"
          ref= {inputRef}
          className="inputMessage"
          value={inputMessage}
          placeholder={place}
          onChange={(e) => setInputMessage(e.target.value)}
          onClick={placeHolderChange}
          onBlur={placeHolderUpdate}
        />
        <div className="messageSection">
          {users.map((user) => {
            return (
              <div className="">
                {" "}
                {user.type === 1 ? (
                  <div className="mm">
                  <h1 className="updatedMessage">{user.message}</h1>
                  <span className="dateSection">{formatDate(new Date(user.created.seconds * 1000))}</span>
                  </div>
                ) : (
                  <div className="mm1">
                  <h1 className="updatedMessage1">{user.message}</h1>
                  <span className="dateSection1">{formatDate(new Date(user.created.seconds * 1000))}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* if(users && !update){
          <MessageUser1 userTemp={users} />
        }
       */}
        </div>
        <button onClick={submit} className="submitButtonSection">
          <img src={submitButtonIcon} alt="" className="submitButtonIcon" />
        </button>
      </div>
      <MenuItem />
    </div>
  );
}

export default MessageUser2;
