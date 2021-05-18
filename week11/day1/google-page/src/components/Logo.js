import React, { Component } from 'react'
import Google from "../images/Google.jpg"

export default class Logo extends Component {
    render() {
        return (
            <div className="Logo-container">
                <p>
                    <img src={Google} className="Google"></img>
                </p>
            </div>
        )
    }
}
