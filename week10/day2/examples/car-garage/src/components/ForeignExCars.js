import React, { Component } from 'react'

export default class ForeignExCars extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h3>Foreign Exotic Cars</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
