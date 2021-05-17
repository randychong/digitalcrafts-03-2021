import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello World"
        }
    }
    render() {
        return (
            <div>
                <h1>Class.js</h1>
                <p>{this.state.message}</p>
                <button onClick={() =>
                this.setState({
                    message: "Goodbye World"
                })
                }>Change Message</button>
            </div>
        )
    }
}
