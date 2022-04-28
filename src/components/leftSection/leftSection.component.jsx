import React from "react";

import "./leftSection.styles.css";

const leftSection = () => (
  <div className="leftSection">
    <div className="bookComponent">
      <div className="bookName">Currently Reading</div>
      <div className="bookContent">
        <div className="bookImage">
          <img src="" alt="" />
        </div>

        <div className="bookInfo">
          <span className="bookName">Book Name</span>
          <span className="authorName">author</span>
        </div>
      </div>
      {/* <div className="bookContent">

            <div className="nameOfTheBook">
                Name of the Book
            </div>
            <div className="authorName"></div>
        </div> */}
    </div>
    <div className="readList">left Down</div>
  </div>
);

export default leftSection;
