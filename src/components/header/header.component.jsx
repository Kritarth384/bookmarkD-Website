import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
      <Link className="option" to="/">
        BOOKS
      </Link>
      <Link className="option" to="/">
        AUTHOR
      </Link>
      <Link className="option" to="/">
        COMMUNITY
      </Link>
      <input className="input" type="text" />

      
    </div>
    
  </div>
  
  
  
);
export default Header;


