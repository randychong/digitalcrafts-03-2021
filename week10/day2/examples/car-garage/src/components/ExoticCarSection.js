import React, { Component } from 'react'
import AmericanExCars from "./AmericanExCars"
import ForeignExCars from "./ForeignExCars"

export default class ExoticCarSection extends Component {
    render() {
        return (
            <div>
                <h1>Exotic Car Section</h1>
                <AmericanExCars />
                <ForeignExCars />
            </div>
        )
    }
}