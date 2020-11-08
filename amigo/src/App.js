import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { FinderPage, LandingPage, PostPage } from "./views/index.js";
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='amigo'>
        <Navbar />
        <BrowserRouter>
          <Switch> 
            <Route exact path='/' render={() => 
                            (<LandingPage />)}/>
            <Route exact path='/finder' render={() => 
                            (<FinderPage />)}/>
            <Route exact path='/post' render={() => 
                            (<PostPage />)}/>
          </Switch>
        </BrowserRouter>       
      </div>
    )
  }
}

export default App
