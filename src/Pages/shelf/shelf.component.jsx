import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.component';
import MenuItem from '../../components/MenuItem/menuItem.component';
import BookShelf1 from '../../assets/bookshelf1.png'
import './shelf.styles.css'

const shelf = () => (
    <div>
        <Header />
        <hr className="line" />
        <div className='shelfName'>Your Shelf</div>
        <MenuItem />
        <div className = "bookShelfSection"></div>
        <img className='bookShelfImage1' src={BookShelf1} alt="" />
        <Link to="/">
      <button type="button" className="viewShelfButton">
        <span className="viewShelfName">Back to Exchange Shelf</span>
      </button>
    </Link>
    <Link to="/uploadBook">
      <button type="button" className="uploadBookButton">
        <span className="uploadBookName">Upload a Book</span>
      </button>
    </Link>
    </div>
)

export default shelf;