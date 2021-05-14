import React, { Component } from 'react'

export default class ForeignCars extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h3>Foreign Cars</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
