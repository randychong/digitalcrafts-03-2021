import React, { Component } from 'react'
import Home from "../images/home.png"
import Send from "../images/send.png"
import Compass from "../images/compass.png"
import Heart from "../images/heart.png"
import Randy from "../images/randy.png"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <navbar className="navbar">
                    <p>
                        <a>Instagram</a>
                    </p>
                    <input type="text" placeholder="Search" className="search"></input>
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
                            <img src={Randy} className="nav-icon"></img>
                        </a>
                    </p>
                </navbar>
            </div>
        )
    }
}
