import React from "react";

import './Homepage.styles.css'
import Header from "../../components/header/header.component";
import MenuItem from "../../components/MenuItem/menuItem.component";


const Homepage = () => (
    <div>
        <Header />
        <hr className="line"/>
        <MenuItem />
    </div>
);

export default Homepage;
