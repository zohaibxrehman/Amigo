import React, { Component } from 'react'
import { FinderPage, LandingPage, PostPage } from "./views/index.js";

export class App extends Component {
  render() {
    return (
      <div>
        <FinderPage />
        <LandingPage />
        <PostPage />
      </div>
    )
  }
}

export default App
