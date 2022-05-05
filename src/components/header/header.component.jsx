import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as InputLogo1 } from "../../assets/inputLogo1.svg";
import { ReactComponent as InputLogo2 } from "../../assets/inputLogo2.svg";
import ProfilePic from "../../assets/profilePic.png";
import { ReactComponent as ChatIcon } from "../../assets/chatIcon.svg";
import { ReactComponent as UserTag1 } from "../../assets/userTag.svg";
import ImageIcon from "../imageicon/imageicon.component";

const Header = ({home, community, exchange, path, imageUrl}) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to={home}>
        Home
      </Link>
      <Link className="option" to={community}>
        Community
      </Link>
      <Link className="option" to={exchange}>
        Exchange
      </Link>

      <div className="inputSection">
        <InputLogo1 className="inputLogo1" />
        <input className="input" type="text" placeholder="Search..." />
        <InputLogo2 className="inputLogo2" />
      </div>

      <UserTag1 className="userTag" />
      <img src={imageUrl} alt="" className="profileImage" />

      <Link to={path}>
        <ChatIcon className="chatImageIcon" />
      </Link>
    </div>
  </div>
);
export default Header;
