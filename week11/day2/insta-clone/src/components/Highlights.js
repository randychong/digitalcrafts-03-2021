import React, { Component } from 'react'
import Clouds from "../images/clouds.png"
import RandyFestive from "../images/randy-festive.png"
import Sushi from "../images/sushi.png"
import Denver from "../images/denver.png"
import Doge from "../images/doge.png"

export default class Highlight extends Component {
    render() {
        return (
            <div className="highlights-container">
                <div>
                    <img src={Doge} className="highlights-icon"></img>
                    <p>Much Wow</p>
                </div>
                <div>
                    <img src={Doge} className="highlights-icon"></img>
                    <p>Doge</p>
                </div>
                <div>
                    <img src={Doge} className="highlights-icon"></img>
                    <p>Stonks</p>
                </div>
                <div>
                    <img src={Doge} className="highlights-icon"></img>
                    <p>To The Moon</p>
                </div>
            </div>
        )
    }
}
