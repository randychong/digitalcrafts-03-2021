import React, { Component } from 'react'
import Garage from "./Garage"

export default class House extends Component {
    render() {
        return (
            <div>
                <h1>House</h1>
                <Garage />
            </div>
        )
    }
}
