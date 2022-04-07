import React from "react";

import './imageicon.styles.css'

const ImageIcon = ({ imageUrl }) => (
    <img src={imageUrl} alt="" className="profilePic"/>
);

export default ImageIcon;