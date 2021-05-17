import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100
        }
    }
    render() {
        return (
            <div>
                <h1>Count.js</h1>
                <p>You have {this.state.count} dollars.</p>
                <button onClick={() =>
                this.setState({
                    count: this.state.count + 100
                })
                }>Make more money</button>
            </div>
        )
    }
}
