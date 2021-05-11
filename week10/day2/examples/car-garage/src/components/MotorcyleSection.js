import React, { Component } from 'react'
import AmericanMotorcyles from "./AmericanMotorcyles"
import ForeignMotorcyles from "./ForeignMotorcyles"

export default class MotorcyleSection extends Component {
    render() {
        return (
            <div>
                <h1>Motorcyle Section</h1>
                <AmericanMotorcyles />
                <ForeignMotorcyles />
            </div>
        )
    }
}
