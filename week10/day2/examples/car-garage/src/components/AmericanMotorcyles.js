import React, { Component } from 'react'

export default class AmericanMotorcyles extends Component {
    render() { 
        const {vehicles} = this.props
        return (
            <div>
                <h3>American Motorcyles</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
