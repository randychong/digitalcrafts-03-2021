import React, { Component } from 'react'
import AmericanCars from "./AmericanCars"
import ForeignCars from "./ForeignCars"

export default class MuscleCarSection extends Component {
    render() {
        const {vehicles}= this.props
        return (
            <div>
                <h1>Muscle Car Section</h1>
                <p>This is the muscle car section</p>
                <AmericanCars vehicles={vehicles}/>
                <ForeignCars />
            </div>
        )
    }
}
