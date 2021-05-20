import React, { Component } from 'react'
import Clouds from "../images/clouds.png"
import RandyFestive from "../images/randy-festive.png"
import Sushi from "../images/sushi.png"
import Denver from "../images/denver.png"


export default class Highlight extends Component {
    render() {
        return (
            <div className="highlights-container">
                <div>
                    <img src={Clouds} className="highlights-icon"></img>
                    <p>Travel</p>
                </div>
                <div>
                    <img src={RandyFestive} className="highlights-icon"></img>
                    <p>Randy</p>
                </div>
                <div>
                    <img src={Sushi} className="highlights-icon"></img>
                    <p>Food</p>
                </div>
                <div>
                    <img src={Denver} className="highlights-icon"></img>
                    <p>Korea</p>
                </div>
            </div>
        )
    }
}
