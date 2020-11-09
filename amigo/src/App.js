import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { FinderPage, LandingPage, PostPage, LoginPage, MakePostPage, DashboardPage, UserDashboardPage } from "./views/index.js";
import Navbar from './components/Navbar/Navbar';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='amigo'>
        <Navbar />
        <BrowserRouter>
          <Switch> 
          <Route exact path='/login' render={() => 
                            (<LoginPage />)}/>
            <Route exact path='/' render={() => 
                            (<LandingPage />)}/>
            <Route exact path='/finder' render={() => 
                            (<FinderPage />)}/>
            <Route exact path='/post' render={() => 
                            (<PostPage />)}/>
            <Route exact path='/dashboard' render={() => 
                            (<DashboardPage />)}/>
            <Route exact path='/makepost' render={() => 
                (<MakePostPage />)}/>
            <Route exact path='/userdashboard' render={() => 
                (<UserDashboardPage />)}/>
          </Switch>
        </BrowserRouter>       
      </div>
    )
  }
}

export default App
