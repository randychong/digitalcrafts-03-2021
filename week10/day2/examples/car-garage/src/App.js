import './App.css';
import React, { Component } from 'react'
import House from "./components/House"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles: [
        {
          muscle: [
            {american: ["Dodge Charger"]}
        ]
        }
      ]
    }
  }
  render() {
    const {vehicles} = this.state;
    return (
      <div>
        <h1>Randy Chong</h1>
        <House vehicles={vehicles[0].muscle[0].american}/>
      </div>
    )
  }
}

