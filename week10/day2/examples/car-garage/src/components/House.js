import React, { Component } from 'react'
import Garage from "./Garage"

export default class House extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h1>House</h1>
                <p>This is my house</p>
                <Garage vehicles={vehicles}/>
            </div>
        )
    }
}
