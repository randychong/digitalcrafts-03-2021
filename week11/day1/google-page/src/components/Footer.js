import React, { Component } from 'react'
import Leaf from "../images/Leaf.jpg"

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer-menu">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                    <p>
                        <img src={Leaf} className="Leaf"></img> Carbon neutral since 2007
                    </p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        )
    }
}
