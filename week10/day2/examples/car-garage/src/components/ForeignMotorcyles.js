import React, { Component } from 'react'

export default class ForeignMotorcyles extends Component {
    render() {
        const {vehicles} = this.props
        return (
            <div>
                <h3>Foreign Motorcyles</h3>
                <li>{vehicles}</li>
            </div>
        )
    }
}
