import React, { Component } from 'react'
import MuscleCarSection from "./MuscleCarSection"
import ExoticCarSection from "./ExoticCarSection"
import MotorcycleSection from "./MotorcyleSection"

export default class Garage extends Component {
    render() {
        return (
            <div>
                <h1>Garage</h1>
                <MuscleCarSection />
                <ExoticCarSection />
                <MotorcycleSection />
            </div>
        )
    }
}
