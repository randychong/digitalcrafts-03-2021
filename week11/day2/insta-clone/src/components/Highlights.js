import React, { Component } from 'react'
import Gamestop from "../images/gamestop-squarelogo.png"
import DogeGlasses from "../images/doge-glasses.png"
import Moon from "../images/moon.png"
import MuchWow from "../images/much-wow.png"

export default class Highlight extends Component {
    render() {
        return (
            <div className="highlights-container">
                <div className="highlights-icon-container">
                    <img src={MuchWow} className="highlights-icon"></img>
                    <p>Much Wow</p>
                </div>
                <div className="highlights-icon-container">
                    <img src={DogeGlasses} className="highlights-icon"></img>
                    <p>Cool Doge</p>
                </div>
                <div className="highlights-icon-container">
                    <img src={Gamestop} className="highlights-icon"></img>
                    <p>Stonks</p>
                </div>
                <div className="highlights-icon-container">
                    <img src={Moon} className="highlights-icon"></img>
                    <p>To The Moon</p>
                </div>
            </div>
        )
    }
}
