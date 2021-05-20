import React, { Component } from 'react'
import Home from "../images/home.png"
import Send from "../images/send.png"
import Compass from "../images/compass.png"
import Heart from "../images/heart.png"
import Doge from "../images/doge.png"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <navbar className="navbar">
                    <div className="instagram">
                        <p>
                            <a className="instagram">Instagram</a>
                        </p>
                    </div>

                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search"></input>
                    </div>

                    <div className="icon-container">
                        <p>
                            <a>
                                <img src={Home} className="nav-icon"></img>
                            </a>
                        </p>
                        <p>
                            <a>
                            <img src={Send} className="nav-icon"></img>
                            </a>
                        </p>
                        <p>
                            <a>
                                <img src={Compass} className="nav-icon"></img>
                            </a>
                        </p>
                        <p>
                            <a>
                                <img src={Heart} className="nav-icon"></img>
                            </a>
                        </p>
                        <p>
                            <a>
                                <img src={Doge} className="nav-icon"
                                id="doge"></img>
                            </a>
                        </p>
                    </div>
                </navbar>
            </div>
        )
    }
}
