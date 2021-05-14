import React, { Component } from 'react'
import AmericanMotorcyles from "./AmericanMotorcyles"
import ForeignMotorcyles from "./ForeignMotorcyles"

export default class MotorcyleSection extends Component {
    render() {
        const {vehicles}= this.props
        return (
            <div>
                <h1>Motorcyle Section</h1>
                <p>This is the motorcyle section</p>
                <AmericanMotorcyles vehicles={vehicles}/>
                <ForeignMotorcyles vehicles={vehicles}/>
            </div>
        )
    }
}
