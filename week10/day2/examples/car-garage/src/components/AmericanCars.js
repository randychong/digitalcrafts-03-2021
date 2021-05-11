import React, { Component } from 'react'

export default class AmericanCars extends Component {
    render() {
        const{vehicles} = this.props
        return (
            <div>
                <h3>American Cars</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
