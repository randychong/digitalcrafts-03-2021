import React, { Component } from 'react'
import AmericanExCars from "./AmericanExCars"
import ForeignExCars from "./ForeignExCars"

export default class ExoticCarSection extends Component {
    render() {
        const {vehicles}= this.props
        return (
            <div>
                <h1>Exotic Car Section</h1>
                <p>This is the exotic car section</p>
                <AmericanExCars vehicles={vehicles}/>
                <ForeignExCars vehicles={vehicles}/>
            </div>
        )
    }
}
