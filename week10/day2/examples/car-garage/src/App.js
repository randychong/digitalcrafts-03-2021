import './App.css';
import React, { Component } from 'react'
import House from "./components/House"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h1>Randy Chong</h1>
        <House />
      </div>
    )
  }
}

