import React, { Component } from 'react'
import Navbar from './components/common/Navbar'
import Routes from './components/common/Routes/Routes'
import Feedback from './components/common/Feedback/Feedback'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
        <Feedback/>
        <Routes />
      </div>
    )
  }
}

export default App
