import React, { Component } from 'react'
import MuscleCarSection from "./MuscleCarSection"
import ExoticCarSection from "./ExoticCarSection"
import MotorcycleSection from "./MotorcyleSection"

export default class Garage extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h1>Garage</h1>
                <p>This is my garage</p>
                <MuscleCarSection vehicles={vehicles}/>
                <ExoticCarSection />
                <MotorcycleSection />
            </div>
        )
    }
}
