import React from "react";
import {ReactComponent as BackIcon} from "../../assets/backIcon.svg";
import User2 from "../../assets/user2.png"
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";
import './messageuser2.styles.css'

const messageUser2 = () => (
    <div>
        <Header />
        <hr className="line"/>
        <BackIcon className="backIcon" />
        <label className="messageTitle">Messages</label>
        <div className="messageUserSection">
            <img src={User2} alt="" className="userImage" />
            <label className="userName1">Sumit Kaif</label>
            <input type="text" className="inputMessage" />
        </div>
        <MenuItem />
    </div>
)

export default messageUser2;