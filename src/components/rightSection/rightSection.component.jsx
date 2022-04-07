import React from "react";

import './rightSection.styles.css'
import FriendItems from "../FriendItems/FriendItems.component";
import FriendUrl1 from "../../assets/friend1.png"
import FriendUrl2 from "../../assets/friend2.png"
import FriendUrl3 from "../../assets/friend3.png"
import FriendUrl4 from "../../assets/friend4.png"
import FriendUrl5 from "../../assets/friend5.png"

const rightSection = () => (
  <div className="userSection">
    <div className="userName">
        Friends Activity
    </div>
    <div className="friendSection">
      <div>
      <FriendItems imageUrl={FriendUrl1} name="Krishnasai Addala" title="Flatlands" place="Edwin Abbott Abbott" />
      </div>
      <div>
      <FriendItems imageUrl={FriendUrl2} name="Safa Nayaz" title="Warcross" place="Marie Lu" />
      </div>
      <div>
      <FriendItems imageUrl={FriendUrl3} name="Saumik Shashwat" title="All the Bright Places" place="Jennifer Niven" />
      </div>
      <div>
      <FriendItems imageUrl={FriendUrl4} name="Vishwesh Vhavle" title="Fault in Our Stars" place="John Green" />
      </div>
      <div>
      <FriendItems imageUrl={FriendUrl5} name="Arlene McCoy" title="The Silent Patient" place="Alex Michaelidas" />
      </div>
      <button className="viewAllFriend">
        View All
      </button>
    </div>
  </div>
);

export default rightSection;
