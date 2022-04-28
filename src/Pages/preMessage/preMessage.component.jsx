import React from "react";
import Header from "../../components/header/header.component";
import RightSection from "../../components/rightSection/rightSection.component";

const preMessage = () => (
    <div>
        <Header />
        <hr className="line"/>
        <div className="messageTitle">
            Messages
        </div>
        {/* <RightSection /> */}
    </div>
);

export default preMessage;