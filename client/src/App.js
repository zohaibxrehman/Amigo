import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { FinderPage, LandingPage, PostPage, LoginPage, MakePostPage, DashboardPage, UserPage, UserDashboardPage, EditPostPage, EditProfilePage } from "./views/index.js";
import Navbar from './components/Navbar/Navbar';
import './App.css'
import { checkSession } from './actions/user';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      userType: 'user',
      currentUser: ''
    }
  }
  

  componentDidMount() {
    checkSession(this);
  }


  logoutUser() {
      this.setState({ isLoggedIn: false })
  }

  loginUser = (userType) => {
      this.setState({ userType: userType })
  }

  render() {
    const { isLoggedIn, currentUser } = this.state
    return (
      <div className='amigo'>
        <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser} logoutUser={this.logoutUser} />
        <BrowserRouter>
          <Switch> 
          <Route exact path='/login' render={() => 
                            (<LoginPage loginUser={this.loginUser} />)}/>
            <Route exact path='/' render={() => 
                            (<LandingPage />)}/>
            <Route exact path='/finder' render={() => 
                            (<FinderPage isLoggedIn={isLoggedIn} />)}/>
            <Route path='/post/:postid' component={PostPage} />
            {currentUser === 'admin' && <Route exact path='/admindashboard' render={() => 
                            (<DashboardPage />)}/>}
            <Route exact path='/makepost' render={() => 
                (<MakePostPage />)}/>
            <Route path='/editpost/:postid' component={EditPostPage} />
            <Route path='/edituser/:userid' component={EditProfilePage} />
            <Route path='/user/:userid' component={UserPage} />
            {isLoggedIn && <Route exact path='/userdashboard' render={() => 
                (<UserDashboardPage />)}/>}
          </Switch>
        </BrowserRouter>       
      </div>
    )
  }
}

export default App
