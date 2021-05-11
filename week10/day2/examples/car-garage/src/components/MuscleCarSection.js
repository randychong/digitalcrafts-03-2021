import React, { Component } from 'react'
import AmericanCars from "./AmericanCars"
import ForeignCars from "./ForeignCars"

export default class MuscleCarSection extends Component {
    render() {
        return (
            <div>
                <h1>Muscle Car Section</h1>
                <AmericanCars />
                <ForeignCars />
            </div>
        )
    }
}
