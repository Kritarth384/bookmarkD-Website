import { render } from '@testing-library/react';
import React from 'react'
import './App.css';
import Header from "./components/header/header.component.jsx"
import MenuItem from './components/MenuItem/menuItem.component';
import Homepage from './Pages/Homepage/Homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreMessage from './Pages/preMessage/preMessage.component';
import RightSection from './components/rightSection/rightSection.component';
import uploadBookPage from './Pages/uploadbook/uploadbook.component';
import shelf from './Pages/shelf/shelf.component';
import messageUser from './Pages/messageuser/messageuser.component';
import messageUser2 from './Pages/messageuser2/messageuser2.component';


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
        <Switch>
            <Route exact path = "/" component= {Homepage}/>
            <Route exact path = "/users" component= {PreMessage}/>
            <Route exact path = "/uploadBook" component= {uploadBookPage}/>
            <Route exact path = "/yourShelf" component= {shelf}/>
            <Route exact path = "/messageUsers" component= {messageUser}/>
            <Route exact path = "/messageUser2" component= {messageUser2}/>
        </Switch>
      </div>
    )
  }
}



export default App;
