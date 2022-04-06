import { render } from '@testing-library/react';
import React from 'react'
import './App.css';
import Header from "./components/header/header.component.jsx"
import MenuItem from './components/MenuItem/menuItem.component';
import Homepage from './Pages/Homepage/Homepage.component';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: ''
    };
  }

  render(){
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}



export default App;
