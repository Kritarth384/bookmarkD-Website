import React from "react";

import './FriendItems.styles.css'
import ImageIcon from "../imageicon/imageicon.component";

const FriendItems = ({ imageUrl,name, title, place}) => (
    <div className="friend">
    <div className="friendImage">
        <ImageIcon imageUrl={imageUrl} />
    </div>
        <div className="friendData">
            <span className="name">{name}</span>
            <span className="title">{title}</span>
            <span className="place">{place}</span>
        </div>
    </div>
)

export default FriendItems;