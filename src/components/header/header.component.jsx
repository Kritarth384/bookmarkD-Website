import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as InputLogo1 } from '../../assets/inputLogo1.svg'
import { ReactComponent as InputLogo2 } from '../../assets/inputLogo2.svg'
import ProfilePic from "../../assets/profilePic.png"
import { ReactComponent as UserTag1} from "../../assets/userTag.svg"
import ImageIcon from "../imageicon/imageicon.component";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        Home
      </Link>
      <Link className="option" to="/">
        Community
      </Link>
      <Link className="option" to="/">
        Exchange
      </Link>
      <div className="inputSection">
        <InputLogo1 className="inputLogo1" />
        <input className="input" type="text" placeholder="Search..."/>
        <InputLogo2 className="inputLogo2"/>
      </div>

        <UserTag1 className="userTag"/>
        <ImageIcon imageUrl={ProfilePic} />
    
      

      
    </div>
    
  </div>
  
  
  
);
export default Header;


