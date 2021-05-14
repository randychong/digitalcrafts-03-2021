import React, { Component } from 'react'

export default class AmericanExCars extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h3>American Exotic Cars</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
