import React, { Component } from 'react'
import Menu from "../images/Menu.jpg"
import Randy from "../images/Randy.jpg"

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <p>About</p>
                <p>Store</p>
                <p>Gmail</p>
                <p>Images</p>
                <p>
                <img src={Menu} className="Menu"></img>
                </p>
                <p>
                <img src={Randy} className="Randy"></img>
                </p>
            </div>
        )
    }
}
