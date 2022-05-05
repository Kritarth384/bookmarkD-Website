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
import MessageUser2 from './Pages/messageuser2/messageuser2.component';
import firebase from './Services/firebase'
import User2 from './Pages/user2/user2.component';
import user2Message from './Pages/user2Message/user2Message.component';
import MessageUser1 from './Pages/MessageUser1/MessageUser1.component';
import MessageUser12 from './Pages/MessageUser12/MessageUser12.component';
import User3 from './Pages/user3/user3.component';
import user3Message from './Pages/user3Message/user3Message.component';
import MessageUser3 from './Pages/messageuser3/messageuser3.component';
import updatedBook from './Pages/updatedBookPage/updatedBookPage.component';
import chooseUser from './Pages/chooseUser/chooseUser.component';
import user2Shelf from './Pages/user2Shelf/user2Shelf.component';
import user3Shelf from './Pages/user3Shelf/user3Shelf.component';
import mainHome from './Pages/mainHome/mainHome.component';
import mainCommunity from './Pages/mainCommunity/mainCommunity.component';
import mainCommunity2 from './Pages/mainCommunity2/mainCommunity2.component';
import mainCommunity3 from './Pages/mainCommunity3/mainCommunity3.component';
import mainHome3 from './Pages/mainHome3/mainHome3.component';
import mainHome2 from './Pages/mainHome2/mainHome2.component';
import uploadBookPage2 from './Pages/uploadBook2/uploadBook2.component';
import uploadBookPage3 from './Pages/uploadBook3/uploadBook3.component';

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
            <Route exact path = "/" component= {mainHome}/>
            <Route exact path = "/user2" component= {mainHome2}/>
            <Route exact path = "/user3" component= {mainHome3}/>
            <Route exact path = "/exchange" component= {Homepage}/>
            <Route exact path = "/communityPageUser1" component= {mainCommunity}/>
            <Route exact path = "/communityPageUser2" component= {mainCommunity2}/>
            <Route exact path = "/communityPageUser3" component= {mainCommunity3}/>
            <Route exact path = "/users" component= {PreMessage}/>
            <Route exact path = "/uploadBook" component= {uploadBookPage}/>
            <Route exact path = "/uploadBook2" component= {uploadBookPage2}/>
            <Route exact path = "/uploadBook3" component= {uploadBookPage3}/>
            <Route exact path = "/yourShelf" component= {shelf}/>
            <Route exact path = "/messageUsers" component= {messageUser}/>
            <Route exact path = "/messageUser2" component= {MessageUser2}/>
            <Route exact path = "/messageUser3" component= {MessageUser3}/>
            <Route exact path = "/messageUser1" component= {MessageUser1}/>
            <Route exact path = "/messageUser12" component= {MessageUser12}/>
            <Route exact path = "/exchange2" component= {User2}/>
            <Route exact path = "/exchange3" component= {User3}/>
            <Route exact path = "/user2Message" component= {user2Message}/>
            <Route exact path = "/user3Message" component= {user3Message}/>
            <Route exact path = "/updatedBook" component= {updatedBook}/>
            <Route exact path = "/chooseUser" component= {chooseUser}/>
            <Route exact path = "/user2Shelf" component= {user2Shelf}/>
            <Route exact path = "/user3Shelf" component= {user3Shelf}/>
        </Switch>
      </div>
    )
  }
}



export default App;
